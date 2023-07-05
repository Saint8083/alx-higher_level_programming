Python tuples have a surprising trait: they are immutable, but their values may change. This may happen when a tuple holds a reference to any mutable object, such as a list. If you need to explain this to a colleague who is new to Python, a good first step is to debunk the common notion that variables are like boxes where you store data.

In 1997 I took a summer course about Java at MIT. The professor, Lynn Andrea Stein — an award-winning computer science educator — made the point that the usual “variables as boxes” metaphor actually hinders the understanding of reference variables in OO languages. Python variables are like reference variables in Java, so it’s better to think of them as labels attached to objects.



x = something # immutable type
print x
func(x)
print x # prints the same thing

x = something # mutable type
print x
func(x)
print x # might print something different

x = something # immutable type
y = x
print x
# some statement that operates on y
print x # prints the same thing

x = something # mutable type
y = x
print x
# some statement that operates on y
print x # might print something different
