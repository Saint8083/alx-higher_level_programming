def list_division(my_list_1, my_list_2, list_length):
    result = []
    try:
        for i in range(list_length):
            try:
                dividend = my_list_1[i]
                divisor = my_list_2[i]
                try:
                    quotient = dividend / divisor
                    result.append(quotient)
                except ZeroDivisionError:
                    print("division by 0")
                    result.append(0)
            except (IndexError, TypeError):
                print("out of range")
                result.append(0)
    except TypeError:
        print("wrong type")
    finally:
        return result
