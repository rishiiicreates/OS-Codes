dfa = {
    'q0' : { '0': 'q0', '1': 'q1'},
    'q1' : { '0': 'q2', '1': 'q0'},
    'q2' : { '0': 'q2', '1': 'q2'}
}

accept_states = {'q2'};

def accepts(string):
    state = 'q0'
    for char in string: 
        state = dfa[state][char]

    return state in accept_states

test = "0110"
print(f"input '{test}' accepted:", accepts(test))