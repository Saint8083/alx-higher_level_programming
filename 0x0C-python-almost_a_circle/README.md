Usage of *args
*args and **kwargs are mostly used in function definitions. *args and **kwargs allow you to pass a variable number of arguments to a function. What does variable mean here is that you do not know before hand that how many arguments can be passed to your function by the user so in this case you use these two keywords. *args is used to send a non-keyworded variable length argument list to the function. Here’s an example to help you get a clear idea:

def test_var_args(f_arg, *argv):
    print "first normal arg:", f_arg
    for arg in argv:
        print "another arg through *argv :", arg

test_var_args('yasoob','python','eggs','test')
This produces the following result:

first normal arg: yasoob
another arg through *argv : python
another arg through *argv : eggs
another arg through *argv : test
I hope this cleared away any confusion that you had. So now lets talk about **kwargs

Usage of **kwargs
**kwargs allows you to pass keyworded variable length of arguments to a function. You should use **kwargs if you want to handle named arguments in a function. Here is an example to get you going with it:

def greet_me(**kwargs):
    if kwargs is not None:
        for key, value in kwargs.iteritems():
            print "%s == %s" %(key,value)
 
>>> greet_me(name="yasoob")
name == yasoob
So can you see how we handled a keyworded argument list in our function. This is just the basics of **kwargs and you can see how useful it is. Now lets talk about how you can use *args and **kwargs to call a function with a list or dictionary of arguments.
