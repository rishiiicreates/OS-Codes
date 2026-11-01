import tkinter as tk
from tkinter import messagebox

def handle_login():
    username = username_entry.get()
    email = email_entry.get()

    if username and email:
        messagebox.showinfo("Login Success", f"Welcome {username}!\nEmail: {email}")
        result_label.config(text=f"Welcome, {username}!", fg="green")
    else:
        messagebox.showwarning("Error", "Please enter both username and email")
        result_label.config(text="Fields cannot be empty", fg="red")

# main window setup
root = tk.Tk()
root.title("Login Form")
root.geometry("300x250")

# username label and entry
tk.Label(root, text="Username:").pack(pady=(15, 2))
username_entry = tk.Entry(root, width=25)
username_entry.pack()

# email label and entry
tk.Label(root, text="Email:").pack(pady=(10, 2))
email_entry = tk.Entry(root, width=25)
email_entry.pack()

# submit button
login_button = tk.Button(root, text="Login", command=handle_login)
login_button.pack(pady=15)

# result display
result_label = tk.Label(root, text="")
result_label.pack()

root.mainloop()
