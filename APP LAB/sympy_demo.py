import sympy as sp

x = sp.symbols('x')

print("Expand:  ", sp.expand((x+1)**2))
print("Factor:  ", sp.factor(x**2 - 4))
print("Solve:   ", sp.solve(sp.Eq(x**2 - 9, 0) , x))
print("Diff:    ", sp.diff(x**3, x))
print("Integrate", sp.integrate(x**2, x))
