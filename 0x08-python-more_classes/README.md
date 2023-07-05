Even though we haven't talked about classes and object orientation in previous chapters, we have worked with classes all the time. In fact, everything is a class in Python. Guido van Rossum has designed the language according to the principle "first-class everything". He wrote: "One of my goals for Python was to make it so that all objects were "first class." By this, I meant that I wanted all objects that could be named in the language (e.g., integers, strings, functions, classes, modules, methods, and so on) to have equal status. That is, they can be assigned to variables, placed in lists, stored in dictionaries, passed as arguments, and so forth." (Blog, The History of Python, February 27, 2009) In other words, "everything" is treated the same way, everything is a class: functions and methods are values just like lists, integers or floats. Each of these are instances of their corresponding classes.

x = 42
type(x)
OUTPUT:
int
y = 4.34
type(y)
OUTPUT:
float
def f(x):
    return x + 1
type(f)
OUTPUT:
function
import math
type(math)
OUTPUT:
module
One of the many integrated classes in Python is the list class, which we have quite often used in our exercises and examples. The list class provides a wealth of methods to build lists, to access and change elements, or to remove elements:

x = [3,6,9]
y = [45, "abc"]
print(x[1])
OUTPUT:
6
x[1] = 99
x.append(42)
last = y.pop()
print(last)
OUTPUT:
abc
The variables x and y of the previous example denote two instances of the list class. In simplified terms, we have said so far that "x and y are lists". We will use the terms "object" and "instance" synonymously in the following chapters, as it is often done**.

pop and append of the previous example are methods of the list class. pop returns the top (or you might think of it as the "rightest") element of the list and removes this element from the list. We will not explain how Python has implemented lists internally. We don't need this information, because the list class provides us with all the necessary methods to access the data indirectly. That is, the encapsulation details are encapsulated. We will learn about encapsulation later.Even though we haven't talked about classes and object orientation in previous chapters, we have worked with classes all the time. In fact, everything is a class in Python. Guido van Rossum has designed the language according to the principle "first-class everything". He wrote: "One of my goals for Python was to make it so that all objects were "first class." By this, I meant that I wanted all objects that could be named in the language (e.g., integers, strings, functions, classes, modules, methods, and so on) to have equal status. That is, they can be assigned to variables, placed in lists, stored in dictionaries, passed as arguments, and so forth." (Blog, The History of Python, February 27, 2009) In other words, "everything" is treated the same way, everything is a class: functions and methods are values just like lists, integers or floats. Each of these are instances of their corresponding classes.

x = 42
type(x)
OUTPUT:
int
y = 4.34
type(y)
OUTPUT:
float
def f(x):
    return x + 1
type(f)
OUTPUT:
function
import math
type(math)
OUTPUT:
module
One of the many integrated classes in Python is the list class, which we have quite often used in our exercises and examples. The list class provides a wealth of methods to build lists, to access and change elements, or to remove elements:

x = [3,6,9]
y = [45, "abc"]
print(x[1])
OUTPUT:
6
x[1] = 99
x.append(42)
last = y.pop()
print(last)
OUTPUT:
abc
The variables x and y of the previous example denote two instances of the list class. In simplified terms, we have said so far that "x and y are lists". We will use the terms "object" and "instance" synonymously in the following chapters, as it is often done**.

pop and append of the previous example are methods of the list class. pop returns the top (or you might think of it as the "rightest") element of the list and removes this element from the list. We will not explain how Python has implemented lists internally. We don't need this information, because the list class provides us with all the necessary methods to access the data indirectly. That is, the encapsulation details are encapsulated. We will learn about encapsulation later.
