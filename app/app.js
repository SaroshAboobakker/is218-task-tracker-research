// Connect to Supabase
const supabaseClient = window.supabase.createClient(
    window.APP_CONFIG.supabaseUrl,
    window.APP_CONFIG.supabaseKey
);

// Get page elements
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const authSection = document.getElementById("auth-section");
const dashboard = document.getElementById("dashboard");
const message = document.getElementById("message");
const welcomeMessage = document.getElementById("welcome-message");
const logoutButton = document.getElementById("logout-button");
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDate = document.getElementById("task-date");
const taskList = document.getElementById("task-list");

// Display messages
function showMessage(text) {
    message.textContent = text;
}

function showTaskMessage(text) {
    let status = document.getElementById("task-message");

    if (!status) {
        status = document.createElement("p");
        status.id = "task-message";
        taskList.before(status);
    }

    status.textContent = text;
}

// Repository Pattern: handles task database operations
class TaskRepository {
    async getAll() {
        const { data, error } = await supabaseClient
            .from("tasks")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) throw error;
        return data;
    }

    async create(title, dueDate) {
        const { data, error } = await supabaseClient
            .from("tasks")
            .insert({
                title: title,
                due_date: dueDate || null
            })
            .select()
            .single();

        if (error) throw error;
        return data;
    }
}

const taskRepository = new TaskRepository();

// Display saved tasks
async function loadTasks() {
    taskList.replaceChildren();
    showTaskMessage("Loading tasks...");

    try {
        const tasks = await taskRepository.getAll();

        showTaskMessage("");

        if (tasks.length === 0) {
            taskList.textContent = "You have no tasks yet.";
            return;
        }

        tasks.forEach(function(task) {
            const item = document.createElement("div");
            item.className = "auth-box";

            const title = document.createElement("h3");
            title.textContent = task.title;
            item.appendChild(title);

            if (task.due_date) {
                const date = document.createElement("p");
                date.textContent = "Due: " + task.due_date;
                item.appendChild(date);
            }

            taskList.appendChild(item);
        });
    } catch (error) {
        showTaskMessage("Could not load tasks: " + error.message);
    }
}

// Create an account
signupForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        showMessage(error.message);
    } else if (data.session) {
        showMessage("Account created successfully!");
    } else {
        showMessage("Account created! Check your email to confirm before signing in.");
    }
});

// Sign in
loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const { error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        showMessage(error.message);
    }
});

// Add a task
taskForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const dueDate = taskDate.value;

    if (!title) {
        showTaskMessage("Please enter a task title.");
        return;
    }

    try {
        await taskRepository.create(title, dueDate);
        taskForm.reset();
        showTaskMessage("Task saved successfully!");
        await loadTasks();
    } catch (error) {
        showTaskMessage("Could not save task: " + error.message);
    }
});

// Update the page when sign-in status changes
supabaseClient.auth.onAuthStateChange(function(event, session) {
    if (session) {
        authSection.hidden = true;
        dashboard.hidden = false;
        welcomeMessage.textContent = "Welcome, " + session.user.email;
        loadTasks();
    } else {
        authSection.hidden = false;
        dashboard.hidden = true;
        taskList.replaceChildren();
    }
});

// Sign out
logoutButton.addEventListener("click", async function() {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        showTaskMessage(error.message);
    }
});
