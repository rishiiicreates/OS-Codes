import tkinter as tk

def login():
    result.config(text="Welcome " + name.get())

root = tk.Tk()
root.title("Login")

tk.Label(root, text="Username").pack()
name = tk.Entry(root)
name.pack()

tk.Label(root, text="Email").pack()
email = tk.Entry(root)
email.pack()

tk.Button(root, text="Login", command=login).pack()

result = tk.Label(root, text="")
result.pack()

root.mainloop()
