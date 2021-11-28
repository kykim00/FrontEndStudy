def solution(numbers):
    li = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return sum([x for x in li if x not in numbers])