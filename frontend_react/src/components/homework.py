from operator import truediv
from tkinter import N


x = 0
y = 0
run = True
while x < 5 and y < 5 and x > -5 and y > -5 and run == True:
    direction = input('What way would you like to go (N,S,E,W)?')
    if direction == 'n':
        y += 1
    elif direction == 'e':
        x += 1
    elif direction == 's':
        y -= 1
    elif direction == 'w':
        x -= 1
    elif direction == 'Exit':
        print('Program exited. You left the grid at ({},{})'.format(
            x, y))
        run = False
    else:
        print('Bad input')
print('You left the grid at ({},{})'.format(
    x, y))
