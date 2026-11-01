def fact(n):
    return 1 if n == 0 else n*fact(n-1)

prime = [x for x in range(2, 51) if all ( x % d != 0 for d in range(2, int(x**0.5) + 1))]

def fibo(n):
    seq = [0,1]
    while len(seq) < n: seq.append(seq[-1]+seq[-2])
    return seq

def pow(n, e):
    return n**e

print("Fact(5):", fact(5))
print("Primes:", prime)
print("Fib(10):", fibo(10))
print("Power(2, 3):", pow(2, 3))