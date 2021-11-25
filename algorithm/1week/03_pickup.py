def solution(board, moves):
    # board의 행 열 전환
    new_board = list(map(list, zip(*board)))
    stack = []
    answer = 0
    for i in moves:
        for j in new_board[i-1]:
            if j > 0:
                stack.append(j)
                new_board[i-1].remove(j)
                break
        if len(stack) >= 2 and stack[-1] == stack[-2]:
            stack.pop()
            stack.pop()
            answer += 2
    return answer