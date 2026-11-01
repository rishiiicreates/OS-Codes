import tkinter as tk

root = tk.Tk()
root.title("Event Demo")

label = tk.Label(root, text = "Click Below")
label.pack(pady = 5)

button = tk.Button(root, text="Click Me", command=lambda: label.config(text="Clicked!"))
button.pack(pady=5)

root.mainloop()
