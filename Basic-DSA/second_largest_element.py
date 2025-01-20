from os import *
from sys import *
from collections import *
from math import *

from sys import stdin
import sys

def findSecondLargest(sequenceOfNumbers):
    # arr = sequenceOfNumbers
    # n = len(arr)
    # i = 0
    # j = float('-inf')
    # while(i<n):
    #     if arr[i]>j:
    #         j = arr[i]
    #         i+=1
    #     else:
    #         i+=1
    # arr.remove(j)
    # n1 = len(arr)
    # i1 = 0
    # j1 = float('-inf')
    # while(i1<n1):
    #     if (arr[i1]>j1):
    #         j1 = arr[i1]
    #         i1+=1
    #     else:
    #         i1+=1
    # if (j==j1):
    #     return -1
    # else:
    #     return j1
    arr = sorted(sequenceOfNumbers, reverse=True)
    n = len(arr)
    if n<2:
        return -1
    for i in range(1,n):
        if arr[i]<arr[0]:
            return arr[i]
    return -1




# Taking input using fast I/O.
def takeInput():
    n = int(input())

    sequenceOfNumbers = list(map(int, input().strip().split(" ")))

    return sequenceOfNumbers, n

# Main.
t = int(input())
while t:
    sequenceOfNumbers, n = takeInput()
    print(findSecondLargest(sequenceOfNumbers))
    t = t-1
