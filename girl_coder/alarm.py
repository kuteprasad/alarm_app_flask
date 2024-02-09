from tkinter.ttk import *
from tkinter import *
from PIL import Image, ImageTk


bg_color = '#ffffff' #white
co1 = '#566FC6' #blue
co2 = '#000320' #dark


window = Tk()
window.title("Alarm Clock GUI")
window.geometry('350x150')
window.configure(bg = bg_color)

#frame lines
frame_line = Frame(window,width = 400, height = 5, bg = co1)
frame_line.grid(row = 0, column = 0)

frame_body = Frame(window,width = 400, height = 290, bg = bg_color)
frame_body.grid(row = 1, column = 0)

img = Image.open('girl_coder/alarm.png')
img.resize((100,100))
img = ImageTk.PhotoImage(img)

app_image = Label(frame_body, height = 100, image = img)
app_image.place(x= 10, y = 10)


window.mainloop()
