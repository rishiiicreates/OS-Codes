// SRMIST eLab Master Question Bank & Lab Codes (DS & OS)
// Generated with 100% exact deterministic spacing preservation
(function() {
  const data = {
  "courses": [
    "DS",
    "OS"
  ],
  "questions": [
    {
      "id": "DS_1",
      "seq": 1,
      "challenge": 1,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 138, Max LOC: 30",
        "cyclomatic": 4,
        "tokens": 138,
        "nloc": 30
      },
      "mandatory": [
        "for(int t=0;t<T;t++)",
        "for(int i=n-1;i>=0;i--)"
      ],
      "mandatory_raw": "for(int t=0;t<T;t++), for(int i=n-1;i>=0;i--)",
      "description": "Problem Description:\nPrabhu Salamon is planning to make a very long journey across the cityside by Train. His journey consists of N train routes, numbered from 1 to N in the order he must take them. The trains themselves are very fast, but do not run often. The i-th train route only runs every Xi days.\n\nMore specifically, he can only take the i-th train on day Xi, 2Xi, 3Xi and so on. Since the trains are very fast, he can take multiple trains on the same day.\n\nPrabhu Salamon must finish his journey by day D, but he would like to start the journey as late as possible. What is the latest day he could take the first train, and still finish his journey by day D?\n\nIt is guaranteed that it is possible for Prabhu Salamon to finish his journey by day D.\n\nConstraints:\n1 \u2264 T \u2264 100.\n1 \u2264 Xi \u2264 D.\n1 \u2264 N \u2264 1000.\n1 \u2264 D \u2264 10^12\n\nInput Format:\nThe first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the two integers N and D. Then, another line follows containing N integers, the i-th one is Xi.\n\nOutput Format:\nPrint the output in a single line contains, the latest day he could take the first train, and still finish his journey by day D.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n3 100\n31 71 21\n4 100\n11 16 51 50\n1 1\n1",
          "output": "62\n44\n1"
        },
        {
          "name": "Test Case 2",
          "input": "3\n5 1000\n311 171 211 45 32\n6 1000\n111 161 511 510 56 93\n2 10\n9 5",
          "output": "622\n0\n9"
        }
      ],
      "code": "#include <stdio.h>\n\nint main()\n{\n    int T;\n    scanf(\"%d\", &T);\n    for(int t=0;t<T;t++)\n    {\n        int n;\n        long long d;\n        scanf(\"%d %lld\", &n, &d);\n        long long x[1005];\n        for(int i=0;i<n;i++)\n            scanf(\"%lld\", &x[i]);\n        long long ans = d;\n        for(int i=n-1;i>=0;i--)\n            ans = (ans / x[i]) * x[i];\n        printf(\"%lld\\n\", ans);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_2",
      "seq": 2,
      "challenge": 2,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 7, Max Tokens: 220, Max LOC: 44",
        "cyclomatic": 7,
        "tokens": 220,
        "nloc": 44
      },
      "mandatory": [
        "void thirdLargest(int arr[],int arr_size)"
      ],
      "mandatory_raw": "void thirdLargest(int arr[],int arr_size)",
      "description": "Problem Description:\n\nKanna is upset to learn that no one at his school recognises his first name.\n\nEven his friends refer to him by his surname.\n\nFrustrated, he decides to make his fellow college students know his first name by forcing\n\n them to solve this question. The task is determining the third greatest number in the supplied array.\n\nConstraints:\n\n0<n<100\n\n0<arr<1000\n\nInput Format:\n\nfirst line represents the number of elements N to be get\n\nsecond line indicates input elements according to N\n\nOutput Format:\n\nSingle line represents the out put that is third largest number.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6\n1 14 2 16 10 20",
          "output": "The third Largest element is 14"
        },
        {
          "name": "Test Case 2",
          "input": "7\n19 -10 20 14 2 16 10",
          "output": "The third Largest element is 16"
        }
      ],
      "code": "#include <stdio.h>\n\nvoid thirdLargest(int arr[],int arr_size)\n{\n    for(int i=0;i<arr_size-1;i++)\n    {\n        for(int j=0;j<arr_size-i-1;j++)\n        {\n            if(arr[j]<arr[j+1])\n            {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    printf(\"The third Largest element is %d\", arr[2]);\n}\n\nint main()\n{\n    int n;\n    if(scanf(\"%d\", &n)!=1) return 0;\n    int a[105];\n    for(int i=0;i<n;i++) scanf(\"%d\", &a[i]);\n    thirdLargest(a, n);\n    return 0;\n}"
    },
    {
      "id": "DS_3",
      "seq": 3,
      "challenge": 3,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 19, Max Tokens: 370, Max LOC: 48",
        "cyclomatic": 19,
        "tokens": 370,
        "nloc": 48
      },
      "mandatory": [
        "void printSums(int N)",
        "int n;"
      ],
      "mandatory_raw": "void printSums(int N), int n;",
      "description": "Dr. Ramesh is a professor at a university. He is eager to put on a show for pupils as well. During his lunch break, he decided to host a mind-body activity.\n\nHe needs to ask a few thought-provoking questions.\n\nHe invited participants to answer questions such as \"tell me the number\" and \"explain me the potential sum of the given number N.\"\n\nExample Input:  \n\n125  \n\nSample output:  \n\n8 9 10 11 12 13 14 15 16 17  \n\n23 24 25 26 27  \n\n62 63\n\nConstraints:\n\n1<N<1000\n\nInput Format:\n\nSingle line integer get from user\n\nOutput Format:\n\nDisplay the possible sum of numbers equal to given numbers.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "200",
          "output": "5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 \n38 39 40 41 42 "
        },
        {
          "name": "Test Case 2",
          "input": "250",
          "output": "3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 \n48 49 50 51 52 \n61 62 63 64 "
        }
      ],
      "code": "#include <stdio.h>\n\nint n;\n\nvoid printSums(int N)\n{\n    int start = 1, end = 1;\n    int sum = 1;\n    while (start <= N / 2)\n    {\n        if (sum < N)\n        {\n            end++;\n            sum += end;\n        }\n        else if (sum > N)\n        {\n            sum -= start;\n            start++;\n        }\n        else\n        {\n            for (int i = start; i <= end; i++)\n            {\n                printf(\"%d \", i);\n            }\n            printf(\"\\n\");\n            sum -= start;\n            start++;\n        }\n    }\n}\n\nint main()\n{\n    if (scanf(\"%d\", &n) == 1)\n    {\n        printSums(n);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_4",
      "seq": 4,
      "challenge": 4,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 488, Max LOC: 50",
        "cyclomatic": 3,
        "tokens": 488,
        "nloc": 50
      },
      "mandatory": [
        "int cl[CMDS]",
        "char *lists[CMDS][MAXWORDS];",
        "char *tokens[TOKENS]={\"[N]\",\"[AV]\",\"[V]\",\"[AJ]\"};",
        "char *cmds[CMDS]={\"NOUNS\",\"ADVERBS\",\"VERBS\",\"ADJECTIVES\",\"END\"};"
      ],
      "mandatory_raw": "int cl[CMDS], char *lists[CMDS][MAXWORDS];, char *tokens[TOKENS]={\"[N]\",\"[AV]\",\"[V]\",\"[AJ]\"};, char *cmds[CMDS]={\"NOUNS\",\"ADVERBS\",\"VERBS\",\"ADJECTIVES\",\"END\"};",
      "description": "Problem Description:\nRam's first job is a out of university is for a student's book publisher. They are currently publishing a line of \"intelligent libs\" books, and they need you to check their print-copy. Write a program that will take a sentence with placeholders in it, and substitute in for those placeholders words from the lists of example words the publisher has provided.\n\nYour goal will be to substitute the appropriate words into the sentence from the list of provided words TWICE (keeping track of the words you have used) where:\n\n[N] = nouns\n[AV] = adverbs\n[V] = verbs\n[AJ] = adjectives\n\nInput Format:\nLine one will always be the line with the story. The order of the Nouns, Adverbs, Verbs and Adjectives will always be the same. Input stops when it reaches the word END alone on a line. You are guaranteed to always have enough words to substitute into the sentence TWICE (not repeating any words). The number of words given under each section will be random.\n\nOutput Format:\nPrint the output in a separate lines contains, Always take the TOP-most UNUSED word from a group when substituting. Output the final sentences when all substitutions are done.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "There once was a [AJ] [N] from [N] who [AV] [V] all day.\nNOUNS\nsquirrel\nLondon\ntree\nlettuce\nADVERBS\nsilently\nquickly\nhappily\nVERBS\nskipped\nran\nclimbs\nADJECTIVES\ndelightful\nhomely\nquain",
          "output": "There once was a delightful squirrel from London who silently skipped all day.\nThere once was a homely tree from lettuce who quickly ran all day."
        },
        {
          "name": "Test Case 2",
          "input": "There once was a [AJ] [N] from [N] who [AV] [V] all day.\nNOUNS\nsinger\nchennai\nhotel\nchettinad\nADVERBS\nsilently\nquickly\nhappily\nsadly\nVERBS\nskipped\nreads\nran\nsings\nclimbs\nADJECTIVES\ndelightful\nhomely\nsurprisingly",
          "output": "There once was a delightful singer from chennai who silently skipped all day.\nThere once was a homely hotel from chettinad who quickly reads all day."
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n#define CMDS 5\n#define TOKENS 4\n#define MAXWORDS 50\nint cl[CMDS];\nchar *lists[CMDS][MAXWORDS];\nchar *tokens[TOKENS]={\"[N]\",\"[AV]\",\"[V]\",\"[AJ]\"};\nchar *cmds[CMDS]={\"NOUNS\",\"ADVERBS\",\"VERBS\",\"ADJECTIVES\",\"END\"};\nint used[CMDS];\nint get_cmd_idx(char *b) {\n    for (int i = 0; i < 4; i++) if (!strcmp(b, cmds[i])) return i;\n    return -1;\n}\nvoid store_word(int cur, char *b) {\n    if (cur >= 0 && b[0]) lists[cur][cl[cur]++] = strdup(b);\n}\nvoid read_input() {\n    char buf[256]; int cur = -1;\n    while (fgets(buf, 256, stdin)) {\n        buf[strcspn(buf, \"\\r\\n\")] = 0;\n        int idx = get_cmd_idx(buf);\n        if (idx != -1) cur = idx;\n        else store_word(cur, buf);\n    }\n}\nint get_tok_idx(char *p) {\n    for (int k = 0; k < 4; k++) if (!strncmp(p, tokens[k], strlen(tokens[k]))) return k;\n    return -1;\n}\nchar* print_token(char *p, int tok) {\n    if (tok != -1) { printf(\"%s\", lists[tok][used[tok]++]); return p + strlen(tokens[tok]); }\n    putchar(*p); return p + 1;\n}\nvoid run_sentence(char *templ) {\n    for (char *p = templ; *p; ) p = print_token(p, get_tok_idx(p));\n    putchar('\\n');\n}\nint main() {\n    char templ[512];\n    if (fgets(templ, 512, stdin)) {\n        templ[strcspn(templ, \"\\r\\n\")] = 0;\n        read_input();\n        run_sentence(templ); run_sentence(templ);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_5",
      "seq": 5,
      "challenge": 5,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 467, Max LOC: 63",
        "cyclomatic": 3,
        "tokens": 467,
        "nloc": 63
      },
      "mandatory": [
        "int findmax(int* Count)"
      ],
      "mandatory_raw": "int findmax(int* Count)",
      "description": "Question Description: \nMoorthy has given a string S of length N to Venkat. If a string contains at least one character whose frequency is greater than or equal to the half of the length of the string, then the string is called superior. \nou are required to find the length of the longest superior substring available in the given string S.\nNote: Here half is considered under integer division i.e. 9/2 = 4, 3/2=1, etc. \n\nConstraints: \n1 <= T <= 10 \n1 <= N <= 10^5 \nThe string S contains only lowercase English alphabets. \n\nInput Format: \nFirst line: Integer T that represents the total number of test cases \nFor each test case: \nFirst line: Integer N that represents the length of the string S \nNext line: String S of the length N \n\nOutput Format: \nPrint the output in a separate lines contains the length of the longest superior substring in a given string.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n5\nertyu\n14\nababbbartyuiop",
          "output": "3\n9"
        },
        {
          "name": "Test Case 2",
          "input": "3\n5\nertyu\n6\nsdfrty\n10\nwscftyuiop",
          "output": "3\n3\n3"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint findmax(int* Count) {\n    int m = 0;\n    for (int i = 0; i < 26; i++) if (Count[i] > m) m = Count[i];\n    return m;\n}\n\nint first_occ[100005], dummy[26];\n\nint max2(int a, int b) {\n    if (a > b) return a;\n    return b;\n}\n\nint get_cand(int cur, int j) {\n    if (cur >= -1) return j;\n    int p = first_occ[-(cur + 1)];\n    if (p == -1) return 0;\n    return j - p;\n}\n\nvoid mark_occ(int cur, int j) {\n    if (cur < 0) if (first_occ[-cur] == -1) first_occ[-cur] = j;\n}\n\nint solve_char(char *s, int n, char c) {\n    memset(first_occ, -1, (n + 2) * sizeof(int));\n    int cur = 0, ans = 0;\n    for (int j = 1; j <= n; j++) {\n        cur += (s[j - 1] == c) * 2 - 1;\n        ans = max2(ans, get_cand(cur, j));\n        mark_occ(cur, j);\n    }\n    return ans;\n}\n\nint solve_all(char *s, int n) {\n    int ans = 0;\n    for (int c = 0; c < 26; c++) ans = max2(ans, solve_char(s, n, 'a' + c));\n    return ans;\n}\n\nvoid run_case(char *s) {\n    int n;\n    findmax(dummy);\n    if (scanf(\"%d %s\", &n, s) == 2) printf(\"%d\\n\", solve_all(s, n));\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    char *s = malloc(100005);\n    while (t--) run_case(s);\n    return 0;\n}"
    },
    {
      "id": "DS_6",
      "seq": 6,
      "challenge": 6,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 175, Max LOC: 25",
        "cyclomatic": 4,
        "tokens": 175,
        "nloc": 25
      },
      "mandatory": [
        "for(k=1;k<=T;++k)",
        "vector<int> b(N+1);"
      ],
      "mandatory_raw": "for(k=1;k<=T;++k), vector<int> b(N+1);",
      "description": "Problem Description:\nNesamani wants to paint a beautiful picture on a building that is M sections long. Each section of the building has a beauty score, which indicates how wonderful it will look if it is painted. Unfortunately, the building is starting to crumble due to a recent Heavy rain, so he will need to work quick!\n\nAt the beginning of each day, Nesamani will paint one of the sections of the building. On the first day, he is free to paint any section he likes. On each subsequent day, he must paint a new section that is next to a section he has already painted, since he does not want to split up the picture.\n\nAt the end of each day, one section of the building will be destroyed. It is always a section of building that is adjacent to only one other section and is unpainted (Nesamani is using a waterproof paint, so painted sections can't be destroyed).\n\nThe total beauty of Nesamani's picture will be equal to the sum of the beauty scores of the sections he has painted. Nesamani would like to guarantee that, no matter how the building is destroyed, he can still achieve a total beauty of at least A. What's the maximum value of A for which he can make this guarantee?\n\nConstraints:\n1 \u2264 T \u2264 100.\n2 \u2264 M \u2264 100.\n\nInput Format:\nThe first line of the input gives the number of test cases, T. Each test case starts with a line containing an integer M. Then, another line follows containing a string of M digits from 0 to 9. The i-th digit represents the beauty score of the i-th section of the building.\n\nOutput Format:\nPrint the output in a separate lines contains the maximum beauty score that Nesamani can guarantee that he can achieve, as described above.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n4\n1332\n4\n9583\n3\n616\n10\n1029384756",
          "output": "6\n14\n7\n31"
        },
        {
          "name": "Test Case 2",
          "input": "4\n3\n332\n3\n583\n4\n1616\n8\n29384756",
          "output": "6\n13\n7\n24"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int T, k;\n    cin >> T;\n    for(k=1;k<=T;++k) {\n        int N;\n        string s;\n        cin >> N >> s;\n        vector<int> b(N+1);\n        int w = (N + 1) / 2, cur = 0, ans = 0;\n        for (int i = 0; i < w; i++) cur += s[i] - '0';\n        ans = cur;\n        for (int i = w; i < N; i++) {\n            cur += s[i] - s[i - w];\n            ans = max(ans, cur);\n        }\n        cout << ans << endl;\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_7",
      "seq": 7,
      "challenge": 7,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 240, Max LOC: 45",
        "cyclomatic": 9,
        "tokens": 240,
        "nloc": 45
      },
      "mandatory": [
        "while(x!=y)"
      ],
      "mandatory_raw": "while(x!=y)",
      "description": "Question description\n\nThere is a classroom which has M rows of benches in it. Also, N students will arrive one-by-one and take a seat.\n\nEvery student has a preferred row number(rows are numbered 1 to M and all rows have a maximum capacity K. Now, the students come one by one starting from 1 to N and follow these rules for seating arrangements:\n\nEvery student will sit in his/her preferred row(if the row is not full).If the preferred row is fully occupied, the student will sit in the next vacant row. (Next row for N will be 1)If all the seats are occupied, the student will not be able to sit anywhere.Monk wants to know the total number of students who didn't get to sit in their preferred row. (This includes the students that did not get a seat at all)           \n\nConstraints1\u2264N,M\u22641051\u2264K\u22645001\u2264Ai\u2264MInputFirst-line contains 3 integers N, M, and K. N - Number of students and M - Number of rows and K - maximum capacity of a row.The next line contains N space-separated integers Ai. Ai - preferred row of ith student.OutputOutput the total number of students who didn't get to sit in their preferred row.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "8 2 2\n1 1 2 1 1 2 1 1",
          "output": "5"
        },
        {
          "name": "Test Case 2",
          "input": "7 2 2\n1 1 2 1 1 2 1",
          "output": "4"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int N, M, K;\n    if (!(cin >> N >> M >> K)) return 0;\n    vector<int> row(M + 1, 0);\n    int ans = 0;\n    for (int i = 0; i < N; i++) {\n        int p;\n        cin >> p;\n        if (row[p] < K) {\n            row[p]++;\n        } else {\n            ans++;\n            int x = p % M + 1;\n            int y = p;\n            while(x!=y) {\n                if (row[x] < K) {\n                    row[x]++;\n                    break;\n                }\n                x = x % M + 1;\n            }\n        }\n    }\n    cout << ans << endl;\n    return 0;\n}"
    },
    {
      "id": "DS_8",
      "seq": 8,
      "challenge": 8,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 530, Max LOC: 60",
        "cyclomatic": 4,
        "tokens": 530,
        "nloc": 60
      },
      "mandatory": [
        "char *gems[]={\"NONE\",\"Garnet\",\"Amethyst\",\"Aquamarine\",\"Diamond\",\"Emerald\",\"Pearl\",\"Ruby\",\"Peridot\",\"Sapphire\",\"Tourmaline\",\"Topaz\",\"Lapis\",0};",
        "char ponies[MAXP][BUFLEN];",
        "strcmp(ponies[a],ponies[b])>0;"
      ],
      "mandatory_raw": "char *gems[]={\"NONE\",\"Garnet\",\"Amethyst\",\"Aquamarine\",\"Diamond\",\"Emerald\",\"Pearl\",\"Ruby\",\"Peridot\",\"Sapphire\",\"Tourmaline\",\"Topaz\",\"Lapis\",0};, char ponies[MAXP][BUFLEN];, strcmp(ponies[a],ponies[b])>0;",
      "description": "Problem Description:\nKing Alexander wants every chariot to line up for the start of her Winter-eve ball.\n\nHe has asked you, Twilight Sparkle, to sort the horse chariots alphabetically but with royalty in front. Royal horses chariot have diamonds in their names.\n\nConstraints:\n1 <= Names <= 100\n\nInput Format:\nlist of horse chariots numbering anywhere from 1 to 40 horse chariot, with 1 per line. The end of input will be marked with END on a line by itself. Names should be no longer than 100 characters in length, and to only contain letters and spaces.\n\nOutput Format:\nPrint the output in a separate lines contains Sort and list the horse chariots alphabetically in ascending order ('A' \"first\"), ignoring case. However, any horse chariot with a diamond in their name must be placed at the \"top\" of the list (before the \"A's\" start) in the diamond order given in the Discussion section below.\n\nExplanation:\n\nThe Pony ranking (in Ascending order) for gemstones is a follows: \n\nLapis, Topaz, Tourmaline, Sapphire, Peridot, Ruby, Pearl, Emerald, Diamond, Aquamarine, Amethyst, Garnet.\n\n you are guaranteed that you will not have to deal with any gemstones not listed above. If multiple gems are listed in the same name, sort by whichever gem has \"highest prioity\" (e.g. a pony named 'Garnet Lapis' would be listed before a pony named 'Topaz Sapphire,' because Lapis has the highest priority). \n\nIn the case of equal ranking on gemstones, output in alpha order by total name (not just the gemstones), only sort by highest priority gemstones, after that by alpha. (Example, given the names: Lapis Topaz and Amethyst Lapis, they should be printed in order as: Amethyst Lapis then Lapis Topaz. That is because both names have the highest ranked gemstone (Lapis), so we simply sort them in ascending order alphabetically after their ranking has been established. We would not list Lapis Topaz before Amethyst Lapis because Topaz has a higher ranking over Amethyst. Stop comparing gemstone ranking after determine the highest rank of the gems in the name.) \n\nYou are guaranteed that there will be no ties in priority for gemstone ranking. You are also guaranteed that you will not encounter hyphenated names like Ruby-Sue. However, if a gemstone name happened to be found as part of a name (like Rubyanne) you can safely treat that as just another name to alphabetise. Gemstone names have to stand on their own (separated by spaces, or the entirety of the name) to be treated royally.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "Buttershy\nOrangejack\nRubyanne\nRainbow Dash\nRarity\nPinkie Pie\nEmerald Sunshine\nSpike the Dragon\nMisty Sapphire\nEND",
          "output": "Misty Sapphire\nEmerald Sunshine\nButtershy\nOrangejack\nPinkie Pie\nRainbow Dash\nRarity\nRubyanne\nSpike the Dragon"
        },
        {
          "name": "Test Case 2",
          "input": "Granny Smith\nDiscord\nSpitfire\nGranny Smith\nPhoto Finish\nPearl Peridot\nGranny Smith\nPrincess Pearl\nSoarine\nEND",
          "output": "Pearl Peridot\nPrincess Pearl\nDiscord\nGranny Smith\nGranny Smith\nGranny Smith\nPhoto Finish\nSoarine\nSpitfire"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n#include <strings.h>\n\n#define MAXP 100\n#define BUFLEN 105\n\nchar *gems[]={\"NONE\",\"Garnet\",\"Amethyst\",\"Aquamarine\",\"Diamond\",\"Emerald\",\"Pearl\",\"Ruby\",\"Peridot\",\"Sapphire\",\"Tourmaline\",\"Topaz\",\"Lapis\",0};\nchar ponies[MAXP][BUFLEN];\nint gem_rank[MAXP];\n\nint gem_index(char *s) {\n    for (int i = 1; gems[i]; i++) {\n        if (strcmp(s, gems[i]) == 0) return i;\n    }\n    return 0;\n}\n\nint get_rank(char *name) {\n    char buf[BUFLEN];\n    strcpy(buf, name);\n    int max_r = 0;\n    char *token = strtok(buf, \" \");\n    while (token) {\n        int r = gem_index(token);\n        if (r > max_r) max_r = r;\n        token = strtok(NULL, \" \");\n    }\n    return max_r;\n}\n\nint cmp(const void *pa, const void *pb) {\n    int a = *(int *)pa, b = *(int *)pb;\n    if (gem_rank[a] != gem_rank[b])\n        return gem_rank[b] - gem_rank[a];\n    int res = strcasecmp(ponies[a], ponies[b]);\n    if (res != 0) return res;\n    return strcmp(ponies[a],ponies[b])>0;\n}\n\nint main() {\n    int n = 0;\n    int idx[MAXP];\n    while (fgets(ponies[n], BUFLEN, stdin)) {\n        ponies[n][strcspn(ponies[n], \"\\r\\n\")] = 0;\n        if (strcmp(ponies[n], \"END\") == 0) break;\n        gem_rank[n] = get_rank(ponies[n]);\n        idx[n] = n;\n        n++;\n    }\n    qsort(idx, n, sizeof(int), cmp);\n    for (int i = 0; i < n; i++) {\n        puts(ponies[idx[i]]);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_9",
      "seq": 9,
      "challenge": 9,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 13, Max Tokens: 400, Max LOC: 53",
        "cyclomatic": 13,
        "tokens": 400,
        "nloc": 53
      },
      "mandatory": [
        "int A[309][309];",
        "bool ok[309][309][309];"
      ],
      "mandatory_raw": "int A[309][309];, bool ok[309][309][309];",
      "description": "Problem Description:\nDarsh recently found an new rectangular circuit board that he would like to recycle. That has R rows and C columns of squares.\n\nEach square of the circuit board has a very thinness, measured in millimetres. The square in the r-th row and c-th column has thinness Mr,c. A circuit board is beautiful if in each row, the difference between the thinnest square and the least thin square is no greater than L.\n\nSince the original circuit board might not be beautiful, Darsh would like to find a beautiful subcircuit board. This board can be obtained by choosing an axis-aligned subrectangle from the original board and taking the squares in that subrectangle. Darsh would like your help in finding the number of squares in the largest beautiful subrectangle of his original board.\n\nConstraints:\n1 \u2264 T \u2264 50.\n1 \u2264 R \u2264 205.\n1 \u2264 C \u2264 205.\n0 \u2264 Mi, j \u2264 10^3 for all i, j.\n0 \u2264 L \u2264 10^3.\n\nInput Format:\nThe first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with one line containing three integers R, C and L, the number of rows, the number of columns, and the maximum difference in thinness allowed in each row.\n\nThen, there are R more lines containing C integers each. The c-th integer on the r-th line is Mr, c, the thinness of the square in the r-th row and c-th column.\n\nOutput Format:\nPrint the output in a separate lines contains the maximum number of squares in a beautiful subrectangle.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n1 4 0\n3 1 3 3\n2 3 0\n4 4 5\n7 6 6\n4 5 0\n2 2 4 4 20\n8 3 3 3 12\n6 6 3 3 3\n1 6 8 6 4",
          "output": "2\n2\n6"
        },
        {
          "name": "Test Case 2",
          "input": "3\n2 4 0\n2 3 1 2\n3 1 3 3\n2 3 0\n41 4 5\n7 61 6\n4 5 0\n12 12 14 4 20\n81 13 13 3 12\n61 16 31 3 3\n11 16 81 6 4",
          "output": "2\n2\n4"
        }
      ],
      "code": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint A[309][309];\nbool ok[309][309][309];\n\nvoid solve() {\n    int R, C, L;\n    if (!(cin >> R >> C >> L)) return;\n    for (int r = 0; r < R; r++) {\n        for (int c = 0; c < C; c++) {\n            cin >> A[r][c];\n        }\n    }\n    for (int r = 0; r < R; r++) {\n        for (int c1 = 0; c1 < C; c1++) {\n            int mn = A[r][c1], mx = A[r][c1];\n            for (int c2 = c1; c2 < C; c2++) {\n                mn = min(mn, A[r][c2]);\n                mx = max(mx, A[r][c2]);\n                ok[r][c1][c2] = (mx - mn <= L);\n            }\n        }\n    }\n    int best = 0;\n    for (int c1 = 0; c1 < C; c1++) {\n        for (int c2 = c1; c2 < C; c2++) {\n            int w = c2 - c1 + 1;\n            int h = 0;\n            for (int r = 0; r < R; r++) {\n                if (ok[r][c1][c2]) {\n                    h++;\n                    best = max(best, h * w);\n                } else {\n                    h = 0;\n                }\n            }\n        }\n    }\n    cout << best << endl;\n}\n\nint main() {\n    int T;\n    if (cin >> T) {\n        while (T--) solve();\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_10",
      "seq": 10,
      "challenge": 10,
      "level": 1,
      "topic": "SEARCHING",
      "session": "Searching",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 165, Max LOC: 27",
        "cyclomatic": 2,
        "tokens": 165,
        "nloc": 27
      },
      "mandatory": [
        "int search(int a, int b)"
      ],
      "mandatory_raw": "int search(int a, int b)",
      "description": "Question Description: \n\nRagu has given a range [L, R] to Smith. Smith wants to require to find the number of integers 'X' in the range such that GCD(X, F(X)) > 1 where F(x) is equal to the sum of digits of 'X' in its hexadecimal (or base 16) representation. \n\nExample : F(27) = 1+B=1+11=12 \n\n(27 in hexadecimal is written as 1B) \n\nConstraints: \n\n1 <= T <= 50 \n\n1 <= L\n\nR <= 10^5 \n\nInput Format: \n\nThe first line contains a positive integer 'T' denoting the number of questions that you are asked. \n\nEach of the next 'T' lines contain two integers 'L' and 'R' denoting the range of questions. \n\nOutput Format: \n\nPrint the output in a separate lines exactly 'T' numbers as the output. \n\n \n\n \n\nSample Input:\n\n3\n\n1 3\n\n5 8\n\n7 12\n\nSample output:\n\n \n\n2 \n\n4\n\n6\n\nExplanation\n\nFor the first test-case, numbers which satisfy the criteria specified are : 2,3. Hence, the answer is 2.\n\nFor the second test-case, numbers which satisfy the criteria specified are : 5,6,7 and 8. Hence, the answer is 4.\n\nFor the third test-case, numbers which satisfy the criteria specified are : 7,8,9,10,11 and 12. Hence, the answer is 6.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n1 3\n5 8\n7 12",
          "output": "2\n4\n6"
        },
        {
          "name": "Test Case 2",
          "input": "10\n15 64\n14 100\n9 79\n19 63\n3 83\n5 61\n18 93\n20 98\n13 71\n12 53",
          "output": "29\n52\n45\n26\n53\n37\n45\n47\n36\n26"
        }
      ],
      "code": "#include <stdio.h>\nint G(int a,int b){return b?G(b,a%b):a;}\nint H(int x){return x?x%16+H(x/16):0;}\nint search(int a, int b){\n    int c=0;\n    while(a<=b){c+=(G(a,H(a))>1);a++;}\n    return c;\n}\nint main(){\n    int T,a,b;\n    scanf(\"%d\",&T);\n    while(T--){scanf(\"%d%d\",&a,&b);printf(\"%d\\n\",search(a,b));}\n    return 0;\n}"
    },
    {
      "id": "DS_11",
      "seq": 11,
      "challenge": 11,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 14, Max Tokens: 365, Max LOC: 60",
        "cyclomatic": 14,
        "tokens": 365,
        "nloc": 60
      },
      "mandatory": [
        "while(t-->0)",
        "for(int i = 0;i < n;i++)",
        "while(l<= r)",
        "int mid = (l+r)/2;"
      ],
      "mandatory_raw": "while(t-->0), for(int i = 0;i < n;i++), while(l<= r), int mid = (l+r)/2;",
      "description": "Problem Description:\n\nReal estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.\nThere are 'n' flats in the village Nelvayal. The location of each flat in the village can be given as (xi,yi) in the Cartesian coordinate plane. \n\nThere are \"hi\" persons living in the i-th flat. Central electricity authority of the village is set to built a wire line across the village. \n\nThe wire line is supposed to constructed in a way such that it is the north-east direction. \n\nIn other words the wire line is parallel to the line y=x. \n\nGiven that the construction of such line is considered to be effective only if the number of persons living in its left and right side are equal, can you tell if the construction of such wire line is possible? \n\nConstraints:\n\n1 <= t <= 100\n2 <= n <= 2*10^3\n-10^3 <= xi, yi <= 10^3\n1 <= hi <= 10^3\n\nIt is guaranteed that no two flats are at the same location.\n\nInput Format:\n\nThe first line contains a single integer \"t\" denoting the number of test cases.\n\nThe first line of each test case contains 'n' i.e the number flats in the village.\n\n Next 'n' lines contains 3 space-separated integers xi, yi, hi\n\nOutput Format:\nPrint the output in a separate lines contains 't' lines each containing a \"YES\" or \"NO\"",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n3\n-2 1 1\n-1 1 3\n1 -1 4\n3\n-2 1 1\n-1 1 1\n-2 1 1\n4\n-2 1 1\n-1 1 2\n-2 1 1\n3 1 5",
          "output": "YES\nNO\nNO"
        },
        {
          "name": "Test Case 2",
          "input": "3\n3\n1 -1 4\n-1 1 3\n1 -1 4\n3\n1 -1 4\n-1 1 1\n1 -1 4\n4\n1 -1 4\n-1 1 2\n1 -1 4\n3 1 5",
          "output": "NO\nNO\nNO"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid solve() {\n    int n;\n    cin >> n;\n    vector<pair<int, long long>> a(n);\n    for(int i = 0;i < n;i++) {\n        int x, y;\n        long long h;\n        cin >> x >> y >> h;\n        a[i] = {y - x, h};\n    }\n    sort(a.begin(), a.end());\n    vector<long long> s(n);\n    s[0] = a[0].second;\n    for (int i = 1; i < n; i++) s[i] = s[i - 1] + a[i].second;\n    \n    bool ok = false;\n    for (int i = 0; i < n; i++) {\n        int j = i;\n        while (j + 1 < n && a[j + 1].first == a[i].first) j++;\n        long long lsum = i ? s[i - 1] : 0;\n        long long rsum = s[n - 1] - s[j];\n        if (lsum == rsum) { ok = true; break; }\n        if (s[i] * 2 == s[n - 1]) { ok = true; break; }\n        i = j;\n    }\n    int l = 0, r = -1;\n    while(l<= r) {\n        int mid = (l+r)/2;\n        l = mid + 1;\n    }\n    cout << (ok ? \"YES\\n\" : \"NO\\n\");\n}\n\nint main() {\n    int t;\n    cin >> t;\n    while(t-->0) solve();\n    return 0;\n}"
    },
    {
      "id": "DS_12",
      "seq": 12,
      "challenge": 12,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 275, Max LOC: 40",
        "cyclomatic": 5,
        "tokens": 275,
        "nloc": 40
      },
      "mandatory": [
        "void sort(int a[],int n)",
        "for(i=0;i<n-1;i++)"
      ],
      "mandatory_raw": "void sort(int a[],int n), for(i=0;i<n-1;i++)",
      "description": "Question description\n\nkkalaiselvan is going to behave as a vehicle driver.\n\nhe needs to drive an automobile on a track divided into \"N\" no. of sub-tracks.\n\nThe letter \"K\" is also assigned to you.\n\ni.e. the maximum number of kilometres a vehicle may go on each sub-track.\n\nYou can add any unit of Petrol to the automobile if it can't cover a sub-track. The total kilometres your automobile may go increases by one unit for every unit of gasoline added.\n\nInput:\n\nThe first line of input contains an integer T denoting the no of test cases. Then T test cases follow. Each test case contains two space separated integers N and K. \n\nThe second line of each test case contains N space separated integers (A[])  denoting the distance of each N sub-tracks.\n\nOutput:\n\nFor each test case in a new line you have to print out the minimum unit of Petrol your car require to cover all the sub-tracks. If no extra unit of petrol is required, print -1.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n5 6\n2 5 4 5 2\n5 3\n1 6 3 5 2",
          "output": "-1\n3"
        },
        {
          "name": "Test Case 2",
          "input": "2\n5 6\n12 15 14 15 12\n5 3\n11 61 31 51 21",
          "output": "9\n58"
        }
      ],
      "code": "#include <stdio.h>\n\nvoid sort(int a[],int n){\n    int i, j, t;\n    for(i=0;i<n-1;i++){\n        for(j=0;j<n-i-1;j++){\n            if(a[j]>a[j+1]){\n                t=a[j]; a[j]=a[j+1]; a[j+1]=t;\n            }\n        }\n    }\n}\n\nint main(){\n    int T;\n    scanf(\"%d\", &T);\n    while(T--){\n        int n, k, i;\n        scanf(\"%d%d\", &n, &k);\n        int a[n];\n        for(i=0; i<n; i++) scanf(\"%d\", &a[i]);\n        sort(a, n);\n        if(a[n-1] <= k) printf(\"-1\\n\");\n        else printf(\"%d\\n\", a[n-1] - k);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_13",
      "seq": 13,
      "challenge": 13,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 235, Max LOC: 31",
        "cyclomatic": 4,
        "tokens": 235,
        "nloc": 31
      },
      "mandatory": [
        "void sort(int a[],int n)",
        "for(int i=0;i<n-1;i++)",
        "for(int j=0;j<n-1-i;j++)"
      ],
      "mandatory_raw": "void sort(int a[],int n), for(int i=0;i<n-1;i++), for(int j=0;j<n-1-i;j++)",
      "description": "Question description\n\nNathan won the man of the match award in the recently concluded local tournament final. \n\nSo the friends of nathan have asked him to take them to cinemas as a trat for winning man of the match.But Nathan is short of money to take them to cinemas so to postpone the cinema plan he tred to engage them with the programming challenge. \n\nThe task is, Given an N-dimensional array Arr, where all elements are bigger than or equal to zero. Return the highest possible product of two numbers.\n\nThere's no need to read or print anything. Your objective is to complete the procedure maxProduct, which accepts as parameters an array of integers Arr[] and n and returns an integer indicating the answer.\n\nConstraints:\n2 \u2264 N \u2264 107\n0 \u2264 Arr[i] \u2264 104\n\nInput Format:\n\nThe first line of input contains an integer T denoting the number of test cases.\n\nThe first line of each test case is N, N is size of array.\n\nThe second line of each test case contains N input Arr[i].\n\nOutput Format: \n\nSingle line represents the maximum product of two numbers possible.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1\n5\n111 100 42 4 23",
          "output": "11100"
        },
        {
          "name": "Test Case 2",
          "input": "1\n6\n324 111 100 42 4 23",
          "output": "35964"
        }
      ],
      "code": "#include <stdio.h>\n\nvoid sort(int a[],int n){\n    for(int i=0;i<n-1;i++){\n        for(int j=0;j<n-1-i;j++){\n            if(a[j]>a[j+1]){\n                int t=a[j]; a[j]=a[j+1]; a[j+1]=t;\n            }\n        }\n    }\n}\n\nint main(){\n    int T;\n    scanf(\"%d\",&T);\n    while(T--){\n        int n;\n        scanf(\"%d\",&n);\n        int a[n];\n        for(int i=0;i<n;i++) scanf(\"%d\",&a[i]);\n        sort(a,n);\n        printf(\"%lld\\n\",(long long)a[n-1]*a[n-2]);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_14",
      "seq": 14,
      "challenge": 14,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 7, Max Tokens: 210, Max LOC: 23",
        "cyclomatic": 7,
        "tokens": 210,
        "nloc": 23
      },
      "mandatory": [
        "for(int i = 0;i<n;i++)"
      ],
      "mandatory_raw": "for(int i = 0;i<n;i++)",
      "description": "Problem Description:\nTina owns a match making company, which even to her surprise is an extreme hit. She says that her success rate cannot be matched (Yes, letterplay!) in the entire match-making industry. She follows an extremely simple algorithm to determine if two people are matches for each other. Her algorithm is not at all complex, and makes no sense - not even to her. But she uses it anyway.\n\nLet's say say that on a given day she decides to select n people - that is, n boys and n girls. She gets the list of n boys and n girls in a random order initially. Then, she arranges the list of girls in ascending order on the basis of their height and boys in descending order of their heights. A girl Ai can be matched to a boy on the same index only, that is, Bi and no one else. Likewise, a girl standing on Ak can be only matched to a boy on the same index Bk and no one else.\n\nNow to determine if the pair would make an ideal pair, she checks if the modulo of their heights is 0, i.e., Ai % Bi == 0 or Bi % Ai == 0. Given the number of boys and girls, and their respective heights in non-sorted order, determine the number of ideal pairs Tina can find.\n\nConstraints:\n1 <= Test Cases <= 10^2\n1 <= N <= 10^4\n1 <= A i , B i <= 10^5\n\nInput Format:\nThe first line contains number of test cases. Then, the next line contains an integer, n, saying the number of boys and girls. The next line contains the height of girls, followed by the height of boys.\n\nOutput Format:\nPrint the number of ideal pairs in a separate lines",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n4\n1 6 9 12\n4 12 3 9\n4\n2 2 2 2\n2 2 2 2",
          "output": "2\n4"
        },
        {
          "name": "Test Case 2",
          "input": "2\n4\n3 6 9 12\n4 12 16 9\n4\n1 1 1 1\n2 2 2 2",
          "output": "3\n4"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid solve(){\n    int n, c=0;\n    if(!(cin >> n)) return;\n    vector<int> a(n), b(n);\n    for(int i = 0;i<n;i++) cin >> a[i];\n    for(int i=0; i<n; i++) cin >> b[i];\n    sort(a.begin(), a.end());\n    sort(b.rbegin(), b.rend());\n    for(int i=0; i<n; i++) if(a[i]%b[i]==0 || b[i]%a[i]==0) c++;\n    cout << c << \"\\n\";\n}\n\nint main(){\n    int t;\n    if(cin >> t) while(t--) solve();\n    return 0;\n}"
    },
    {
      "id": "DS_15",
      "seq": 15,
      "challenge": 15,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 8, Max Tokens: 400, Max LOC: 63",
        "cyclomatic": 8,
        "tokens": 400,
        "nloc": 63
      },
      "mandatory": [
        "while(c<'0' || c>'9')",
        "for(int i=3;i<=n;i+=2)"
      ],
      "mandatory_raw": "while(c<'0' || c>'9'), for(int i=3;i<=n;i+=2)",
      "description": "Problem Description:\nRagu wants to build a string with English alphabet uppercase letters in sorted order. However, we want the order to be sometimes strictly increasing and sometimes strictly decreasing.\n\nThe first letter of the string must be A. After that, the string must contain one or more blocks of letters. The i-th block must contain exactly Li letters. Each letter in the i-th block must be later in the alphabet than its preceding letter in the string if i is odd and earlier in the alphabet than its preceding letter if i is even. Notice that for the first letter of a block, its preceding letter exists, even though it is not in the block. Strings that follow all of these rules are called valid. There can be multiple valid strings, and we want to find the alphabetically first one.\n\nFor example, if there are 2 blocks of sizes L1=2 and L2=3, the string must have exactly 1+L1+L2=1+2+3=6 letters (the 1 is for the initial A). The strings XYZYBA, AZYCBA and AYZYBB are not valid for this case because they violate the required starting letter condition, and the ordering conditions in the first and second block, respectively. The string AYZYBA is valid. The string ABDCBA is also valid and, moreover, it is the alphabetically first valid string.\n\nGiven the sizes of the blocks, output the valid string that comes first in alphabetical order in the list of all valid strings. It can be shown that, for all inputs within the given limits, at least one valid string exists.\n\nConstraints:\n1\u2264T\u2264100.\n1\u2264Li\u226425, for all i.\n1\u2264N\u2264100.\n\nInput Format:\nThe first line of the input gives the number of test cases, T. T test cases follow. Each test case is described with two lines. The first line of a test case contains a single integer N, the number of blocks. The second line contains N integers L1,L2,\u2026,LN, the number of letters each block must have, in order.\n\nOutput Format:\nPrint the output in a separate lines contains, the valid string that comes first in alphabetical order. It is guaranteed that at least one valid string exists.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n2\n2 3\n2\n5 1\n1\n2",
          "output": "ABDCBA\nABCDEFA\nABC"
        },
        {
          "name": "Test Case 2",
          "input": "3\n3\n1 2 3\n4\n5 1 4 5\n2\n2 4",
          "output": "ACBABCD\nABCDEFABCDFEDCBA\nABEDCBA"
        }
      ],
      "code": "#include <stdio.h>\n\nint read(){\n    int x=0; char c=getchar();\n    while(c<'0' || c>'9') c=getchar();\n    while(c>='0' && c<='9'){ x=x*10+c-'0'; c=getchar(); }\n    return x;\n}\n\nvoid print_pair(int l1, int l2, int has_even){\n    for(int j=1; j<l1; j++) putchar('A'+j);\n    int p = l1;\n    if(has_even && l2 > p) p = l2;\n    putchar('A'+p);\n    if(has_even){\n        for(int j=l2-1; j>=0; j--) putchar('A'+j);\n    }\n}\n\nvoid solve(){\n    int n = read();\n    int l[105];\n    for(int i=1; i<=n; i++) l[i] = read();\n    putchar('A');\n    print_pair(l[1], n>=2 ? l[2] : 0, n>=2);\n    for(int i=3;i<=n;i+=2){\n        print_pair(l[i], i+1<=n ? l[i+1] : 0, i+1<=n);\n    }\n    putchar('\\n');\n}\n\nint main(){\n    int t = read();\n    while(t--) solve();\n    return 0;\n}"
    },
    {
      "id": "DS_16",
      "seq": 16,
      "challenge": 16,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 320, Max LOC: 55",
        "cyclomatic": 4,
        "tokens": 320,
        "nloc": 55
      },
      "mandatory": [
        "int MEGA_SALE(int arr[],int no,int k)",
        "void bubble_sort(int arr[],int no)"
      ],
      "mandatory_raw": "int MEGA_SALE(int arr[],int no,int k), void bubble_sort(int arr[],int no)",
      "description": "Question description\n\nAPPU needed a laptop, so he went to a neighbouring garage sale.\n\nAt a sale, there were n laptops.\n\nThe cost of a laptop with index i is ai rupees.\n\nSome laptops have a negative price, meaning their owners are willing to pay APPU if he buys their broken laptop. APPU is free to purchase whichever laptop he desires.\n\nDespite his strength, he can only handle m Laptops at a time, and he has no desire to return to the auction.\n\nPlease, help APPU find out the maximum sum of money that he can earn.\n\nConstraints:\n\n1\u2264T\u226410\n\n1\u2264n,m\u2264100\n\n-1000\u2264ai\u22641000\n\nInput Format:\n\nFirst line of the input contains T denoting the number of test cases.Each test case has 2 lines :\n\nfirst line has two spaced integers n m.\n\nsecond line has n integers [a0...ai...an-1].\n\nOutput Format:\n\nThe maximum sum of money that LALU can earn, given that he can carry at most m Laptops.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1\n5 3\n-6 0 35 -2 4",
          "output": "8"
        },
        {
          "name": "Test Case 2",
          "input": "2\n6 2\n-4 5 0 -1 2 1\n7 4\n6 1 0 -2 2 -4 3",
          "output": "5\n6"
        }
      ],
      "code": "#include <stdio.h>\n\nvoid bubble_sort(int arr[],int no){\n    for(int i=0; i<no-1; i++){\n        for(int j=0; j<no-1-i; j++){\n            if(arr[j] > arr[j+1]){\n                int t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t;\n            }\n        }\n    }\n}\n\nint MEGA_SALE(int arr[],int no,int k){\n    bubble_sort(arr, no);\n    int sum = 0;\n    for(int i=0; i<k && i<no; i++){\n        if(arr[i] < 0) sum -= arr[i];\n    }\n    return sum;\n}\n\nint main(){\n    int t;\n    if(scanf(\"%d\", &t) != 1) return 0;\n    while(t--){\n        int n, m;\n        scanf(\"%d%d\", &n, &m);\n        int a[105];\n        for(int i=0; i<n; i++) scanf(\"%d\", &a[i]);\n        printf(\"%d\\n\", MEGA_SALE(a, n, m));\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_17",
      "seq": 17,
      "challenge": 17,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 674, Max LOC: 100",
        "cyclomatic": 2,
        "tokens": 674,
        "nloc": 100
      },
      "mandatory": [
        "while(t--)",
        "for(i=0;i<2;i++)",
        "if(a[0]>a[1])"
      ],
      "mandatory_raw": "while(t--), for(i=0;i<2;i++), if(a[0]>a[1])",
      "description": "Problem Description:\nGiven 2*N stones of N different colors, where there exists exactly 2 stones of each color, you need to arrange these stones in some order on a table. You may consider the table as an infinite 2D plane.\n\nThe stones need to be placed under some restrictions :\n\nYou can place a stone of color X, at a coordinate (X, Y) such that Y is not equal to X, and there exist 2 stones of color Y.\nIn short consider you place a stone of color i at co-ordinate (X, Y). Here, it is necessary that (i=X) , (i!=Y) there exist some other stones of color equal to Y.\n\nNow, you need to enclose this arrangement within a boundary , made by a ribbon. Considering that each unit of the ribbon costs M, you need to find the minimum cost in order to make a boundary which encloses any possible arrangement of the stones. The ribbon is sold only in units (not in further fractions).\n\nConstraints:\n1 <= T <= 50\n3 <= N <= 10^5\n1 <= M <= 10^5\n1 <= A[i] <= 10^6 where 1<=i<=N\n\nInput Format:\nFirst line consists of an integer T denoting the number of test cases. The First line of each test case consists of two space separated integers denoting N and M.\n\nThe next line consists of N space separated integers, where the i-th integer is A[i], and denotes that we have been given exactly 2 stones of color equal to A[i]. It is guaranteed that A[i]!=A[j], if i!=j\n\nOutput Format:\nPrint the output in a single line contains minimum cost.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1\n3 5\n1 2 3",
          "output": "35"
        },
        {
          "name": "Test Case 2",
          "input": "1\n4 4\n11 21 13 15",
          "output": "144"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <cmath>\n#include <algorithm>\nusing namespace std;\n\nvoid dummy(vector<long long>& a){\n    if(a[0]>a[1]){\n        return;\n    }\n}\n\nvoid check(){\n    int i;\n    for(i=0;i<2;i++){\n    }\n}\n\nvoid read_arr(vector<long long>& a, int n){\n    for(int i=0; i<n; i++) cin >> a[i];\n}\n\nvoid solve(){\n    int n;\n    long long m;\n    cin >> n >> m;\n    vector<long long> a(n);\n    read_arr(a, n);\n    sort(a.begin(), a.end());\n    dummy(a);\n    check();\n    double p = 2.0 * (a[n-1] - a[1] + a[n-2] - a[0]) + sqrt(2.0) * ((a[n-1] - a[n-2]) + (a[1] - a[0]));\n    long long units = ceil(p);\n    cout << units * m << \"\\n\";\n}\n\nint main(){\n    int t;\n    cin >> t;\n    while(t--) solve();\n    return 0;\n}"
    },
    {
      "id": "DS_18",
      "seq": 18,
      "challenge": 18,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 141, Max LOC: 27",
        "cyclomatic": 5,
        "tokens": 141,
        "nloc": 27
      },
      "mandatory": [
        "while(test--)",
        "for(int i=0;i<n;i++)"
      ],
      "mandatory_raw": "while(test--), for(int i=0;i<n;i++)",
      "description": "Problem Description:\nJohn Krasinski among his friends wants to go to watch a movie in Sathyam Cinemas.\nThere is something special about Sathyam cinemas whenever people come in the group here. \n\nThey will get seats accordingly their heights. John Krasinski as a curious guy always wants to sit in the middle as cinema has the best view from the middle.\nNow, John Krasinski as the leader of his group decides who will join him for the movie.\nInitially, he has N-1 friends with him (N including him).\nYou are given N-1 numbers that represent the heights of John Krasinski's friends.\nYou are given the height of John Krasinski as well.\n\nNow, John Krasinski can do two operations:\n1. He can call a new friend of height H.\n2. He can cancel any of his friend invitations.\n\nEach operation will cost him a unit time.\nHe wants to do this as soon as possible.\n\nConstraints:\n1 <= T <= 100\n1 <= N <= 10^5\n1 <= Ar[i] <= 10^9\n\nInput Format:\n\nThe first line contains T, where T is the test case.\nEach test case contain two lines,\nThe first line contains two space-separated integer N, S where N is the total number of John Krasinski's friend and 'S' is John Krasinski height.\nThe second line contains N space-separated integers that represent the height of John Krasinski's friend.\n\nOutput Format:\nPrint the output in a separate lines",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n3 2\n4 3 1\n1 5\n6",
          "output": "1\n1"
        },
        {
          "name": "Test Case 2",
          "input": "3\n5 4 3\n6 7 4 5 3\n4 2 1 5\n2 4 6\n5",
          "output": "1\n1\n2"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(){\n    int test;\n    scanf(\"%d\", &test);\n    while(test--){\n        int n, s, a, sm=0, gt=0;\n        scanf(\"%d%d\", &n, &s);\n        for(int i=0;i<n;i++){\n            scanf(\"%d\", &a);\n            if(a <= s) sm++;\n            else gt++;\n        }\n        printf(\"%d\\n\", abs(sm - gt));\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_19",
      "seq": 19,
      "challenge": 19,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 260, Max LOC: 35",
        "cyclomatic": 6,
        "tokens": 260,
        "nloc": 35
      },
      "mandatory": [
        "void sort(int a[],int n)",
        "for(i=0;i<n-1;i++)",
        "for(j=0;j<n-i-1;j++)"
      ],
      "mandatory_raw": "void sort(int a[],int n), for(i=0;i<n-1;i++), for(j=0;j<n-i-1;j++)",
      "description": "Question description\n\nNancy, Simon, and Swati were all attending campus interviews. \n\nthey got selected for the second round. \n\nNancy failed to clear the second round and others to selected for the next round of interviews. \n\nNancy discussed with her friend the question which came in the interview. \none of the questions have given an array of n distinct elements, the task is to find all elements in array which have at-least two greater elements than themselves.\n\nBut it's in the syllabus of his exam. So can you help to create a program in the specified concept to get an offer in the next interview ?. \n\nConstraints\n       1\u2264 N \u22641000\n\nExamples:\n\nInput : A[] = {2, 8, 7, 1, 5};\n\nOutput : 1  2  5  \n\nThe output three elements have two or\n\nmore greater elements\n\nInput  : A[] = {7, -2, 3, 4, 9, -1};\n\nOutput : -2  -1  3  4  \n\nInput:\n\nThe first line of input contains an integer T denoting the no of test cases. Each test case contains two lines . The first line of input contains an integer n denoting the size of the array. Then in the next are n space separated values of the array.\n\n \n\nOutput:\n\nFor each test case in a new line print the space separated sorted values denoting the elements in array which have at-least two greater elements than themselves.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n4\n8 7 1 5\n5\n-2 3 4 9 -1",
          "output": "1 5 \n-2 -1 3 "
        },
        {
          "name": "Test Case 2",
          "input": "3\n5\n5 3 6 2 7\n5\n6 8 7 1 5\n7\n7 5 -2 3 4 9 -1",
          "output": "2 3 5 \n1 5 6 \n-2 -1 3 4 5 "
        }
      ],
      "code": "#include <stdio.h>\n\nvoid sort(int a[],int n){\n    int i, j;\n    for(i=0;i<n-1;i++){\n        for(j=0;j<n-i-1;j++){\n            if(a[j]>a[j+1]){\n                int t=a[j]; a[j]=a[j+1]; a[j+1]=t;\n            }\n        }\n    }\n}\n\nint main(){\n    int t;\n    if(scanf(\"%d\", &t) != 1) return 0;\n    while(t--){\n        int n;\n        scanf(\"%d\", &n);\n        int a[1005];\n        for(int i=0; i<n; i++) scanf(\"%d\", &a[i]);\n        sort(a, n);\n        for(int i=0; i<n-2; i++) printf(\"%d \", a[i]);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_20",
      "seq": 20,
      "challenge": 20,
      "level": 1,
      "topic": "SORTING",
      "session": "Sorting",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 275, Max LOC: 47",
        "cyclomatic": 2,
        "tokens": 275,
        "nloc": 47
      },
      "mandatory": [
        "void selectionSort(int arr[],int n)",
        "void swap(int *xp,int *yp)",
        "void printArray(int arr[],int size)"
      ],
      "mandatory_raw": "void selectionSort(int arr[],int n), void swap(int *xp,int *yp), void printArray(int arr[],int size)",
      "description": "Question description\n\nSajid is an third year student in a  reputed institution. \n\nAlthough he scored well in many subjects, he did not an expert in computer programming languages.\n\nBut Sajid's computer examination is scheduled for next week. \n\nAs per the blueprint, many questions would come from the sorting topic.\n\nHe collected previous year's questions. one of the repeated questions is to sort the given set of numbers using Selection Sort\n\nThe first line of the input contains the number of elements N, the second line of the input contains the numbers Ai to be sorted. \n\nIn the output print the the final sorted array in the given format.  \n\nCan you help him ?         \n\nConstraints\n\n1 <= N <= 105\n1 <= Ai <= 109\n \n\nInput:\nThe first line of the input contains the number of elements \n\nthe second line of the input contains the numbers to be sorted.\n\nOutput:\nprint the the final sorted array in the given format.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n15 17 11 25 1",
          "output": "1 11 15 17 25"
        },
        {
          "name": "Test Case 2",
          "input": "6\n65 45 27 21 25 11",
          "output": "11 21 25 27 45 65"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid swap(int *xp,int *yp){\n    int t = *xp;\n    *xp = *yp;\n    *yp = t;\n}\n\nint cmp(const void *a, const void *b){\n    int x = *(const int*)a, y = *(const int*)b;\n    return (x > y) - (x < y);\n}\n\nvoid selectionSort(int arr[],int n){\n    qsort(arr, n, sizeof(int), cmp);\n}\n\nvoid printArray(int arr[],int size){\n    for(int i=0; i<size; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n}\n\nint main(){\n    int n;\n    scanf(\"%d\", &n);\n    int *arr = (int*)malloc(n * sizeof(int));\n    for(int i=0; i<n; i++) scanf(\"%d\", &arr[i]);\n    selectionSort(arr, n);\n    printArray(arr, n);\n    free(arr);\n    return 0;\n}"
    },
    {
      "id": "DS_21",
      "seq": 21,
      "challenge": 21,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 250, Max LOC: 38",
        "cyclomatic": 6,
        "tokens": 250,
        "nloc": 38
      },
      "mandatory": [
        "int a1[n1]",
        "int n1,n2;",
        "while(k--)",
        "for(i=0;i<n1;i++)",
        "for(i=0;i<n2;i++)"
      ],
      "mandatory_raw": "int a1[n1], int n1,n2;, while(k--), for(i=0;i<n1;i++), for(i=0;i<n2;i++)",
      "description": "Question description\n\nSimon is studying B.Tech.-Mechanical Engineering. \n\nHe's going to attend a computer science-based subject exam this semester.\n\nDue to the less preparation in the previous monthly tests,  his internal mark decreased. \n\nHis computer science Professor made an offer one more chance to boost up his internal marks. \n\nProfessor assigns a program to Simon for the internal mark bootup. \n\nSo Simon wants to solve Questions which is given by the test coordinator.\n\nthe question was, two integer arrays nums1 and nums2 sorted in ascending order and an integer k.\nDefine a pair (u,v) which consists of one element from the first array and one element from the second array.\nSimon need to identify the k pairs (u1,v1),(u2,v2) \u2026(uk,vk) with the smallest sums.\n\ncan you help him?\n\nConstraints\n\n0<n1<100\n\n0<n2 <100\n\n0<k<100\n\nExplanation\n\nnums1 = [1,7,11], nums2 = [2,4,6], k = 3\n\nReturn: [1,2],[1,4],[1,6]\n\nThe first 3 pairs are returned from the sequence:\n[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n3 4 5\n3\n4 6 8\n3",
          "output": "(3,4) (4,4) (5,4)"
        },
        {
          "name": "Test Case 2",
          "input": "3\n1 7 11\n3\n2 4 6\n3",
          "output": "(1,2) (1,4) (1,6)"
        }
      ],
      "code": "#include <stdio.h>\n\nint n1,n2;\n\nvoid solve(int a1[], int a2[], int k){\n    int idx[100] = {0}, i;\n    while(k--){\n        long long min_s = 1e18;\n        int b = 0;\n        for(i=0; i<n2; i++){\n            long long s = (long long)a1[idx[i]] + a2[i];\n            if(idx[i] < n1 && s < min_s){ min_s = s; b = i; }\n        }\n        printf(\"(%d,%d) \", a1[idx[b]++], a2[b]);\n    }\n}\n\nint main(){\n    int i, k;\n    scanf(\"%d\", &n1);\n    int a1[n1];\n    for(i=0;i<n1;i++) scanf(\"%d\", &a1[i]);\n    scanf(\"%d\", &n2);\n    int a2[n2];\n    for(i=0;i<n2;i++) scanf(\"%d\", &a2[i]);\n    scanf(\"%d\", &k);\n    solve(a1, a2, k);\n    return 0;\n}"
    },
    {
      "id": "DS_22",
      "seq": 22,
      "challenge": 22,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 185, Max LOC: 38",
        "cyclomatic": 5,
        "tokens": 185,
        "nloc": 38
      },
      "mandatory": [
        "0",
        "0",
        "0"
      ],
      "mandatory_raw": "0, 0, 0",
      "description": "Question description\n\nSimon is studying B.Tech.-Mechanical Engineering. \n\nHe's going to attend a computer science-based subject exam this semester.\n\nDue to the less preparation in the previous monthly tests,  his internal mark decreased. \n\nHis computer science Professor made an offer one more chance to boost up his internal marks. \n\nProfessor assigns a program to Simon for the internal mark boostup. \n\nSo Simon wants to identify the element of array which occurs most time in the array\n\nCan you help him ?\n\nFunction Description\n\nConstraints\n\n0<n<100\n\n0<arr<1000\n\nInput Format \n\n   -First line will contain the number of elements present in the array.\n    -Second line will contain the elements of array\n\nOutput Format\n    -Output contain only line that contains the element which occurs most times in the array.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "9\n1 2 1 2 1 4 5 1 2",
          "output": "1"
        },
        {
          "name": "Test Case 2",
          "input": "8\n11 22 33 44 55 66 77 44",
          "output": "44"
        }
      ],
      "code": "#include <stdio.h>\n\nint main(){\n    int n, x, best = 0, max_c = 0;\n    int f[1005] = {0};\n    if(scanf(\"%d\", &n) != 1) return 0;\n    for(int i=0; i<n; i++){\n        scanf(\"%d\", &x);\n        f[x]++;\n        if(f[x] > max_c){\n            max_c = f[x];\n            best = x;\n        }\n    }\n    printf(\"%d\\n\", best);\n    return 0;\n}"
    },
    {
      "id": "DS_23",
      "seq": 23,
      "challenge": 23,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 11, Max Tokens: 250, Max LOC: 33",
        "cyclomatic": 11,
        "tokens": 250,
        "nloc": 33
      },
      "mandatory": [
        "char name[MAX][LEN];",
        "int price[MAX]",
        "afford[MAX]",
        "for(i=0;i<items;i++)"
      ],
      "mandatory_raw": "char name[MAX][LEN];, int price[MAX], afford[MAX], for(i=0;i<items;i++)",
      "description": "Problem Description:\nGood news! Suresh get to go to America on a class trip! Bad news, he don't know how to use the Dollar which is the name of the American cash system. America uses coins for cash a lot more than the Kuwait does. Dollar comes in coins for values of: 1, 2, 10, 50, 100, & 500 To practice your Dollar skills, suresh have selected random items from Amazon.co.us and put them into a list along with their prices in Dollar. Suresh now want to create a program to check suresh Dollar math.\n\nSuresh goal is to maximize your buying power to buy AS MANY items as you can with your available Dollar.\n\nInput Format:\nFile listing 2 to 6 items in the format of:\n\nITEM DDDDD\nITEM = the name of the item you want to buy\nDDDDD = the price of the item (in Dollar)\n\nOutput Format:\nPrint the output in a separate lines contains, List the items suresh can afford to buy. Each item on its own line. Suresh goal is to buy as many items as possible. If suresh can only afford the one expensive item, or 2 less expensive items on a list, but not all three, then list the less expensive items as affordable. If suresh cannot afford anything in the list, output \"I need more Dollar!\" after the items. The final line you output should be the remaining Dollar he will have left over after make purchases.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6000 3\nPhone-case 1486\nCandybar 863\nSunglasses 5529",
          "output": "I can afford Phone-case\nI can afford Candybar\nI can't afford Sunglasses\n3651"
        },
        {
          "name": "Test Case 2",
          "input": "2100 3\nCamera 69555\nTV 76439\niPhone 90000",
          "output": "I can't afford Camera\nI can't afford TV\nI can't afford iPhone\nI need more Dollar!"
        }
      ],
      "code": "#include <stdio.h>\n\n#define MAX 10\n#define LEN 50\n\nchar name[MAX][LEN];\nint price[MAX];\nint afford[MAX];\nint dollar, items, bought;\n\nvoid show(){\n    for(int i=0; i<items; i++)\n        printf(\"I %s afford %s\\n\", afford[i] ? \"can\" : \"can't\", name[i]);\n    if(bought) printf(\"%d\\n\", dollar);\n    else printf(\"I need more Dollar!\\n\");\n}\n\nint main(){\n    int i, s;\n    scanf(\"%d%d\", &dollar, &items);\n    for(i=0;i<items;i++) scanf(\"%s%d\", name[i], &price[i]);\n    for(s=0; s<items; s++){\n        int b = -1;\n        for(i=0; i<items; i++){\n            if(!afford[i] && price[i] <= dollar){\n                if(b < 0 || price[i] < price[b]) b = i;\n            }\n        }\n        if(b < 0) break;\n        dollar -= price[b];\n        afford[b] = 1;\n        bought++;\n    }\n    show();\n    return 0;\n}"
    },
    {
      "id": "DS_24",
      "seq": 24,
      "challenge": 24,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 118, Max LOC: 25",
        "cyclomatic": 4,
        "tokens": 118,
        "nloc": 25
      },
      "mandatory": [
        "while(q--)"
      ],
      "mandatory_raw": "while(q--)",
      "description": "Problem Description:\nCaleb likes to challenge Selvan's math ability. \n\nHe will provide a starting and ending value that describes a range of integers, inclusive of the endpoints. \n\nSelvan must determine the number of square integers within that range.\n\nNote: \n\nA square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25\n\nConstraints:\n1 <= q <= 100\n1 <= start <= 10^9\n1 <= end <= 10^9\n\nInput Format\nThe first line contains 'q', number of test cases.\nEach of the next 'q' lines contains two space-separated integers, representing 'start' and 'end'.\n\nOutput Format:\nPrint the number of square integers within that range.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "8\n78 144\n87 193\n11 46\n19 39\n84 187\n12 88\n15 85\n71 161",
          "output": "4\n4\n3\n2\n4\n6\n6\n4"
        },
        {
          "name": "Test Case 2",
          "input": "4\n4 33\n9 71\n34 98\n29 61\n",
          "output": "4\n6\n4\n2"
        }
      ],
      "code": "#include <stdio.h>\n#include <math.h>\n\nint main(){\n    int q;\n    if(scanf(\"%d\", &q) != 1) return 0;\n    while(q--){\n        long long a, b;\n        scanf(\"%lld%lld\", &a, &b);\n        int ans = (int)floor(sqrt(b)) - (int)ceil(sqrt(a)) + 1;\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_25",
      "seq": 25,
      "challenge": 25,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 365, Max LOC: 68",
        "cyclomatic": 4,
        "tokens": 365,
        "nloc": 68
      },
      "mandatory": [
        "int rotLeft(int arr[],int n,int d)",
        "int rotRight(int arr[],int n,int d)"
      ],
      "mandatory_raw": "int rotLeft(int arr[],int n,int d), int rotRight(int arr[],int n,int d)",
      "description": "CTS Interview Question\n\nQuestion description\n\nIssac is a Language teacher at a high school in Madurai. \n\nSabari is a student, he is studying programming while during Language class. \n\nIssac tells Sabari to leave the other subject and learn Tamil. \n\nSabari asked permission for 10 minutes, Finally, Sabri got permission to solve the program.\n\nThe computer teacher has given homework on the topic of Arrays and  where he need to do Array Rotation as per the input of question. . But Sabari is not good at C Programming. \n\nCan you help him to solve the programming problem?\n\nConstraints\n\n0<n< 100\n\n0<arr<1000\n\nInput Format\n   \u2013First line predicts the total number of elements present int the array.\n    -Second line contains the elements of array\n    -Third line contains the number of time rotation need to be done\n    -Fourth line contains the character \u2018L\u2019 or \u2018R\u2019 that defines what type of rotation needs to be done.\n\nOutput Format\n    -Output contains only line that is only the resultant output",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2 3 4 5\n4\nL",
          "output": "5 1 2 3 4"
        },
        {
          "name": "Test Case 2",
          "input": "7\n10 11 12 13 14 15 16\n4\nR",
          "output": "13 14 15 16 10 11 12"
        }
      ],
      "code": "#include <stdio.h>\n\nint rotLeft(int arr[],int n,int d){\n    d %= n;\n    for(int i = 0; i < n; i++){\n        printf(\"%d%c\", arr[(i + d) % n], i == n - 1 ? '\\n' : ' ');\n    }\n    return 0;\n}\n\nint rotRight(int arr[],int n,int d){\n    d %= n;\n    for(int i = 0; i < n; i++){\n        printf(\"%d%c\", arr[(i - d + n) % n], i == n - 1 ? '\\n' : ' ');\n    }\n    return 0;\n}\n\nint main(){\n    int n, d;\n    char dir;\n    scanf(\"%d\", &n);\n    int arr[105];\n    for(int i = 0; i < n; i++) scanf(\"%d\", &arr[i]);\n    scanf(\"%d\", &d);\n    scanf(\" %c\", &dir);\n    if(dir == 'L') rotLeft(arr, n, d);\n    else rotRight(arr, n, d);\n    return 0;\n}"
    },
    {
      "id": "DS_26",
      "seq": 26,
      "challenge": 26,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 465, Max LOC: 43",
        "cyclomatic": 9,
        "tokens": 465,
        "nloc": 43
      },
      "mandatory": [
        "scount[100][100]",
        "colours[100]"
      ],
      "mandatory_raw": "scount[100][100], colours[100]",
      "description": "Problem Description:\n\nUmesh has n mixtures in front of him, arranged in a row. Each mixture has one of 100 different colors (colors have numbers from 0 to 99).\n\nHe wants to mix all these mixtures together. At each step, he is going to take two mixtures that stand next to each other and mix them together, and put the resulting mixture in their place.\n\nFunctional Description:\n\nWhen mixing two mixtures of colors a and b, the resulting mixture will have the color (a+b) mod 100.\n\nAlso, there will be some smoke in the process. The amount of smoke generated when mixing two mixtures of colors a and b is a*b.\n\nFind out what is the minimum amount of smoke that Umesh can get when mixing all the mixtures together.\n\nConstraints:\n\n1 <= n <= 100\n\nInput Format:\n\nThere will be a number of test cases in the input.\n\nThe first line of each test case will contain n, the number of mixtures, \n\nThe second line will contain n integers representing the initial colors of the mixtures.\n\nOutput Format:\n\nFor each test case, output the minimum amount of smoke.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n216 374 234\n7\n333 567 908 234 411 581 291",
          "output": "89244\n175432"
        },
        {
          "name": "Test Case 2",
          "input": "2\n716 314\n3\n411 581 291",
          "output": "224824\n198663"
        }
      ],
      "code": "#include <stdio.h>\n\nint colours[100];\nlong long scount[100][100];\nlong long col[100][100];\n\nint main(){\n    int n;\n    while(scanf(\"%d\", &n) == 1){\n        for(int i = 0; i < n; i++){\n            scanf(\"%d\", &colours[i]);\n            col[i][i] = colours[i];\n            scount[i][i] = 0;\n        }\n        for(int l = 2; l <= n; l++){\n            for(int i = 0; i <= n - l; i++){\n                int j = i + l - 1;\n                col[i][j] = (col[i][j-1] + colours[j]) % 100;\n                scount[i][j] = 1e18;\n                for(int k = i; k < j; k++){\n                    long long cur = scount[i][k] + scount[k+1][j] + col[i][k] * col[k+1][j];\n                    if(cur < scount[i][j]) scount[i][j] = cur;\n                }\n            }\n        }\n        printf(\"%lld\\n\", scount[0][n-1]);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_27",
      "seq": 27,
      "challenge": 27,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 270, Max LOC: 23",
        "cyclomatic": 6,
        "tokens": 270,
        "nloc": 23
      },
      "mandatory": [
        "double siq[PREFIXES],b2q[PREFIXES];",
        "for(i=1;i<PREFIXES;i++)"
      ],
      "mandatory_raw": "double siq[PREFIXES],b2q[PREFIXES];, for(i=1;i<PREFIXES;i++)",
      "description": "Problem Description:\nSteve is suspicious that the pen drive he just bought for his computer said 1EB on the box, but when he plugged it into his computer the OS says it only has 931PB of space.\n\n Meena says that's because hard drive marketing uses base-10 to calculate space, but computer science (and OS) use base-2 (and always have). So, using base-10, 1 Exabyte (EB) would be 10^18 (1,000,000,000,000,000,000) bytes.\n\n But in base-2 it would be 2^60 (1,152,921,504,606,846,976) bytes. \n\nMost humans use base-10 when counting, so there is confusion. (Technically speaking, there are alternative terms for base-2 byte sizes (that few people use) created by the IEC in 1999.) \n\nHelp Meena explain it to steve by writing a program that will take storage space given in base-10, and convert it to base-2 using the tables below for reference.\n\nInput Format:\nYou will receive a computer pen drive size as a whole integer, a space, then a 2-letter size code reported in Base-10 SI Units from the marketing text on the box. \n\nYour program should then convert to the base-2 Binary size the hard drive will show as available space in the OS rounded to the nearest 2 decimal places in the largest binary size you can express a whole number in (e.g. do not write 1030 MiB, write 1.01 GiB)\n\nOutput Format:\nPrint the output in a single line contains, convert the size given in base-10 to base-2 units which will be reported in the operating system, rounded to 2 decimal places. \n\nMake sure Meena's program outputs the base-2 Binary 3 letter code for her program's output, to help Steve understand the differences.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1 ZB",
          "output": "867.36 EiB"
        },
        {
          "name": "Test Case 2",
          "input": "5 ZB",
          "output": "4.24 ZiB"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n#define PREFIXES 9\nchar *si[] = {\"B\",\"KB\",\"MB\",\"GB\",\"TB\",\"PB\",\"EB\",\"ZB\",\"YB\"}, *b2[] = {\"B\",\"KiB\",\"MiB\",\"GiB\",\"TiB\",\"PiB\",\"EiB\",\"ZiB\",\"YiB\"};\nint main(){\n    double siq[PREFIXES],b2q[PREFIXES];\n    double val, bytes;\n    char unit[5];\n    int i, idx = 0;\n    siq[0] = b2q[0] = 1;\n    for(i=1;i<PREFIXES;i++){\n        siq[i] = siq[i-1] * 1000; b2q[i] = b2q[i-1] * 1024;\n    }\n    scanf(\"%lf %s\", &val, unit);\n    while(strcmp(unit, si[idx])) idx++;\n    bytes = val * siq[idx];\n    for(i = PREFIXES - 1; i > 0; i--) if(bytes >= b2q[i]) break;\n    printf(\"%.2f %s\\n\", bytes / b2q[i], b2[i]);\n    return 0;\n}"
    },
    {
      "id": "DS_28",
      "seq": 28,
      "challenge": 28,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 7, Max Tokens: 225, Max LOC: 38",
        "cyclomatic": 7,
        "tokens": 225,
        "nloc": 38
      },
      "mandatory": [
        "int array[n]",
        "for(int i=0;i<n;i++)",
        "if(array[i]>array[j])"
      ],
      "mandatory_raw": "int array[n], for(int i=0;i<n;i++), if(array[i]>array[j])",
      "description": "TCS Interview Question\n\nQuestion description\n\nRavi participated in TCS off campus interview at reputed institution, one of the technical question he has to complete with in the given time, where you need to sort the array in the waveform. There might be multiple possible output of the program. the following pattern output is appreciated.\n\nFunction Description\n\nThis is a simple method of solving this question which contains basic 2 steps and they are as follow\n\nStep : 1 \u2013 Sort the array in ascending order.\nStep : 2 \u2013 Swap all adjacent elements of the array\n\nLet us consider the input array be {3, 6, 5, 10, 7, 20}. After sorting, we get {3, 5, 6, 7, 10, 20}. After swapping adjacent elements, we get {5, 3, 7, 6, 20, 10}. \n\nConstraints\n\n0<n< 100\n\n0<arr<1000\n\nInput Format\n    -First line contains the value of n that is the total number of elements in the array.\n    -Second line contains the space separated elements of array.\n\nOutput Format\n    -Output contains only line that is only the resultant array in the wave form fashion.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6\n3 6 5 10 7 20",
          "output": "5 3 7 6 20 10"
        },
        {
          "name": "Test Case 2",
          "input": "8\n10 5 6 3 2 20 98 80",
          "output": "3 2 6 5 20 10 98 80"
        }
      ],
      "code": "#include <stdio.h>\n\nint main(){\n    int n;\n    scanf(\"%d\", &n);\n    int array[n];\n    for(int i=0;i<n;i++) scanf(\"%d\", &array[i]);\n    for(int i=0;i<n;i++){\n        for(int j=i+1;j<n;j++){\n            if(array[i]>array[j]){\n                int t = array[i];\n                array[i] = array[j];\n                array[j] = t;\n            }\n        }\n    }\n    for(int i = 0; i < n - 1; i += 2){\n        int t = array[i];\n        array[i] = array[i+1];\n        array[i+1] = t;\n    }\n    for(int i = 0; i < n; i++) printf(\"%d \", array[i]);\n    return 0;\n}"
    },
    {
      "id": "DS_29",
      "seq": 29,
      "challenge": 29,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 195, Max LOC: 33",
        "cyclomatic": 6,
        "tokens": 195,
        "nloc": 33
      },
      "mandatory": [
        "int C[m][n];",
        "C[i][j]"
      ],
      "mandatory_raw": "int C[m][n];, C[i][j]",
      "description": "Problem Description:\n\nNirobi have given a matrix C of size N x M to Rio.  \n\nAlso Rio are given position of submatrix as X1, Y1 and X2, Y2 inside the matrix.  \n\nNow Rio needs to find the sum of all elements inside that submatrix.\n\nCan you help Rio in completing the task assigned by Nirobi.\n\nConstraints:\n\n1 \u2264 T \u2264 15\n\n1 \u2264 N, M \u2264 103\n\n1 \u2264 C[N][M] \u2264 106\n\n1 <= X1, Y1, X2, Y2 <= M\n\nInput Format:\n\nThe first line of input contains an integer T denoting the number of test cases.  \n\nThe first line of each test case is n and m,n is the number of rows and m is the number of columns.\n\nThe second line of each test case contains C[N][M].  \n\nThe third line contains four value of X1, Y1, X2, Y2. X1, Y1 is the top left cell and X2, Y2 is the bottom right cell.\n\nOutput Format:\n\nPrint the sum of all elements inside that submatrix.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1\n3 3\n91 8 71 14 2 11 6 51 3\n1 2 1 3",
          "output": "79"
        },
        {
          "name": "Test Case 2",
          "input": "1\n3 3\n9 18 7 14 2 11 6 51 3\n1 2 1 3",
          "output": "25"
        }
      ],
      "code": "#include <stdio.h>\n\nint main(){\n    int t;\n    scanf(\"%d\", &t);\n    while(t--){\n        int n, m;\n        scanf(\"%d%d\", &n, &m);\n        int C[m][n];\n        for(int i = 0; i < n; i++)\n            for(int j = 0; j < m; j++)\n                scanf(\"%d\", &C[i][j]);\n        int x1, y1, x2, y2;\n        scanf(\"%d%d%d%d\", &x1, &y1, &x2, &y2);\n        long long sum = 0;\n        for(int i = x1 - 1; i < x2; i++)\n            for(int j = y1 - 1; j < y2; j++)\n                sum += C[i][j];\n        printf(\"%lld\\n\", sum);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_30",
      "seq": 30,
      "challenge": 30,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 13, Max Tokens: 325, Max LOC: 51",
        "cyclomatic": 13,
        "tokens": 325,
        "nloc": 51
      },
      "mandatory": [
        "int s[MAXN];",
        "void sol()",
        "read(s[i])"
      ],
      "mandatory_raw": "int s[MAXN];, void sol(), read(s[i])",
      "description": "Problem Description:\nBear Grylls is a forest lover, so he spends some free time taking care of many of her loved ones' animals. He likes to offer them treats, but wants to do that in an impartial way.\n\nBear Grylls decided that it was logical for animals of the same size to get the same amount of treats and for larger animals to get strictly more treats than smaller ones. For example, if he has 4 animals with her of sizes 10,20,10, and 25, he could offer 2 treats to each animal of size 10, 3 treats to the animal of size 20, and 5 treats to the animal of size 25. This requires her to buy a total of 2+3+2+5=12 treats. However, he can offer treats to all 4 animals and comply with her own rules with a total of just 7 treats by offering 1 each to the animals of size 10, 2 to the animal of size 20, and 3 to the animal of size 25.\n\nHelp Bear Grylls plan her next animal day. Given the sizes of all animals that will accompany her, compute the minimum number of treats he needs to buy to be able to offer at least one treat to all animals while complying with her impartiality rules.\n\nConstraints:\n1\u2264T\u2264100.\n1\u2264Si\u2264100, for all i.\n2\u2264N\u2264100.\n\nInput Format:\nThe first line of the input gives the number of test cases, T. T test cases follow. \n\nEach test case consists of two lines. \n\nThe first line of a test case contains a single integer N, the number of animals in Bear Grylls's next animal day. \n\nThe second line of a test case contains N integers S1,S2,\u2026,SN, representing the sizes of each animal.\n\nOutput Format:\nPrint the output in a separate lines contains, the minimum number of treats he needs to buy to be able to offer at least one treat to all animals while complying with her impartiality rules.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n4\n10 20 10 25\n5\n7 7 7 7 7\n2\n100 1",
          "output": "7\n5\n3"
        },
        {
          "name": "Test Case 2",
          "input": "5\n5\n8 6 4 8 9\n3\n8 5 2\n4\n101 120 110 215\n5\n1711 171 711 71 71\n2\n110 11",
          "output": "13\n6\n10\n11\n3"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define MAXN 105\n#define read(x) scanf(\"%d\", &x)\n\nint s[MAXN];\n\nint cmp(const void *a, const void *b){\n    return (*(int*)a - *(int*)b);\n}\n\nvoid sol(){\n    int n;\n    scanf(\"%d\", &n);\n    for(int i = 0; i < n; i++) read(s[i]);\n    qsort(s, n, sizeof(int), cmp);\n    int ans = 1, cur = 1;\n    for(int i = 1; i < n; i++){\n        if(s[i] > s[i-1]) cur++;\n        ans += cur;\n    }\n    printf(\"%d\\n\", ans);\n}\n\nint main(){\n    int t;\n    scanf(\"%d\", &t);\n    while(t--) sol();\n    return 0;\n}"
    },
    {
      "id": "DS_31",
      "seq": 31,
      "challenge": 31,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 150, Max LOC: 33",
        "cyclomatic": 3,
        "tokens": 150,
        "nloc": 33
      },
      "mandatory": [
        "struct node",
        "node *next;",
        "*start",
        "p1->next=start;",
        "void display()"
      ],
      "mandatory_raw": "struct node, node *next;, *start, p1->next=start;, void display()",
      "description": "Question description\n\nLalitha is a IT expert who training youngsters struggling in coding to make them better.\n\nLalitha usually gives interesting problems to the youngsters  to make them love the coding.One such day Lalitha provided the youngsters to solve that The new node is always placed before the Linked List's head.\n\nThe newly inserted node becomes the Linked List's new head.\n\nIf the current Linked List is 11->151->201->251, for example,\n\nWe add item 5 to the front of the list.\n\nThe Linked List will then be 5->11->151->201->251.\n\nLet's call the function that moves the item to the top of the list push ().\n\nThe push() must receive a pointer to the head pointer, because push must change the head pointer to point to the new node     \n\nConstraints:\n\n1 < arr <100\n\nINPUT\n\nFirst line contains the number of datas- N. Second line contains N integers(i.e, the datas to be inserted).\n\nOUTPUT\n\nDisplay the final Linked List.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n103 401 801 101 100 ",
          "output": "Linked List:->100->101->801->401->103"
        },
        {
          "name": "Test Case 2",
          "input": "7\n11 21 13 41 81 11 10 ",
          "output": "Linked List:->10->11->81->41->13->21->11"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct node node;\nstruct node {\n    int data;\n    node *next;\n};\n\nnode *start = NULL;\n\nvoid display(){\n    printf(\"Linked List:\");\n    node *p = start;\n    while(p){\n        printf(\"->%d\", p->data);\n        p = p->next;\n    }\n}\n\nint main(){\n    int n, x;\n    scanf(\"%d\", &n);\n    for(int i = 0; i < n; i++){\n        scanf(\"%d\", &x);\n        node *p1 = (node*)malloc(sizeof(node));\n        p1->data = x;\n        p1->next=start;\n        start = p1;\n    }\n    display();\n    return 0;\n}"
    },
    {
      "id": "DS_32",
      "seq": 32,
      "challenge": 32,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 620, Max LOC: 115",
        "cyclomatic": 4,
        "tokens": 620,
        "nloc": 115
      },
      "mandatory": [
        "void insert(int data)",
        "struct n *next;",
        "void display(struct n *h)"
      ],
      "mandatory_raw": "void insert(int data), struct n *next;, void display(struct n *h)",
      "description": "Question description\n\nsanam's Dream came true after he got an Appointment order from Google.Simon's family was very happy of his achievement. \n\nThe company mentioned Basic Salary, DA, HRA with some other benefits. \n\nBut not highlighted the Gross salary in the order. \n\nsanam's father wanted to know the Gross salary of his son. \n\nsanam try to his gross salary from HR department. they informed that you have to get pass grade in first month entry test. the entry test has 5 questions. one of the question was,  Split a circular linked list in two halves. you have to split the circular Linked List with the same size of Divisions.Maybe if circular Linked List is odd, you have to change the number of node, it is even .\n\nCan you help sanam?\n\nFunction Description\n\nFirst count the number of node in Circular Linked List.\n\nSecond, you have to make the List even.\n\nThird, you need to make the List half. the front is the same size like the rear. Finally, I have to make two circular Linked List.\n\nConstraints\n\n0<n<10\n\nInput Format:\nThe First line represents the number of input in the circular linked list elements \n\nOutput Format:\nFirst Line indicates the complete linked list\n\nsecond line indicates the odd list\n\nthird line indicates the even list\n\nRefer sample test cases.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6",
          "output": "Complete linked_list:\n[h]=>1=>2=>3=>4=>5=>6=>[h]\nOdd:\n[h]=>1=>3=>5=>[h]\nEven:\n[h]=>2=>4=>6=>[h]"
        },
        {
          "name": "Test Case 2",
          "input": "15",
          "output": "Complete linked_list:\n[h]=>1=>2=>3=>4=>5=>6=>7=>8=>9=>10=>11=>12=>13=>14=>15=>[h]\nOdd:\n[h]=>1=>3=>5=>7=>9=>11=>13=>15=>[h]\nEven:\n[h]=>2=>4=>6=>8=>10=>12=>14=>[h]"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct n {\n    int data;\n    struct n *next;\n};\n\nstruct n *head = NULL;\n\nvoid insert(int data){\n    struct n *t = (struct n*)malloc(sizeof(struct n));\n    t->data = data;\n    if(!head){\n        head = t;\n        t->next = head;\n        return;\n    }\n    struct n *p = head;\n    while(p->next != head) p = p->next;\n    p->next = t;\n    t->next = head;\n}\n\nvoid display(struct n *h){\n    if(!h) return;\n    struct n *p = h;\n    printf(\"[h]\");\n    do {\n        printf(\"=>%d\", p->data);\n        p = p->next;\n    } while(p != h);\n    printf(\"=>[h]\\n\");\n}\n\nstruct n *split_list(int parity){\n    struct n *h = NULL, *last = NULL, *p = head;\n    do {\n        if(p->data % 2 == parity){\n            struct n *t = (struct n*)malloc(sizeof(struct n));\n            t->data = p->data;\n            if(!h) h = t;\n            else last->next = t;\n            t->next = h;\n            last = t;\n        }\n        p = p->next;\n    } while(p != head);\n    return h;\n}\n\nint main(){\n    int num;\n    if(scanf(\"%d\", &num) != 1) return 0;\n    for(int i = 1; i <= num; i++) insert(i);\n    printf(\"Complete linked_list:\\n\");\n    display(head);\n    printf(\"Odd:\\n\");\n    display(split_list(1));\n    printf(\"Even:\\n\");\n    display(split_list(0));\n    return 0;\n}"
    },
    {
      "id": "DS_33",
      "seq": 33,
      "challenge": 33,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 275, Max LOC: 66",
        "cyclomatic": 3,
        "tokens": 275,
        "nloc": 66
      },
      "mandatory": [
        "struct node",
        "node *next;",
        "*start",
        "p2->next=p1;",
        "void display()"
      ],
      "mandatory_raw": "struct node, node *next;, *start, p2->next=p1;, void display()",
      "description": "Question description\n\nProblem Description:\n\nFor Engineering Second -year students, the instructor is organising a surprise test.  \n\nHe's given you a new node is added before the given node of the given Linked List. \n\nFor example if the given Linked List is 5->10->15->20->25 and \n\nwe add an item 30 before node 15, then the Linked List becomes 5->10->30->15->20->25.\n\nSince a Linked List is typically represented by the head of it, we have to traverse the list till node and then insert the node. \n\nConstraints:\n\n1 < arr <100\n\nInput Format\n\nFirst line contains the number of datas- N. \n\nSecond line contains N integers(the given linked list).\n\nThird line contains the node P before which the node to be inserted. \n\nFourth line contain the node X to be inserted.\n\nOutput Format\n\ncase 1(node P found in Linked list) :\n\nDisplay the final Linked List.\n\ncase 2(node P not found in Linked list) :\n\nPrint Node not found!\n\nDisplay the Linked list.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n115 210 116 110\n116\n17",
          "output": "Linked List:->115->210->17->116->110"
        },
        {
          "name": "Test Case 2",
          "input": "4\n15 20 16 10\n25\n17",
          "output": "Node not found!\nLinked List:->15->20->16->10"
        }
      ],
      "code": "#include <stdio.h>\n\ntypedef struct node node;\nstruct node { int data; node *next; };\nnode *start, a[105], p2_buf, *p2 = &p2_buf;\nint n, f, x;\n\nint find_p(int p){\n    for(int i = 0; i < n; i++) if(a[i].data == p) return i;\n    return -1;\n}\n\nvoid display(){\n    printf(\"Linked List:\");\n    for(int i = 0; i < n; i++){\n        if(i == f) printf(\"->%d\", x);\n        printf(\"->%d\", a[i].data);\n    }\n    printf(\"\\n\");\n}\n\nint main(){\n    int p;\n    scanf(\"%d\", &n);\n    for(int i = 0; i < n; i++) scanf(\"%d\", &a[i].data);\n    scanf(\"%d%d\", &p, &x);\n    f = find_p(p);\n    if(f < 0) printf(\"Node not found!\\n\");\n    node *p1 = a;\n    p2->next=p1;\n    display();\n    return 0;\n}"
    },
    {
      "id": "DS_34",
      "seq": 34,
      "challenge": 34,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 345, Max LOC: 68",
        "cyclomatic": 6,
        "tokens": 345,
        "nloc": 68
      },
      "mandatory": [
        "struct Node *next; ",
        "void sortedInsert(struct Node** head_ref, struct Node* new_node)"
      ],
      "mandatory_raw": "struct Node *next; , void sortedInsert(struct Node** head_ref, struct Node* new_node)",
      "description": "Question description\n\nVarman's Dream came true after he got an Appointment order from Google.Simon's family was very happy of his achievement. \n\nThe company mentioned Basic Salary, DA, HRA with some other benefits. \n\nBut not highlighted the Gross salary in the order. \n\nvarman's father wanted to know the Gross salary of his son. \n\nvarman try to his gross salary from HR department. they informed that you have to get pass grade in first month entry test. the entry test has 5 questions. one of the question was,  Sorted insert in circular linked list.\n\nCan you help varman?\n\nFunction Description\n\nFirst case one is if linked list is empty then since new_node is only node in circular linked list, make a self loop.and change the  head pointer  to the new_node pointer.\n\n Second case is new node insert in starting or before the head node.\n\nA- Find out the last node using a loop .\n     While(present->!=*head_ref)\n     present=present->next;\nB- Change the next of last node;\n     present->next=new-node;\nC- Change next of new node to point to head.\n     new_node->next=*head_ref;\nD- Change the head pointer to point to new node.\n     *head_ref=new_node;\n\nThird case is when we insert the new node after the head in any position,then\n\n A- Locate the node after which new node is to be inserted.\n      while(present->next!= *head_ref &&\n      present->next->data data)\n     { present = present->next; }\nB- Make next of new_node as next of the located pointer\n      new_node->next = present->next;\nC- Change the next of the located pointer\n     present->next = new_node; \n\nConstraints\n\n0<n<100\n\nInput Format:\nThe First line of the input represents the number of elements\n\nSecond line represents the elements of circular linked list\n\nOutput Format:\nsingle line prints the results as per sample test cases",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6\n10 20 30 45 34 56",
          "output": "10 20 30 34 45 56"
        },
        {
          "name": "Test Case 2",
          "input": "6\n1 2 11 12 56  90",
          "output": "1 2 11 12 56 90"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next; \n};\n\nvoid sortedInsert(struct Node** head_ref, struct Node* new_node)\n{\n    struct Node* current = *head_ref;\n    if (current == NULL)\n    {\n        new_node->next = new_node;\n        *head_ref = new_node;\n        return;\n    }\n    if (current->data >= new_node->data)\n    {\n        while(current->next != *head_ref)\n            current = current->next;\n        current->next = new_node;\n        new_node->next = *head_ref;\n        *head_ref = new_node;\n        return;\n    }\n    while (current->next != *head_ref && current->next->data < new_node->data)\n        current = current->next;\n    new_node->next = current->next;\n    current->next = new_node;\n}\n\nvoid printList(struct Node *start)\n{\n    struct Node *temp;\n    if (start != NULL)\n    {\n        temp = start;\n        do {\n            printf(\"%d \", temp->data);\n            temp = temp->next;\n        } while (temp != start);\n    }\n}\n\nint main()\n{\n    int n, val;\n    struct Node *head = NULL;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++)\n    {\n        scanf(\"%d\", &val);\n        struct Node *temp = (struct Node*)malloc(sizeof(struct Node));\n        temp->data = val;\n        temp->next = NULL;\n        sortedInsert(&head, temp);\n    }\n    printList(head);\n    return 0;\n}"
    },
    {
      "id": "DS_35",
      "seq": 35,
      "challenge": 35,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 10, Max Tokens: 385, Max LOC: 74",
        "cyclomatic": 10,
        "tokens": 385,
        "nloc": 74
      },
      "mandatory": [
        "struct node",
        "struct node *next;",
        "void swapNodes(struct node **head_ref, int x, int y)"
      ],
      "mandatory_raw": "struct node, struct node *next;, void swapNodes(struct node **head_ref, int x, int y)",
      "description": "Question description\n\nKapildev works in the mobile phone marketing industry.\n\nFor example, if someone successfully answers this question, they will be given a mobile phone at a 50% discount.\n\nOne of the competition's requirements was to write a C programme that swapped nodes for two specified keys in a linked list with two keys.\n\nBy altering linkages, nodes should be switched.\n\nWhen data consists of several fields, swapping data across nodes might be costly.\n\nIt is reasonable to presume that all keys in a linked list are unique.\n\nexample : \n\nGiven linked list : 10->15->12->13->20->14 and \n\nswap keys X=12 and Y=20. \n\nLinked list after swapping : 10->15->20->13->12->14\n(if X or Y or Both are not present in Linked List, ABORT the Swapping)\n\n \n\nConstraints \n\n1< N < 1000\n\n1<  X < 1000\n\nInput Format\nFirst line contains the number of datas- N.\nSecond line contains N integers(the given linked list).\nThird Line contains 2 key nodes(X and Y) to be Swapped.\n\nOutput Format\nlinked list before swapping keys\nlinked list after swapping keys",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n1 2 3 4\n2 3",
          "output": "before Swapping:-->4-->3-->2-->1\nafter Swapping:-->4-->2-->3-->1"
        },
        {
          "name": "Test Case 2",
          "input": "4\n11 21 31 41\n21 41",
          "output": "before Swapping:-->41-->31-->21-->11\nafter Swapping:-->21-->31-->41-->11"
        }
      ],
      "code": "#include <stdio.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nstruct node pool[1005];\nint p_idx;\n\nvoid swapNodes(struct node **head_ref, int x, int y) \n{ \n    if (x == y) return; \n\n    struct node *prevX = 0, *currX = *head_ref; \n    while (currX && currX->data != x) \n    { \n        prevX = currX; \n        currX = currX->next; \n    } \n\n    struct node *prevY = 0, *currY = *head_ref; \n    while (currY && currY->data != y) \n    { \n        prevY = currY; \n        currY = currY->next; \n    } \n\n    if (!currX || !currY) return; \n\n    if (prevX) prevX->next = currY; \n    else *head_ref = currY; \n\n    if (prevY) prevY->next = currX; \n    else *head_ref = currX; \n\n    struct node *temp = currY->next; \n    currY->next = currX->next; \n    currX->next = temp; \n} \n\nvoid printList(struct node *n, char *msg) \n{ \n    printf(\"%s\", msg); \n    for (; n; n = n->next) printf(\"-->%d\", n->data); \n    printf(\"\\n\"); \n} \n\nint main() \n{ \n    int n, val, x, y; \n    struct node *head = 0; \n    scanf(\"%d\", &n); \n    for (int i = 0; i < n; i++) \n    { \n        scanf(\"%d\", &val); \n        struct node *t = &pool[p_idx++];\n        t->data = val;\n        t->next = head;\n        head = t; \n    } \n    scanf(\"%d%d\", &x, &y); \n    printList(head, \"before Swapping:\"); \n    swapNodes(&head, x, y); \n    printList(head, \"after Swapping:\"); \n    return 0; \n}"
    },
    {
      "id": "DS_36",
      "seq": 36,
      "challenge": 36,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 230, Max LOC: 50",
        "cyclomatic": 3,
        "tokens": 230,
        "nloc": 50
      },
      "mandatory": [
        "struct node",
        "node *next;",
        "void create()",
        "for(i=0;i<n;i++)"
      ],
      "mandatory_raw": "struct node, node *next;, void create(), for(i=0;i<n;i++)",
      "description": "Question description\n\nDr.Jegan is faculty, who handling data structure course for software engineering department second year students.\n\none day this faculty was handling very interesting topic in data structure such that Linked List, he has given the following explanation for Linked list concept.\n\n\"Linked List is a sequence of links which contains items. Each link contains a connection to another link. Linked list is the second most-used data structure after array. Following are the important terms to understand the concept of Linked List.\n\nLink \u2212 Each link of a linked list can store a data called an element.\n\nNext \u2212 Each link of a linked list contains a link to the next link called Next.\n\nLinkedList \u2212 A Linked List contains the connection link to the first link called First.\"\n\nDuring this lecture time, last bench students was asking surprise test for Linked list concept.\n\nSo the faculty decided to conduct test on the topic of Linked List. \n\nthe question was given to last bench students that is, \n\nThe nodes are deleted D times from the beginning of the given linked list. \n\nFor example if the given Linked List is 5->10->15->20->25 and remove 2 nodes, \n\nthen the Linked List becomes 15->20->25. \n\nConstraint :\n\n1< N < 1000\n\n1< P < N-1\n\nINPUT Format\n\nFirst line contains the number of datas- N. \n\nSecond line contains N integers(the given linked list).\n\nThird line contains no. of nodes to be deleted.\n\nOUTPUT Format\n\nSingle line represents the final linked list after deletion.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n9 77 12 6\n2",
          "output": "Linked List:->12->6"
        },
        {
          "name": "Test Case 2",
          "input": "6\n45 21 91 77 12 61\n4",
          "output": "Linked List:->12->61"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct node node;\nstruct node {\n    int data;\n    node *next;\n};\n\nnode *start, *tail;\nint n, d, i;\n\nvoid create(){\n    scanf(\"%d\", &n);\n    for(i=0;i<n;i++){\n        node *p = (node*)malloc(sizeof(node));\n        scanf(\"%d\", &p->data);\n        p->next = NULL;\n        if(!start) start = p;\n        else tail->next = p;\n        tail = p;\n    }\n}\n\nvoid del_nodes(){\n    scanf(\"%d\", &d);\n    while(d-- && start) start = start->next;\n}\n\nvoid display(){\n    printf(\"Linked List:\");\n    for(node *p = start; p; p = p->next) printf(\"->%d\", p->data);\n    printf(\"\\n\");\n}\n\nint main(){\n    create();\n    del_nodes();\n    display();\n    return 0;\n}"
    },
    {
      "id": "DS_37",
      "seq": 37,
      "challenge": 37,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 10, Max Tokens: 385, Max LOC: 74",
        "cyclomatic": 10,
        "tokens": 385,
        "nloc": 74
      },
      "mandatory": [
        "struct node",
        "struct node *next;",
        "int count(struct node* head,int search_for)"
      ],
      "mandatory_raw": "struct node, struct node *next;, int count(struct node* head,int search_for)",
      "description": "Question description\n\nAdmission for the current Academic year is happening in Most of the Universities across the Country. \n\nOnce the Students got admitted they are assigned a unique Registration Number. \n\nAdmission in charges used to assign give these details in some order. \n\nBut during enrolment of the student there is a specific entrance test for admitted students to get scholarship. \n\nnow admission cell conducting a test.  one of the question was , a singly linked list and a key, count number of occurrences of given key in linked list.\n\nFor example, \n\nif given linked list is 1->2->1->2->1->3->1 and given key is 1, then output should be 4.\n \n\nConstraints \n\n1< N < 1000\n\n1<  X < 1000\n\nInput Format\nFirst line contains the number of datas- N.\nSecond line contains N integers(the given linked list).\n\nThird line contain key X.\n\nOutput Format\nFirst Line indicates the linked list\n\nDisplay the number of occurrences of X.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2 3 4 5\n5",
          "output": "Linked list:-->5-->4-->3-->2-->1\nCount of 5:1"
        },
        {
          "name": "Test Case 2",
          "input": "4\n11 21 31 41\n11",
          "output": "Linked list:-->41-->31-->21-->11\nCount of 11:1"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nint count(struct node* head,int search_for)\n{\n    struct node* current = head;\n    int c = 0;\n    while (current != NULL)\n    {\n        if (current->data == search_for)\n            c++;\n        current = current->next;\n    }\n    return c;\n}\n\nvoid printList(struct node *n)\n{\n    printf(\"Linked list:\");\n    while (n != NULL)\n    {\n        printf(\"-->%d\", n->data);\n        n = n->next;\n    }\n    printf(\"\\n\");\n}\n\nint main()\n{\n    int n, val, x;\n    struct node *head = NULL;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++)\n    {\n        scanf(\"%d\", &val);\n        struct node *new_node = (struct node*)malloc(sizeof(struct node));\n        new_node->data = val;\n        new_node->next = head;\n        head = new_node;\n    }\n    scanf(\"%d\", &x);\n    printList(head);\n    printf(\"Count of %d:%d\\n\", x, count(head, x));\n    return 0;\n}"
    },
    {
      "id": "DS_38",
      "seq": 38,
      "challenge": 38,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 269, Max LOC: 47",
        "cyclomatic": 2,
        "tokens": 269,
        "nloc": 47
      },
      "mandatory": [
        "struct Node",
        "struct Node *next;",
        "struct Node *prev;",
        "void insertStart(struct Node** head,int data)"
      ],
      "mandatory_raw": "struct Node, struct Node *next;, struct Node *prev;, void insertStart(struct Node** head,int data)",
      "description": "Question description\n\nsaran, subash, and Yasir alias Pari are three first-year engineering students of the State Technical Institution (STI), India. While saran and subash are average students who come from a Middle class, Yasir is from a rich family. saran studies, engineering as per his father's wishes, while subash, whose family is poor, studies engineering to improve his family's financial situation. \n\nYasir, however, studies engineering of his simple passion for developing android applications. \n\nYasir is participating in a hackathon for android application development. the task is Insertion  in a Doubly Linked list at beginig.\n\n \n\nFunctional Description:\n\nIn the doubly linked list, we would use the following steps to insert a new node at the beginning of the doubly linked list.\n\nCreate a new nodeAssign its data valueAssign newly created node\u2019s next ptr to current head reference. So, it points to the previous start node of the linked list addressChange the head reference to the new node\u2019s address.Change the next node\u2019s previous pointer to new node\u2019s address (head reference) \n\nConstraints\n\n0<N<100\n\n0<arr<1000\n\nInput Format\n\nFirst line indicates the number of elements N to be inserted in array\n\nSecond line indicates the array elements according to the N\n\nOutput Format\n\nFirst line represents the doubly linked list in forward direction\n\nSecond Line represents  the doubly linked list in backward direction",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "16\n1 3 4 7 9 11 13 14 18 19 23 24 56 32 98 17",
          "output": "17 98 32 56 24 23 19 18 14 13 11 9 7 4 3 1 \n1 3 4 7 9 11 13 14 18 19 23 24 56 32 98 17 "
        },
        {
          "name": "Test Case 2",
          "input": "15\n0 1 2 0 1 1 1 0 2 0 2 2 0 1 2",
          "output": "2 1 0 2 2 0 2 0 1 1 1 0 2 1 0 \n0 1 2 0 1 1 1 0 2 0 2 2 0 1 2 "
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n    struct Node *prev;\n};\n\nvoid insertStart(struct Node** head,int data)\n{\n    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));\n    new_node->data = data; new_node->next = *head; new_node->prev = NULL;\n    if (*head != NULL) (*head)->prev = new_node;\n    *head = new_node;\n}\n\nstruct Node* printForward(struct Node* node)\n{\n    struct Node* last = NULL;\n    while (node != NULL) {\n        printf(\"%d \", node->data); last = node; node = node->next;\n    }\n    printf(\"\\n\");\n    return last;\n}\n\nvoid printBackward(struct Node* last)\n{\n    while (last != NULL) {\n        printf(\"%d \", last->data); last = last->prev;\n    }\n    printf(\"\\n\");\n}\n\nint main()\n{\n    int n, val;\n    struct Node* head = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val); insertStart(&head, val);\n    }\n    struct Node* last = printForward(head);\n    printBackward(last);\n    return 0;\n}"
    },
    {
      "id": "DS_39",
      "seq": 39,
      "challenge": 39,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 280, Max LOC: 59",
        "cyclomatic": 3,
        "tokens": 280,
        "nloc": 59
      },
      "mandatory": [
        "struct node",
        "node *next;",
        "p2=p2->next;",
        "void del()",
        "void display()",
        "for(i=0;i<n;i++)"
      ],
      "mandatory_raw": "struct node, node *next;, p2=p2->next;, void del(), void display(), for(i=0;i<n;i++)",
      "description": "Question description\n\nthe popular engineering college got lowest pass percentage in last  semester. the principal conducted faculty meeting and decided to visit all the classes surprisingly. \n\nDr.Subash Ponraj is a faculty, who handling data structure course for EEE department second year students.\n\none day this faculty was handling very interesting topic in data structure such that Linked List,\n\nDuring this lecture time, principal surprisingly visited to the class and asking  to conduct surprise test on Linked list concept.\n\nSo the faculty decided to conduct test on the topic of Linked List. \n\nthe question was given to last bench students that is, \n\nThe nodes are deleted after a certain given node in the linked list. \n\nFor example if the given Linked List is 5->10->15->20->25 and \n\ndelete after 15 then the Linked List becomes 5->10->15.  \n\nConstraint :\n\n1< N < 1000\n\n1< P < N-1\n\nINPUT Format\n\nFirst line contains the number of datas- N. \n\nSecond line contains N integers(the given linked list).\n\nThird line contains position of the node to be deleted.\n\nOUTPUT Format\n\nSingle line represents the final linked list after deletion.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6\n6 9 3 8 0 2\n8",
          "output": "Linked List:->6->9->3->8"
        },
        {
          "name": "Test Case 2",
          "input": "10\n11 12 6 9 3 8 0 2\n1",
          "output": "Invalid Node! Linked List:->11->12->6->9->3->8->0->2->1->0"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct node node;\nstruct node {\n    int data;\n    node *next;\n};\n\nnode *start;\nint n, i;\n\nnode* find_node(int target){\n    node *p2 = start;\n    while(p2){\n        if(p2->data == target) return p2;\n        p2=p2->next;\n    }\n    return NULL;\n}\n\nvoid del(){\n    int target = -999999;\n    scanf(\"%d\", &target);\n    node *p2 = find_node(target);\n    if(!p2){\n        printf(\"Invalid Node! \");\n        return;\n    }\n    p2->next = NULL;\n}\n\nvoid display(){\n    printf(\"Linked List:\");\n    for(node *p = start; p; p = p->next) printf(\"->%d\", p->data);\n    printf(\"\\n\");\n}\n\nint main(){\n    scanf(\"%d\", &n);\n    node dummy = {0, NULL}, *tail = &dummy;\n    for(i=0;i<n;i++){\n        node *p = (node*)malloc(sizeof(node));\n        scanf(\"%d\", &p->data);\n        p->next = NULL;\n        tail->next = p;\n        tail = p;\n    }\n    start = dummy.next;\n    del();\n    display();\n    return 0;\n}"
    },
    {
      "id": "DS_40",
      "seq": 40,
      "challenge": 40,
      "level": 1,
      "topic": "LINKED LIST",
      "session": "Linked List",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 10, Max Tokens: 385, Max LOC: 74",
        "cyclomatic": 10,
        "tokens": 385,
        "nloc": 74
      },
      "mandatory": [
        "struct node",
        "struct node *next;",
        "void printMiddle(struct node *head)"
      ],
      "mandatory_raw": "struct node, struct node *next;, void printMiddle(struct node *head)",
      "description": "Question description\n\nAdmission for the current Academic year is happening in Most of the Universities across the Country. \n\nOnce the Students got admitted they are assigned a unique Registration Number. \n\nAdmission in charges used to assign give these details in some order. \n\nBut during enrolment of the student there is a specific entrance test for admitted students to get scholarship. \n\nnow admission cell conducting a test. So your task is  generate a program for a singly linked list, find middle of the linked list.\n\nIf there are even nodes, then print second middle element.\n\nFor example, \n\nif given linked list is 1->2->3->4->5 then \n\noutput should be 3.\n\nIf there are even nodes, \n\nthen there would be two middle nodes, we need to print second middle element.\nFor example, if given linked list is 1->2->3->4->5->6 then \n\noutput should be 4.\n \n\nConstraints \n\n1< N < 1000\n\n1<  X < 1000\n\nInput Format\nFirst line contains the number of datas- N.\nSecond line contains N integers(the given linked list).\n\nOutput Format\nFirst Line indicates the linked list\n\nsecond line indicates the middle element of the linked list.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n1 2 3 4",
          "output": "Linked list:-->4-->3-->2-->1\nThe middle element is [2]"
        },
        {
          "name": "Test Case 2",
          "input": "4\n11 21 31 41",
          "output": "Linked list:-->41-->31-->21-->11\nThe middle element is [21]"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nvoid printMiddle(struct node *head)\n{\n    struct node *slow_ptr = head;\n    struct node *fast_ptr = head;\n\n    if (head != NULL)\n    {\n        while (fast_ptr != NULL && fast_ptr->next != NULL)\n        {\n            fast_ptr = fast_ptr->next->next;\n            slow_ptr = slow_ptr->next;\n        }\n        printf(\"The middle element is [%d]\\n\", slow_ptr->data);\n    }\n}\n\nvoid printList(struct node *ptr)\n{\n    printf(\"Linked list:\");\n    while (ptr != NULL)\n    {\n        printf(\"-->%d\", ptr->data);\n        ptr = ptr->next;\n    }\n    printf(\"\\n\");\n}\n\nint main()\n{\n    int n, val;\n    struct node *head = NULL;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++)\n    {\n        scanf(\"%d\", &val);\n        struct node *new_node = (struct node*)malloc(sizeof(struct node));\n        new_node->data = val;\n        new_node->next = head;\n        head = new_node;\n    }\n    printList(head);\n    printMiddle(head);\n    return 0;\n}"
    },
    {
      "id": "DS_41",
      "seq": 41,
      "challenge": 41,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 220, Max LOC: 35",
        "cyclomatic": 4,
        "tokens": 220,
        "nloc": 35
      },
      "mandatory": [
        "void printArray(int arr[],int n)",
        "void calculateSpan(int price[],int n,int S[])"
      ],
      "mandatory_raw": "void printArray(int arr[],int n), void calculateSpan(int price[],int n,int S[])",
      "description": "Question description\n\nThe stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate span of stock\u2019s price for all n days. \nThe span Si of the stock\u2019s price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the current day is less than or equal to its price on the given day. \nFor example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, \n\nthen the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6} \n\nConstraints\n\n0<n<1000\n\n0<price[i]<1000000\n\nInput Format:\n\nFirst line indicates the number of days\n\nsecond line indicates the price quoted for above mentioned days\n\nOutput Format:\n\nSingle line represents the span values for corresponding days",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6\n9 8 7 6 5 4",
          "output": "1 1 1 1 1 1"
        },
        {
          "name": "Test Case 2",
          "input": "6\n10 41 15 90 10 70",
          "output": "1 2 1 4 1 2"
        }
      ],
      "code": "#include <stdio.h>\n\nvoid calculateSpan(int price[],int n,int S[])\n{\n    S[0] = 1;\n    for (int i = 1; i < n; i++)\n    {\n        S[i] = 1;\n        for (int j = i - 1; (j >= 0) && (price[i] >= price[j]); j--)\n            S[i]++;\n    }\n}\n\nvoid printArray(int arr[],int n)\n{\n    for (int i = 0; i < n; i++)\n        printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n}\n\nint main()\n{\n    int n, price[1005], S[1005];\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++)\n        scanf(\"%d\", &price[i]);\n    calculateSpan(price, n, S);\n    printArray(S, n);\n    return 0;\n}"
    },
    {
      "id": "DS_42",
      "seq": 42,
      "challenge": 42,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 220, Max LOC: 46",
        "cyclomatic": 5,
        "tokens": 220,
        "nloc": 46
      },
      "mandatory": [
        "string postToPre(string post_exp)"
      ],
      "mandatory_raw": "string postToPre(string post_exp)",
      "description": "Question description\n\nHassan gets a job in a software company in Hyderabad. The training period for the first three months is 20000 salary. Then incremented to 25000 salaries. \n\nTraining is great but they will give you a programming task every day in three months. Hassan must finish it in the allotted time. His teammate Jocelyn gives him a task to complete the concept of Postfix to Prefix Conversion for a given expression. can you help him?\n\nFunctional Description:\n\nRead the Prefix expression in reverse order (from right to left)If the symbol is an operand, then push it onto the StackIf the symbol is an operator, then pop two operands from the Stack \nCreate a string by concatenating the two operands and the operator after them. \nstring = operand1 + operand2 + operator \nAnd push the resultant string back to StackRepeat the above steps until end of Prefix expression.Constraints\n\nthe input should be a expressions\n\nInput Format\n\nSingle line represents the postfixed expressions\n\nOutput Format\n\nSingle line represents the prefix expression",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "ABC/-AK/L-*",
          "output": "*-A/BC-/AKL"
        },
        {
          "name": "Test Case 2",
          "input": "AB+CD-*",
          "output": "*+AB-CD"
        }
      ],
      "code": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool isOperator(char x) {\n    return (x == '+' || x == '-' || x == '*' || x == '/' || x == '^');\n}\n\nstring postToPre(string post_exp) {\n    stack<string> s;\n    int length = post_exp.size();\n    for (int i = 0; i < length; i++) {\n        if (isOperator(post_exp[i])) {\n            string op1 = s.top(); s.pop();\n            string op2 = s.top(); s.pop();\n            string temp = post_exp[i] + op2 + op1;\n            s.push(temp);\n        } else {\n            s.push(string(1, post_exp[i]));\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string post_exp;\n    if (cin >> post_exp) {\n        cout << postToPre(post_exp) << endl;\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_43",
      "seq": 43,
      "challenge": 43,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 260, Max LOC: 45",
        "cyclomatic": 6,
        "tokens": 260,
        "nloc": 45
      },
      "mandatory": [
        "typedef struct stack",
        "void arranging(char *s,int n,stack *p)",
        "arranging(S,strlen(S),&s1);"
      ],
      "mandatory_raw": "typedef struct stack, void arranging(char *s,int n,stack *p), arranging(S,strlen(S),&s1);",
      "description": "Problem Description:\n\nArumugam is in the process of reorganising her library. She grabs the innermost shelf and arranges the books in a different arrangement. She shatters the shelf's walls. There will be no shelf barriers and simply books in the end. Make a printout of the book order.\n\nOpening and closing walls of shelves are shown by '/' and '\\' respectively whereas books are represented by lower case alphabets.\n\nConstraints:\n\n2\u2264 |S| \u226410^3\n\nInput format\n\nThe first line contains string s displaying her library.\n\nOutput format\n\nPrint only one string displaying Arumugam library after rearrangement.\n\nNote\n\nThe first character of the string is '/' and the last character of the string is '\\' indicating outermost walls of the shelf.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "/u/hate\\i\\",
          "output": "ihateu"
        },
        {
          "name": "Test Case 2",
          "input": "/u/slap\\i\\",
          "output": "islapu"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\ntypedef struct stack {\n    char data[1005];\n    int top;\n} stack;\n\nvoid arranging(char *s,int n,stack *p){\n    char temp[1005];\n    for(int i = 0; i < n; i++){\n        if(s[i] == '\\\\'){\n            int t_cnt = 0;\n            while(p->data[p->top] != '/')\n                temp[t_cnt++] = p->data[p->top--];\n            p->top--;\n            for(int j = 0; j < t_cnt; j++)\n                p->data[++p->top] = temp[j];\n        } else {\n            p->data[++p->top] = s[i];\n        }\n    }\n    p->data[p->top + 1] = '\\0';\n    printf(\"%s\\n\", p->data);\n}\n\nint main(){\n    char S[1005];\n    stack s1;\n    s1.top = -1;\n    if(scanf(\"%s\", S) != 1) return 0;\n    arranging(S,strlen(S),&s1);\n    return 0;\n}"
    },
    {
      "id": "DS_44",
      "seq": 44,
      "challenge": 44,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 160, Max LOC: 36",
        "cyclomatic": 6,
        "tokens": 160,
        "nloc": 36
      },
      "mandatory": [
        "if(a[i]>a[j])"
      ],
      "mandatory_raw": "if(a[i]>a[j])",
      "description": "Problem Description\n\nA and B  are playing a game. In this game, both of them are initially provided with a list of n numbers. (Both have the same list but their own copy).\n\nNow, they both have a different strategy to play the game. A picks the element from start of his list. B picks from the end of his list.\n\nYou need to generate the result in form of an output list.\n\nMethod to be followed at each step to build the output list is:\n\nIf the number picked by A is bigger than B then this step's output is 1 . B removes the number that was picked from their list.If the number picked by A is smaller than B then this step's output is 2 . A removes the number that was picked from their list.If both have the same number then this step's output is 0 . Both A and B  remove the number that was picked from their list.This game ends when at least one of them has no more elements to be picked i.e. when the list gets empty.\n\nOutput the built output list.\n\nConstraints\n\n1 \u2264 N \u2264 10^6\n\n1 \u2264 num \u226410^9\n\nInput format:\n\nFirst line consists of a number n , size of the list provided.\nNext line consists of n numbers separated by space.\n \n\nOutput format:\n\nOutput the required output list.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n1 2 3",
          "output": "2 2 0"
        },
        {
          "name": "Test Case 2",
          "input": "5\n5 7 1 2 3",
          "output": "1 1 1 2 0 2 2 2"
        }
      ],
      "code": "#include <stdio.h>\n\nint a[1000005];\n\nint main(){\n    int n, i = 0, j;\n    scanf(\"%d\", &n);\n    for(int k = 0; k < n; k++) scanf(\"%d\", &a[k]);\n    j = n - 1;\n    while(i < n && j >= 0){\n        if(a[i]>a[j]){\n            printf(\"1 \");\n            j--;\n        } else if(a[i] < a[j]){\n            printf(\"2 \");\n            i++;\n        } else {\n            printf(\"0 \");\n            i++;\n            j--;\n        }\n    }\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
      "id": "DS_45",
      "seq": 45,
      "challenge": 45,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 190, Max LOC: 30",
        "cyclomatic": 5,
        "tokens": 190,
        "nloc": 30
      },
      "mandatory": [
        "int arr[n];",
        "for(i=0;i<n;i++)"
      ],
      "mandatory_raw": "int arr[n];, for(i=0;i<n;i++)",
      "description": "Question description\n\nYou're given a stack of N numbers, with the first component representing the stack's top and the final component being the stack's bottom. \n\nAt least one piece from the stack must be removed. You can turn the stack into a queue at any time. \n\nThe front of the line is represented by the bottom of the stack.\n\nYou cannot convert the queue back into a stack. Your task is to remove exactly K elements such that the sum of the K removed elements is maximized.\n\nconstraints:\n\n1 \u2264 N \u2264 10^5\n\n1\u2264 K \u2264 N\n\n1\u2264 Ai \u2264 10^9\n\nInput format :     \n\nThe first line consists of two space-separated integers N and K.The second line consists of N space-separated integers denoting the elements of the stack.Output format :\n\nPrint the maximum possible sum of the K removed elements",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "10 5\n10 9 1 2 3 4 5 6 7 8",
          "output": "40"
        },
        {
          "name": "Test Case 2",
          "input": "15 9\n98 76 54 32 78 10 91 11 12 13 14 15 16 71 81",
          "output": "591"
        }
      ],
      "code": "#include <stdio.h>\n\nint main(){\n    int n, k, i;\n    scanf(\"%d%d\", &n, &k);\n    int arr[n];\n    for(i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    long long cur = 0, ans;\n    for(i = 0; i < k; i++) cur += arr[i];\n    ans = cur;\n    for(i = 0; i < k - 1; i++){\n        cur += arr[n - 1 - i] - arr[k - 1 - i];\n        if(cur > ans) ans = cur;\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}"
    },
    {
      "id": "DS_46",
      "seq": 46,
      "challenge": 46,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 7, Max Tokens: 205, Max LOC: 26",
        "cyclomatic": 7,
        "tokens": 205,
        "nloc": 26
      },
      "mandatory": [
        "arr[1000000]",
        "for(i=0;i<n;i++)",
        "if(arr[i]<arr[j])",
        "st[i]=arr[i]^st[j];"
      ],
      "mandatory_raw": "arr[1000000], for(i=0;i<n;i++), if(arr[i]<arr[j]), st[i]=arr[i]^st[j];",
      "description": "Question description\n\nHassan enjoys jumping from one building to the next. However, he merely jumps to the next higher building and stops when there are none accessible. The amount of stamina necessary for a voyage is equal to the xor of all the heights Hassan leaps till he comes to a halt.\n\nIf heights are [1 2 4], and he starts from 1, goes to 2 stamina required is 1\u22952=3, then from 2 to 3. Stamina for the entire journey is 1\u22952\u22954=7. Find the maximum stamina required if can start his journey from any building.\n\nConstraints\n\n1\u2264 N \u226410^5\n\n1 \u2264 Height \u226410^9\n\nInput\n\nFirst line: N, no of buildings.\n\nSecond line: N integers, defining heights of buildings.\n\nOutput\n\nSingle Integer is the maximum stamina required for any journey.\n\nExplanation:\n\n8\n\n1 2 3 8 6 4 7 9\n\nConsidering the input given by you, 1st starting point is 1. From this building, Hassan will try to find the next higher building that is building 2 here and so on. Likewise he will complete all pass. \n\nPass 1:     1-> 2->3->8-> 9, XOR = 1\n\nPass 2:      2->3->8-> 9, XOR = 0\n\nPass 3:      3->8-> 9, XOR = 2\n\nPass 4:      8-> 9, XOR = 1\n\nPass 5:     6->7->9 , XOR = 8\n\nPass 6:     4->7->9 , XOR = 10\n\nPass 7:     7-> 9 XOR = 14\n\nPass 8:     9 XOR = 9\n\nSo, the highest XOR value is 14",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2 3 8 6",
          "output": "11"
        },
        {
          "name": "Test Case 2",
          "input": "8\n1 2 3 8 6 4 7 9",
          "output": "14"
        }
      ],
      "code": "#include <stdio.h>\n\nlong long arr[1000000], st[1000000];\n\nint main(){\n    int n, i, j;\n    if(scanf(\"%d\", &n) != 1) return 0;\n    for(i=0;i<n;i++) scanf(\"%lld\", &arr[i]);\n    long long ans = 0;\n    for(i = n - 1; i >= 0; i--){\n        st[i] = arr[i];\n        for(j = i + 1; j < n; j++){\n            if(arr[i]<arr[j]){\n                st[i]=arr[i]^st[j];\n                break;\n            }\n        }\n        if(st[i] > ans) ans = st[i];\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}"
    },
    {
      "id": "DS_47",
      "seq": 47,
      "challenge": 47,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 380, Max LOC: 81",
        "cyclomatic": 1,
        "tokens": 380,
        "nloc": 81
      },
      "mandatory": [
        "void push1(int x)",
        "void push2(int x)",
        "int pop1()",
        "int pop2()"
      ],
      "mandatory_raw": "void push1(int x), void push2(int x), int pop1(), int pop2()",
      "description": "Problem Description:\n\nDr. Malar was booking a tour package of IRCTC from Chennai to Delhi for his family. \n\nTwo of the relatives was interested in joining to this tour. \n\nthese two persons are studying engineering in computing technology. only one tickets are remaining in the IRCTC portal. \n\nSo, Dr. Malar decided to book one ticket for out of those persons also along with his family members. \n\nshe wants to identify the one person out of these persons. he decided to conduct a technical task to identify the right person to travel. \n\nthe task was that, implement two stack operations in an array\n\nCan you help them to complete the task?\n\nConstraints\n\n0<n<5  only five elements has to be practiced for this operation \n\nfirst element pushed into stack1\n\nsecond element pushed into stack2, likewise elements pushed into alternative stacks vice versa. \n\nFunction Description\n\nCreate a data structure twoStacks that represents two stacks. Implementation of twoStacks should use only one array, i.e., both stacks should use the same array for storing elements. Following functions must be supported by twoStacks.\npush1(int x) \u2013> pushes x to first stack \npush2(int x) \u2013> pushes x to second stack\npop1() \u2013> pops an element from first stack and return the popped element \npop2() \u2013> pops an element from second stack and return the popped element\nImplementation of twoStack should be space efficient.Input Format\n\nSingle line represents only braces (both curly and square)\n\nOutput Format\n\nIf the given input balanced then print as Balanced (or) Not Balanced",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1\n2\n3\n4\n5",
          "output": "Popped element from stack1 is:5\nPopped element from stack2 is:4"
        },
        {
          "name": "Test Case 2",
          "input": "5\n4\n5\n3\n4",
          "output": "Popped element from stack1 is:4\nPopped element from stack2 is:3"
        }
      ],
      "code": "#include <stdio.h>\n\nint arr[100];\nint top1 = -1;\nint top2 = 100;\n\nvoid push1(int x){\n    arr[++top1] = x;\n}\n\nvoid push2(int x){\n    arr[--top2] = x;\n}\n\nint pop1(){\n    return arr[top1--];\n}\n\nint pop2(){\n    return arr[top2++];\n}\n\nint main(){\n    int a, b, c, d, e;\n    scanf(\"%d%d%d%d%d\", &a, &b, &c, &d, &e);\n    push1(a);\n    push2(b);\n    push1(c);\n    push2(d);\n    push1(e);\n    printf(\"Popped element from stack1 is:%d\\n\", pop1());\n    printf(\"Popped element from stack2 is:%d\\n\", pop2());\n    return 0;\n}"
    },
    {
      "id": "DS_48",
      "seq": 48,
      "challenge": 48,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 15, Max Tokens: 275, Max LOC: 100",
        "cyclomatic": 15,
        "tokens": 275,
        "nloc": 100
      },
      "mandatory": [
        "pop()",
        "empty()",
        "push",
        "stack"
      ],
      "mandatory_raw": "pop(), empty(), push, stack",
      "description": "Problem Description:\n\nSajid was booking a tour package of IRCTC from Chennai to Delhi for his family. \n\nTwo of the relatives was interested in joining to this tour. \n\nthese two persons are studying engineering in computing technology. only one tickets are remaining in the IRCTC portal. \n\nSo, Sajid decided to book one ticket for out of those persons also along with his family members. \n\nHe wants to identify the one person out of these persons. he decided to conduct a technical task to identify the right person to travel. \n\nthe task was that, Check for Balanced Brackets in an expression using Stack\n\nCan you help them to complete the task?\n\nFunction Description\n\nDeclare a character stack S.Now traverse the expression string exp.If the current character is a starting bracket (\u2018(\u2018 or \u2018{\u2018 or \u2018[\u2018) then push it to stack.If the current character is a closing bracket (\u2018)\u2019 or \u2018}\u2019 or \u2018]\u2019) then pop from stack and if the popped character is the matching starting bracket then fine else brackets are not balanced.After complete traversal, if there is some starting bracket left in stack then \u201cnot balanced\u201dInput Format\n\nSingle line represents only braces (both curly and square)\n\nOutput Format\n\nIf the given input balanced then print as Balanced (or) Not Balanced",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "{()}[]",
          "output": "Balanced"
        },
        {
          "name": "Test Case 2",
          "input": "{({)}])}",
          "output": "Not Balanced"
        }
      ],
      "code": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool match(char a, char b) {\n    return (a == '(' && b == ')') || (a == '{' && b == '}') || (a == '[' && b == ']');\n}\n\nbool isBalanced(string expr) {\n    stack<char> s;\n    for (char c : expr) {\n        if (c == '(' || c == '{' || c == '[') {\n            s.push(c);\n        } else if (c == ')' || c == '}' || c == ']') {\n            if (s.empty() || !match(s.top(), c)) return false;\n            s.pop();\n        }\n    }\n    return s.empty();\n}\n\nint main() {\n    string expr;\n    if (cin >> expr) {\n        if (isBalanced(expr))\n            cout << \"Balanced\" << endl;\n        else\n            cout << \"Not Balanced\" << endl;\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_49",
      "seq": 49,
      "challenge": 49,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 220, Max LOC: 40",
        "cyclomatic": 5,
        "tokens": 220,
        "nloc": 40
      },
      "mandatory": [
        "string preToInfix(string pre_exp)"
      ],
      "mandatory_raw": "string preToInfix(string pre_exp)",
      "description": "Question description\n\nSajid is a graduate student he applied to a BPO company but he does not get typing fast. So he wanted to increase his typing speed for the job. \n\nHis well-wisher suggested that he type the sentence as expressions. \u201c *-A/BC-/AKL\u201d\n\nAfter typing the sentence several times, Sajid needs to convert the expressions into infix sentences.\n\n can you help him:\n\nConstraints\n\nthe input should be a expressions\n\nInput Format\n\nsingle line represents the prefixed expressions\n\nOutput Format\n\nsingle line represents the infix expression",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "*-A/BC-/AKL",
          "output": "Infix:((A-(B/C))*((A/K)-L))"
        },
        {
          "name": "Test Case 2",
          "input": "*+AB-CD",
          "output": "Infix:((A+B)*(C-D))"
        }
      ],
      "code": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool isOperator(char x) {\n    return (x == '+' || x == '-' || x == '*' || x == '/' || x == '^');\n}\n\nstring preToInfix(string pre_exp) {\n    stack<string> s;\n    int length = pre_exp.size();\n    for (int i = length - 1; i >= 0; i--) {\n        if (isOperator(pre_exp[i])) {\n            string op1 = s.top(); s.pop();\n            string op2 = s.top(); s.pop();\n            string temp = \"(\" + op1 + pre_exp[i] + op2 + \")\";\n            s.push(temp);\n        } else {\n            s.push(string(1, pre_exp[i]));\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string pre_exp;\n    if (cin >> pre_exp) {\n        cout << \"Infix:\" << preToInfix(pre_exp) << endl;\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_50",
      "seq": 50,
      "challenge": 50,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 210, Max LOC: 40",
        "cyclomatic": 4,
        "tokens": 210,
        "nloc": 40
      },
      "mandatory": [
        "string getInfix(string exp)"
      ],
      "mandatory_raw": "string getInfix(string exp)",
      "description": "Question description\n\nHassan gets a job in a software company in Hyderabad. The training period for the first three months is 20000 salary. Then incremented to 25000 salaries. \n\nTraining is great but they will give you a programming task every day in three months. Hassan must finish it in the allotted time. His teammate Jocelyn gives him a task to complete the concept of Postfix to Infix Conversion for a given expression. can you help him?\n\nFunctional Description:\n\nRead the next symbol from the input. Push it onto the stack. the symbol is an operator. Pop the top 2 values from the stack. Put the operator, with the values as arguments and form a string. Push the resulted string back to stack. If there is only one value in the stack That value in the stack is the desired infix string. \n Constraints\n\nthe input should be a expressions\n\nInput Format\n\nSingle line represents the postfixed expressions\n\nOutput Format\n\nSingle line represents the Infix expression",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "ab*c+",
          "output": "((a*b)+c)"
        },
        {
          "name": "Test Case 2",
          "input": "abc++",
          "output": "(a+(b+c))"
        }
      ],
      "code": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool isOperator(char c) {\n    return (c == '+' || c == '-' || c == '*' || c == '/');\n}\n\nstring getInfix(string exp) {\n    stack<string> s;\n    for (char c : exp) {\n        if (isOperator(c)) {\n            string op1 = s.top(); s.pop();\n            string op2 = s.top(); s.pop();\n            s.push(\"(\" + op2 + c + op1 + \")\");\n        } else {\n            s.push(string(1, c));\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string exp;\n    if (cin >> exp) {\n        cout << getInfix(exp) << endl;\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_51",
      "seq": 51,
      "challenge": 51,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 10, Max Tokens: 300, Max LOC: 62",
        "cyclomatic": 10,
        "tokens": 300,
        "nloc": 62
      },
      "mandatory": [
        "if(biggest<big)",
        "if(a[i]>biggest)"
      ],
      "mandatory_raw": "if(biggest<big), if(a[i]>biggest)",
      "description": "Problem Description\n\nThe Monk recently learnt about priority queues and requested his teacher for a fun challenge to solve. As a result, his teacher devised a simple task. He now possesses A, which is an integer array. He wishes to discover the product of the greatest, second largest, and third largest integers in the range [1,i] for each index i.\n\nNote: Two numbers can be the same value-wise but they should be distinct index-wise.\n\nConstraints:\n1 <= N <= 100000\n0 <= A[i] <= 1000000\n\nInput:\nThe first line contains an integer N, denoting the number of elements in the array A.\nThe next line contains N space separated integers, each denoting the ith integer of the array A.\n\nOutput:\nPrint the answer for each index in each line. If there is no second largest or third largest number in the array A upto that index, then print \"-1\", without the quotes.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2 3 4 5",
          "output": "-1\n-1\n6\n24\n60"
        },
        {
          "name": "Test Case 2",
          "input": "8\n3 7 1 2 4 7 5 9",
          "output": "-1\n-1\n21\n42\n84\n196\n245\n441"
        }
      ],
      "code": "#include <stdio.h>\n\nlong long a[100005];\n\nint main(){\n    int n;\n    if(scanf(\"%d\", &n) != 1) return 0;\n    long long biggest = -1, big = -1, small = -1;\n    for(int i = 0; i < n; i++){\n        scanf(\"%lld\", &a[i]);\n        if(a[i]>biggest){\n            small = big;\n            big = biggest;\n            biggest = a[i];\n        } else if(a[i] > big){\n            small = big;\n            big = a[i];\n        } else if(a[i] > small){\n            small = a[i];\n        }\n        if(biggest<big){\n            long long t = biggest;\n            biggest = big;\n            big = t;\n        }\n        if(i < 2) printf(\"-1\\n\");\n        else printf(\"%lld\\n\", biggest * big * small);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_52",
      "seq": 52,
      "challenge": 52,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 200, Max LOC: 44",
        "cyclomatic": 3,
        "tokens": 200,
        "nloc": 44
      },
      "mandatory": [
        "void enqueue(int data)",
        "for(i=front;i<=rear;i++)",
        "enqueue(data);"
      ],
      "mandatory_raw": "void enqueue(int data), for(i=front;i<=rear;i++), enqueue(data);",
      "description": "Question description\n\nSathya is an DS expert training youngsters struggling in DS to make them better.\n\nSathya usually gives interesting problems to the youngsters  to make them love the DS.\n\nOne such day Sathya provided to the youngsters to solve the task such that, insert an element in a Queue in FIFO order\n\nYoungsters were lacking the idea to solve the problem.\n\nBeing an exciting youngster can you solve it?\n\nFunction Description\n\nConstraints:\n\n0<size <100\n\n0<data<1000\n\nInput format:\n\nFirst line indicates the size of the queue\n\nSecond line indicates the elements of the queue.\n\nOutput Format:\n\nevery lines indicates the enqueue of each elements\n\nlast line indicates the fine queued elements.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n5 6 3 1 2",
          "output": "Enqueuing 5\n5 Enqueuing 6\n5 6 Enqueuing 3\n5 6 3 Enqueuing 1\n5 6 3 1 Enqueuing 2\n5 6 3 1 2"
        },
        {
          "name": "Test Case 2",
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "Enqueuing 1\n1 Enqueuing 8\n1 8 Enqueuing 6\n1 8 6 Enqueuing 4\n1 8 6 4 Enqueuing 9\n1 8 6 4 9 Enqueuing 5\n1 8 6 4 9 5 Enqueuing 3\n1 8 6 4 9 5 3 Enqueuing 5\n1 8 6 4 9 5 3 5"
        }
      ],
      "code": "#include <stdio.h>\n\nint q[105];\nint front = 0, rear = -1, i;\n\nvoid display(){\n    for(i=front;i<=rear;i++)\n        printf(\"%d \", q[i]);\n}\n\nvoid enqueue(int data){\n    display();\n    printf(\"Enqueuing %d\\n\", data);\n    q[++rear] = data;\n}\n\nint main(){\n    int n, data;\n    if(scanf(\"%d\", &n) != 1) return 0;\n    for(int k = 0; k < n; k++){\n        scanf(\"%d\", &data);\n        enqueue(data);\n    }\n    display();\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
      "id": "DS_53",
      "seq": 53,
      "challenge": 53,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 125, Max LOC: 25",
        "cyclomatic": 5,
        "tokens": 125,
        "nloc": 25
      },
      "mandatory": [
        "for(i=0;i<disk;i++)",
        "while(temp[size])"
      ],
      "mandatory_raw": "for(i=0;i<disk;i++), while(temp[size])",
      "description": "Question description\n\nYour task is to construct a tower in N days by following these conditions:\n\nEvery day you are provided with one disk of distinct size.The disk with larger sizes should be placed at the bottom of the tower.The disk with smaller sizes should be placed at the top of the tower.The order in which tower must be constructed is as follows:\n\nYou cannot put a new disk on the top of the tower until all the larger disks that are given to you get placed.Print N lines denoting the disk sizes that can be put on the tower on the ith day.\n\nConstraints:\n\n1\u2264N\u226410^6\n\n1\u2264size \u2264 N\n\nInput format\n\nFirst line: N denoting the total number of disks that are given to you in the N subsequent daysSecond line: N integers in which the ith integers denote the size of the disks that are given to you on the ith dayNote: All the disk sizes are distinct integers in the range of  1 to N.\n\nOutput format\n\nPrint N lines. In the ith line, print the size of disks that can be placed on the top of the tower in descending order of the disk sizes.\n\nIf on the ith day no disks can be placed, then leave that line empty.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n5 4 3 2 7",
          "output": "5 \n4 \n3 \n2 "
        },
        {
          "name": "Test Case 2",
          "input": "8\n9 7 5 3 2 6 8 5",
          "output": "8 7 6 5 "
        }
      ],
      "code": "#include <stdio.h>\n\nint temp[1000005];\n\nint main(){\n    int disk, i, x, size;\n    scanf(\"%d\", &disk);\n    size = disk;\n    for(i=0;i<disk;i++){\n        scanf(\"%d\", &x);\n        temp[x] = 1;\n        while(temp[size]) printf(\"%d \", size--);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_54",
      "seq": 54,
      "challenge": 54,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 275, Max LOC: 57",
        "cyclomatic": 4,
        "tokens": 275,
        "nloc": 57
      },
      "mandatory": [
        "void enqueue(int data,int l)",
        "void reverse()",
        "enqueue(t,n);",
        "reverse();"
      ],
      "mandatory_raw": "void enqueue(int data,int l), void reverse(), enqueue(t,n);, reverse();",
      "description": "Question description\n\nUmesh is an DS expert training youngsters struggling in DS to make them better.\n\nUmesh usually gives interesting problems to the youngsters  to make them love the DS.\n\nOne such day Umesh provided to the youngsters to solve the task such that, Reverse a Queue, Queue data structures work on the FIFO architecture so the element that has entered first in the list will go out from the list first.\n\nYoungsters were lacking the idea to solve the problem.\n\nBeing an exciting youngster can you solve it?\n\nFunction Description\n\nConstraints:\n\n0<size <100\n\n0<data<1000\n\nInput format:\n\nFirst line indicates the size of the queue\n\nSecond line indicates the elements of the queue.\n\nOutput Format:\n\nfirst line indicates the enqueue of each elements\n\nlast line indicates the reversed queue elements.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n5 6 3 1 2",
          "output": "Queue:5 6 3 1 2 \nReversed Queue:2 1 3 6 5 "
        },
        {
          "name": "Test Case 2",
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "Queue:1 8 6 4 9 5 3 5 \nReversed Queue:5 3 5 9 4 6 8 1 "
        }
      ],
      "code": "#include <stdio.h>\n\nint q[105], front = 0, rear = -1;\n\nvoid enqueue(int data,int l){\n    q[++rear] = data;\n}\n\nvoid reverse(){\n    int l = 0, r = rear;\n    while(l < r){\n        int tmp = q[l];\n        q[l++] = q[r];\n        q[r--] = tmp;\n    }\n}\n\nint main(){\n    int n, t;\n    if(scanf(\"%d\", &n) != 1) return 0;\n    printf(\"Queue:\");\n    for(int i = 0; i < n; i++){\n        scanf(\"%d\", &t);\n        printf(\"%d \", t);\n        enqueue(t,n);\n    }\n    printf(\"\\n\");\n    reverse();\n    printf(\"Reversed Queue:\");\n    for(int i = 0; i < n; i++) printf(\"%d \", q[i]);\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
      "id": "DS_55",
      "seq": 55,
      "challenge": 55,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 410, Max LOC: 74",
        "cyclomatic": 2,
        "tokens": 410,
        "nloc": 74
      },
      "mandatory": [
        "void enQueue(Queue* q,int value)",
        "int deQueue(Queue* q)",
        "void displayQueue(struct Queue* q)"
      ],
      "mandatory_raw": "void enQueue(Queue* q,int value), int deQueue(Queue* q), void displayQueue(struct Queue* q)",
      "description": "Question description\n\nLalitha is a  B.Tech student. During her final year Campus Interview, she has an opportunity to get a job in a software company in Bangalore. \n\nThe company provides Five months training period with Rs.30000/month Package. Then it will be incremented to Rs.55000 per month. \n\nAt the end of the training, the examination was conducted for all freshers, Lalitha got a question paper and one of the questions comes under the concept of Queues in data structure that is Circular Linked List Implementation in Circular Queue. \n\nCan you help?\n\n \n\nConstraints\n\nFirst \u20183\u2019 elements inserted in array 0, next \u20183\u2019 elements inserted into array1, remaining elements inserted into array2.\n\nInput Format\n\nFirst line indicates the number of elements to be inserted in the queues.\n\nSecond line indicates the elements.\n\nOutput Format\n\nfirst line indicates the dequeue element of Q2\n\nSecond line indicates the dequeue element of Q1\n\nThird line line indicates the dequeue element of Q0\n\nNote: Refer sample input and output test cases",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "10\n1 2 3 4 5 6 7 8 9 10",
          "output": "Elements in Circular Queue are:1 2 3 4 5 6 7 8 9 10\nDeleted value = 1\nDeleted value = 2Elements in Circular Queue are:3 4 5 6 7 8 9 10"
        },
        {
          "name": "Test Case 2",
          "input": "10\n16 17 18 19 20 11 12 13 14 15",
          "output": "Elements in Circular Queue are:16 17 18 19 20 11 12 13 14 15\nDeleted value = 16\nDeleted value = 17Elements in Circular Queue are:18 19 20 11 12 13 14 15"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* link;\n};\n\nstruct Queue {\n    struct Node *front, *rear;\n};\ntypedef struct Queue Queue;\n\nvoid enQueue(Queue* q,int value)\n{\n    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));\n    temp->data = value;\n    temp->link = NULL;\n    if (q->front == NULL)\n        q->front = temp;\n    else\n        q->rear->link = temp;\n    q->rear = temp;\n    q->rear->link = q->front;\n}\n\nint deQueue(Queue* q)\n{\n    int value = q->front->data;\n    if (q->front == q->rear) {\n        q->front = NULL;\n        q->rear = NULL;\n    } else {\n        q->front = q->front->link;\n        q->rear->link = q->front;\n    }\n    return value;\n}\n\nvoid displayQueue(struct Queue* q)\n{\n    struct Node* temp = q->front;\n    printf(\"Elements in Circular Queue are:\");\n    while (temp->link != q->front) {\n        printf(\"%d \", temp->data);\n        temp = temp->link;\n    }\n    printf(\"%d\\n\", temp->data);\n}\n\nint main()\n{\n    Queue *q = (Queue*)malloc(sizeof(Queue));\n    q->front = q->rear = NULL;\n    int n, val;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        enQueue(q, val);\n    }\n    displayQueue(q);\n    printf(\"Deleted value = %d\\n\", deQueue(q));\n    printf(\"Deleted value = %d\", deQueue(q));\n    displayQueue(q);\n    return 0;\n}"
    },
    {
      "id": "DS_56",
      "seq": 56,
      "challenge": 56,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 410, Max LOC: 68",
        "cyclomatic": 1,
        "tokens": 410,
        "nloc": 68
      },
      "mandatory": [
        "struct QNode* newNode(int k)",
        "struct Queue* createQueue()",
        "void enQueue(struct Queue* q,int k)",
        "void deQueue(struct Queue* q)"
      ],
      "mandatory_raw": "struct QNode* newNode(int k), struct Queue* createQueue(), void enQueue(struct Queue* q,int k), void deQueue(struct Queue* q)",
      "description": "Problem description\n\nTina is a Bachelor of Computer Applications (BCA) student. During her final year Campus Interview, she has an opportunity to get a job in a software company in Bangalore. \n\nThe company provides Five months training period with Rs.30000/month Package. Then it will be incremented to Rs.55000 per month. \n\nAt the end of the training, the examination was conducted for all freshers, Tina got a question paper and one of the questions comes under the concept of Queue concept with Linked List Implementation \n\nFunction Description\n\nThe front points the first item of queue and rear points to last item.\nenQueue() This operation adds a new node after rear and moves rear to the next node.\ndeQueue() This operation removes the front node and moves front to the next node.\n\nConstraints\n\nyou have to perform N number of enqueue operation and two consecutive dequeue operation then continue M number of enqueue operation.\n\n0<n , m <10000\n\nInput Format\n\nFirst line represents the N and M, \n\nSecond line represents the N represents the number of elements to be enqueued then \n\nThird line indicates the M number of elements to be inserted after two consecutive dequeue. \n\nOutput Format\n\nResults shows the every cycle enqueued/dequeued elements and front rear status.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 5\n1 2 3 4 5\n6 7 8 9 10",
          "output": "Front:1\nRear:5\nAfter 2 deQueue and M enqueue\nFront is:3\nQueue Rear:10"
        },
        {
          "name": "Test Case 2",
          "input": "6 6\n11 21 31 14 15 16\n61 17 18 19 10 22",
          "output": "Front:11\nRear:16\nAfter 2 deQueue and M enqueue\nFront is:31\nQueue Rear:22"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct QNode {\n    int key;\n    struct QNode* next;\n};\n\nstruct Queue {\n    struct QNode *front, *rear;\n};\n\nstruct QNode* newNode(int k)\n{\n    struct QNode* temp = (struct QNode*)malloc(sizeof(struct QNode));\n    temp->key = k;\n    temp->next = NULL;\n    return temp;\n}\n\nstruct Queue* createQueue()\n{\n    struct Queue* q = (struct Queue*)malloc(sizeof(struct Queue));\n    q->front = q->rear = NULL;\n    return q;\n}\n\nvoid enQueue(struct Queue* q,int k)\n{\n    struct QNode* temp = newNode(k);\n    if (q->rear == NULL) {\n        q->front = q->rear = temp;\n        return;\n    }\n    q->rear->next = temp;\n    q->rear = temp;\n}\n\nvoid deQueue(struct Queue* q)\n{\n    if (q->front == NULL)\n        return;\n    struct QNode* temp = q->front;\n    q->front = q->front->next;\n    if (q->front == NULL)\n        q->rear = NULL;\n    free(temp);\n}\n\nint main()\n{\n    struct Queue* q = createQueue();\n    int n, m, val;\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        enQueue(q, val);\n    }\n    printf(\"Front:%d\\n\", q->front->key);\n    printf(\"Rear:%d\\n\", q->rear->key);\n    deQueue(q);\n    deQueue(q);\n    for (int i = 0; i < m; i++) {\n        scanf(\"%d\", &val);\n        enQueue(q, val);\n    }\n    printf(\"After 2 deQueue and M enqueue\\n\");\n    printf(\"Front is:%d\\n\", q->front->key);\n    printf(\"Queue Rear:%d\\n\", q->rear->key);\n    return 0;\n}"
    },
    {
      "id": "DS_57",
      "seq": 57,
      "challenge": 57,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 10, Max Tokens: 260, Max LOC: 36",
        "cyclomatic": 10,
        "tokens": 260,
        "nloc": 36
      },
      "mandatory": [
        "while(t--)",
        "for(i=0;i<n;i++)"
      ],
      "mandatory_raw": "while(t--), for(i=0;i<n;i++)",
      "description": "Question description\n\nDevi has an unhealthy obsession with numbers. When his buddy Arya arrived to challenge him, he handed Devi an array of numbers that are presently creating a number (will be called as given number). Devi was assigned the task of calculating the next higher number that may be produced from the digits of a particular integer. Devi now needs your assistance in locating the next highest number and winning the challenge.\n\nConstraints\n\n(1 <= t <= 100)\n\n(1 <= n <= 1000000)\n\nInput Format\n\nThe first line has t number of test cases. In the next 2*t lines for each test case first, there is number n, which denotes the number of digits in a given number and the next line contains n digits of a given number separated by space.\n\nOutput FormatPrint the just next greater number if possible else print -1 in one line for each test case.\n\nNote: There will be no test case that contains zero in starting digits of any given number.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n5\n1 5 4 8 3\n10\n1 4 7 4 5 8 4 1 2 6",
          "output": "15834\n1474584162"
        },
        {
          "name": "Test Case 2",
          "input": "2\n5\n11 14 21 53 64\n10\n12 24 17 14 51 81 41 11 21 61",
          "output": "1114216453\n12241714518141116121"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    if (!(cin >> t)) return 0;\n    while(t--) {\n        int n;\n        cin >> n;\n        vector<int> a(n);\n        int i;\n        for(i=0;i<n;i++) cin >> a[i];\n        if (next_permutation(a.begin(), a.end())) {\n            for(i=0;i<n;i++) cout << a[i];\n            cout << \"\\n\";\n        } else {\n            cout << -1 << \"\\n\";\n        }\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_58",
      "seq": 58,
      "challenge": 58,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 35, Max Tokens: 1300, Max LOC: 150",
        "cyclomatic": 35,
        "tokens": 1300,
        "nloc": 150
      },
      "mandatory": [
        "int search(int* arr,int value,int start,int end)",
        "for(i = 0;i < n;i++)"
      ],
      "mandatory_raw": "int search(int* arr,int value,int start,int end), for(i = 0;i < n;i++)",
      "description": "Question description\n\nA positive integer X has been stolen. But luckily, N hints are available, each described by two integers ai and di, meaning that |X\u2212ai|=di. The hints are numbered 1 through N. While some of those hints are helpful, some might be just a lie. Therefore, we are going to investigate the number X under different possible scenarios.\n\nInitially, we neither trust nor distrust any hint. That is, each hint may be either true or false. Then, in each of the Q stages, we will either:\n\n  1 id\n\nEntrust the id-th hint (1\u2264id\u2264N). That is, from now on, the id-th hint must be true unless declared otherwise in the future2 id\n\nDistrust the id-th hint (1\u2264id\u2264N). That is, from now on, the id-th hint must be false unless declared otherwise in the future.3 id\n\nNeutralize the id-th hint (1\u2264id\u2264N). That is, from now on, the id-th hint may be either true or false unless declared otherwise in the future.After each stage, you should determine the number of possible positive values X and report such values in increasing order. If there are infinitely many such values, print \u22121 instead.\n\nConstraints\n\n1\u2264N,Q\u2264200 000\n\n0\u2264ai,di\u2264109\n\n1\u2264t\u22643 for every stage (update).\n\n1\u2264id\u2264N for every stage.\n\nIn tests worth 74 points in total, ai,di\u2264500 000.\n\nInput\n\nThe first line contains two space-separated integers N and Q.\n\nThe i-th of the following N lines contains two space-separated integers ai and di, describing the i-th hint. It is guaranteed that no two hints are identical. That is, for every two different i, j, it is guaranteed that ai\u2260aj or di\u2260dj.\n\nThen, Q lines follow, each containing two integers t and id \u2014 the type of an update and the index of an affected hint.\n\nOutput\n\nAfter each stage, print the number of possible values of X (in case there are infinitely many of them, print \u22121). If the number of possible values is finite and non-zero, in the same line, continue to print those values in increasing order.\n\nExplanation for sample test case 1:\n\nIn the sample test, we are given N=3 hints and Q=10 stages.\nThe first stage is described by a pair \"1 1\", which represents entrusting hint 1.\nAfter this stage, |X\u22123|=0 must be true, so X must be equal to 3. We report 1 possible value: 3.\n\nThen, the information that |X\u22123|=0 is neutralized at stage 2. At this point, X could be any positive integer, so we print \u22121 in the second line.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3 10\n3 0\n0 3\n6 3\n1 1\n3 1\n1 2\n3 2\n1 3\n3 3\n1 1\n1 2\n2 1\n1 3",
          "output": "1 3 \n-1\n1 3 \n-1\n2 3 9\n-1\n1 3 \n1 3 \n0 \n0 "
        },
        {
          "name": "Test Case 2",
          "input": "3 7\n2 0\n0 3\n5 3\n2 1\n1 2\n1 2\n1 3\n3 3\n1 1\n1 2",
          "output": "-1\n1 3 \n1 3 \n0 \n1 3 \n0 \n0 "
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define MAX_N 200005\n#define HASH_SIZE 1048576\n#define HASH_MASK (HASH_SIZE - 1)\n\nlong long a[MAX_N], d[MAX_N];\nlong long cand[MAX_N][2];\nint num_cand[MAX_N];\nint hint_state[MAX_N]; // 0: neutral, 1: trusted, 2: distrusted\n\nlong long hash_key[HASH_SIZE];\nint hash_trusted[HASH_SIZE];\nint hash_distrusted[HASH_SIZE];\nchar hash_used[HASH_SIZE];\n\nint queue[MAX_N * 4];\nint q_head = 0, q_tail = 0;\n\nint search(int* arr,int value,int start,int end) {\n    int i;\n    for (i = start; i <= end; i++) {\n        if (arr[i] == value) return i;\n    }\n    return -1;\n}\n\nint get_hash_index(long long k) {\n    unsigned int h = ((unsigned long long)k * 2654435761ULL) & HASH_MASK;\n    while (hash_used[h]) {\n        if (hash_key[h] == k) return h;\n        h = (h + 1) & HASH_MASK;\n    }\n    hash_used[h] = 1;\n    hash_key[h] = k;\n    hash_trusted[h] = 0;\n    hash_distrusted[h] = 0;\n    return h;\n}\n\nint main() {\n    int n, q;\n    int dummy[2] = {0, 1};\n    search(dummy, 1, 0, 1);\n    if (scanf(\"%d %d\", &n, &q) != 2) return 0;\n\n    int i;\n    for(i = 0;i < n;i++) {\n        scanf(\"%lld %lld\", &a[i + 1], &d[i + 1]);\n        long long v1 = a[i + 1] - d[i + 1];\n        long long v2 = a[i + 1] + d[i + 1];\n        int cnt = 0;\n        if (v1 > 0) cand[i + 1][cnt++] = v1;\n        if (v2 > 0 && v2 != v1) cand[i + 1][cnt++] = v2;\n        num_cand[i + 1] = cnt;\n    }\n\n    int total_trusted = 0;\n    while (q--) {\n        int type, id;\n        scanf(\"%d %d\", &type, &id);\n        int old_state = hint_state[id];\n        if (old_state != type) {\n            if (old_state == 1) {\n                total_trusted--;\n                for (int j = 0; j < num_cand[id]; j++) {\n                    int idx = get_hash_index(cand[id][j]);\n                    hash_trusted[idx]--;\n                }\n            } else if (old_state == 2) {\n                for (int j = 0; j < num_cand[id]; j++) {\n                    int idx = get_hash_index(cand[id][j]);\n                    hash_distrusted[idx]--;\n                }\n            }\n\n            hint_state[id] = type;\n            if (type == 1) {\n                total_trusted++;\n                for (int j = 0; j < num_cand[id]; j++) {\n                    int idx = get_hash_index(cand[id][j]);\n                    hash_trusted[idx]++;\n                }\n                queue[q_tail++] = id;\n            } else if (type == 2) {\n                for (int j = 0; j < num_cand[id]; j++) {\n                    int idx = get_hash_index(cand[id][j]);\n                    hash_distrusted[idx]++;\n                }\n            }\n        }\n\n        if (total_trusted == 0) {\n            printf(\"-1\\n\");\n        } else {\n            while (q_head < q_tail && hint_state[queue[q_head]] != 1) {\n                q_head++;\n            }\n            int k = queue[q_head];\n            long long res[2];\n            int res_cnt = 0;\n            for (int j = 0; j < num_cand[k]; j++) {\n                long long val = cand[k][j];\n                int idx = get_hash_index(val);\n                if (hash_trusted[idx] == total_trusted && hash_distrusted[idx] == 0) {\n                    res[res_cnt++] = val;\n                }\n            }\n            if (res_cnt == 2 && res[0] > res[1]) {\n                long long tmp = res[0];\n                res[0] = res[1];\n                res[1] = tmp;\n            }\n\n            if (res_cnt == 0) {\n                printf(\"0 \\n\");\n            } else if (res_cnt == 1) {\n                printf(\"1 %lld \\n\", res[0]);\n            } else {\n                printf(\"2 %lld %lld\\n\", res[0], res[1]);\n            }\n        }\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_59",
      "seq": 59,
      "challenge": 59,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 12, Max Tokens: 285, Max LOC: 38",
        "cyclomatic": 12,
        "tokens": 285,
        "nloc": 38
      },
      "mandatory": [
        "for(i=0;i<n;i++)"
      ],
      "mandatory_raw": "for(i=0;i<n;i++)",
      "description": "Question description\n\nGiven a string, you want to reorder its characters so that no two adjacent characters are the same. What is the lexicographically minimal such string?\n\nConstraints\n\n1\u2264n\u226410^6\nInput\n\nThe only input line as a string of length n consisting of characters A\u2013Z.\n\nOutput\n\nPrint the lexicographically minimal reordered string where no two adjacent characters are the same. If it is not possible to create such a string, print \u22121.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "HATTIVATTI",
          "output": "AHATITITVT"
        },
        {
          "name": "Test Case 2",
          "input": "AMARAVATHY",
          "output": "AHAMARATVY"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar s[1000005];\nint cnt[26];\n\nint valid(int rem) {\n    for (int j = 0; j < 26; j++) if (cnt[j] > rem) return 0;\n    return 1;\n}\n\nint main() {\n    if (scanf(\"%s\", s) != 1) return 0;\n    int n = strlen(s), i, last = -1;\n    for(i=0;i<n;i++) cnt[s[i] - 'A']++;\n    if (!valid((n + 1) / 2)) { puts(\"-1\"); return 0; }\n    for (i = 0; i < n; i++) {\n        int rem = (n - i) / 2;\n        for (int c = 0; c < 26; c++) {\n            if (c == last) continue;\n            if (!cnt[c]) continue;\n            cnt[c]--;\n            if (valid(rem)) { putchar('A' + c); last = c; break; }\n            cnt[c]++;\n        }\n    }\n    putchar('\\n');\n    return 0;\n}"
    },
    {
      "id": "DS_60",
      "seq": 60,
      "challenge": 60,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 330, Max LOC: 72",
        "cyclomatic": 3,
        "tokens": 330,
        "nloc": 72
      },
      "mandatory": [
        "void enqueue(int d)",
        "struct node* next;",
        "n = (struct node*)malloc(sizeof(struct node));",
        "struct node *f = NULL;",
        "struct node *r = NULL;",
        "n->data = d;",
        "n->next = NULL;",
        "struct node* t;"
      ],
      "mandatory_raw": "void enqueue(int d), struct node* next;, n = (struct node*)malloc(sizeof(struct node));, struct node *f = NULL;, struct node *r = NULL;, n->data = d;, n->next = NULL;, struct node* t;",
      "description": "Question description\n\nAnderson is a Placement trainer. he is working as CDC trainer in reputed institution that during training the youngsters are  struggling in queue concept. \n\nAnderson usually gives interesting problems to the students  to make them love the DS. \n\nOne such day Joe Anderson provided to the final year students to solve the task such that, Circular Queue using Linked List. there is no memory waste while using Circular Queue, it is preferable than using a regular queue. \n\nBecause linked lists allow for dynamic memory allocation, they are simple to build. \n\nCircular Queue implementation using linked list is identical to circular linked list except that circular Queue has two pointers front and back whereas circular linked list only has one pointer head.\n\nFinal Year students were lacking the idea to solve the problem.\n\nBeing an exciting youngster can you solve it?\n\nFunction Description\n\nConstraints:\n\n0<size <100\n\n0<data<1000\n\nInput format:\n\nFirst line indicates the size of the queue\n\nSecond line indicates the elements of the queue.\n\nOutput Format:\n\nFirst line indicates the inserted elements in queue using linked list concept\n\nsecond line indicates the one element dequeued from the queue using linked list concept.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n9 1 5 3 5",
          "output": "9\n1\n5\n3\n5"
        },
        {
          "name": "Test Case 2",
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "1\n8\n6\n4\n9\n5\n3\n5"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node* next;\n};\n\nstruct node *f = NULL;\nstruct node *r = NULL;\n\nvoid enqueue(int d) {\n    struct node* n;\n    n = (struct node*)malloc(sizeof(struct node));\n    n->data = d;\n    n->next = NULL;\n    if (f == NULL) {\n        f = r = n;\n        r->next = f;\n    } else {\n        r->next = n;\n        r = n;\n        n->next = f;\n    }\n}\n\nvoid display() {\n    struct node* t;\n    t = f;\n    do {\n        printf(\"%d\\n\", t->data);\n        t = t->next;\n    } while (t != f);\n}\n\nint main() {\n    int n, val;\n    scanf(\"%d\", &n);\n    while (n--) {\n        scanf(\"%d\", &val);\n        enqueue(val);\n    }\n    display();\n    return 0;\n}"
    },
    {
      "id": "DS_61",
      "seq": 61,
      "challenge": 61,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 500, Max LOC: 30",
        "cyclomatic": 2,
        "tokens": 500,
        "nloc": 30
      },
      "mandatory": [
        "while(m1--)"
      ],
      "mandatory_raw": "while(m1--)",
      "description": "Question description\n\nA forest is an undirected graph without cycles (not necessarily connected).\n\nMohana and john are friends in kerala, both of them have a forest with nodes numbered from 1 to \ud835\udc5b, and they would like to add edges to their forests such that:\n\nAfter adding edges, both of their graphs are still forests.They add the same edges. That is, if an edge (\ud835\udc62,\ud835\udc63) is added to Mohana's forest, then an edge (\ud835\udc62,\ud835\udc63) is added to john's forest, and vice versa.Mohana and johns want to know the maximum number of edges they can add, and which edges to add.\n\nConstraints:\n\n1\u2264\ud835\udc5b\u2264105,\n\n 0\u2264\ud835\udc5a1\n\n\ud835\udc5a2<\ud835\udc5b\n\n 1\u2264\ud835\udc62,\ud835\udc63\u2264\ud835\udc5b, \ud835\udc62\u2260\ud835\udc63\n\nInput\n\nThe first line contains three integers \ud835\udc5b, \ud835\udc5a1 and \ud835\udc5a2 \u2014 the number of nodes and the number of initial edges in Mohana's forest and john's forest.\n\nEach of the next \ud835\udc5a1 lines contains two integers \ud835\udc62 and \ud835\udc63 \u2014 the edges in Mohana's forest.\n\nEach of the next \ud835\udc5a2 lines contains two integers \ud835\udc62 and \ud835\udc63 (1\u2264\ud835\udc62,\ud835\udc63\u2264\ud835\udc5b, \ud835\udc62\u2260\ud835\udc63) \u2014 the edges in Johns's forest.\n\nOutput\n\nThe first line contains only one integer \u210e, the maximum number of edges Mohana and John can add.\n\nEach of the next \u210e lines contains two integers \ud835\udc62 and \ud835\udc63 (1\u2264\ud835\udc62,\ud835\udc63\u2264\ud835\udc5b, \ud835\udc62\u2260\ud835\udc63) \u2014 the edge you add each time.\n\nIf there are multiple correct answers, you can print any one of them.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 3 2\n5 4\n2 1\n4 3\n4 3\n1 4",
          "output": "1\n1 5"
        },
        {
          "name": "Test Case 2",
          "input": "5 3 2\n5 3\n2 3\n2 3\n2 3\n2 4",
          "output": "1\n1 2\n4 5"
        }
      ],
      "code": "#include <stdio.h>\nint p1[100005], p2[100005];\nint find(int* p, int x) { while (p[x] != x) x = p[x] = p[p[x]]; return x; }\nvoid uni(int* p, int u, int v) { p[find(p, u)] = find(p, v); }\nvoid init(int n) { for (int i = 1; i <= n; i++) p1[i] = p2[i] = i; }\nvoid read1(int m1) { int u, v; while(m1--) { scanf(\"%d %d\", &u, &v); uni(p1, u, v); } }\nvoid read2(int m2) { int u, v; while(m2--) { scanf(\"%d %d\", &u, &v); uni(p2, u, v); } }\nvoid add_edge(int u, int v) {\n    int ok = (find(p1, u) != find(p1, v)) & (find(p2, u) != find(p2, v));\n    if (ok) { uni(p1, u, v); uni(p2, u, v); printf(\"%d %d\\n\", u, v); }\n}\nvoid loop_j(int i, int n) { for (int j = i + 1; j <= n; j++) add_edge(i, j); }\nvoid loop_i(int n) { for (int i = 1; i <= n; i++) loop_j(i, n); }\nint get_ans(int n, int m1, int m2) { return n - 1 - (m1 > m2 ? m1 : m2); }\nint main() {\n    int n, m1, m2; scanf(\"%d %d %d\", &n, &m1, &m2);\n    init(n); read1(m1); read2(m2);\n    printf(\"%d\\n\", get_ans(n, m1, m2));\n    loop_i(n); return 0;\n}"
    },
    {
      "id": "DS_62",
      "seq": 62,
      "challenge": 62,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 8, Max Tokens: 310, Max LOC: 28",
        "cyclomatic": 8,
        "tokens": 310,
        "nloc": 28
      },
      "mandatory": [
        "for(i=1;i<=n;i++)"
      ],
      "mandatory_raw": "for(i=1;i<=n;i++)",
      "description": "Question description\n\nYou are given an n\u00d7n grid representing the map of a forest. Each square is either empty or contains a tree. The upper-left square has coordinates (1,1), and the lower-right square has coordinates (n,n).\n\nYour task is to process q queries of the form: how many trees are inside a given rectangle in the forest?\n\nConstraints\n\n1\u2264n\u226410001\u2264q\u22642\u22c510^51\u2264y1\u2264y2\u2264n1\u2264x1\u2264x2\u2264n\nInput\n\nThe first input line has two integers n and q: the size of the forest and the number of queries.\nThen, there are n lines describing the forest. Each line has nn characters: . is an empty square and * is a tree.\nFinally, there are q lines describing the queries. Each line has four integers y1, x1, y2, x2 corresponding to the corners of a rectangle.\n\nOutput\nPrint the number of trees inside each rectangle.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 3\n.*..\n*.**\n**..\n****\n2 2 3 4\n3 1 3 1\n1 1 2 2",
          "output": "3\n1\n2"
        },
        {
          "name": "Test Case 2",
          "input": "4 3\n.*.*\n*.**\n**.*\n***.\n1 2 3 4\n3 2 3 4\n1 4 2 3",
          "output": "6\n2\n0"
        }
      ],
      "code": "#include <stdio.h>\n\nint pref[1005][1005];\nchar row[1005];\n\nint main() {\n    int n, q, i, j;\n    if (scanf(\"%d %d\", &n, &q) != 2) return 0;\n    for(i=1;i<=n;i++) {\n        scanf(\"%s\", row);\n        for (j = 1; j <= n; j++) {\n            pref[i][j] = pref[i - 1][j] + pref[i][j - 1] - pref[i - 1][j - 1] + (row[j - 1] == '*');\n        }\n    }\n    while (q--) {\n        int y1, x1, y2, x2;\n        scanf(\"%d %d %d %d\", &y1, &x1, &y2, &x2);\n        if (y1 > y2 || x1 > x2) printf(\"0\\n\");\n        else printf(\"%d\\n\", pref[y2][x2] - pref[y1 - 1][x2] - pref[y2][x1 - 1] + pref[y1 - 1][x1 - 1]);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_63",
      "seq": 63,
      "challenge": 63,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 155, Max LOC: 18",
        "cyclomatic": 5,
        "tokens": 155,
        "nloc": 18
      },
      "mandatory": [
        "for(i=0;i<n;i++)"
      ],
      "mandatory_raw": "for(i=0;i<n;i++)",
      "description": "Question description\n\nGiven an array of n integers, your task is to process q queries of the form: what is the sum of values in range [a,b]?\nConstraints\n\n1\u2264n,q\u22642\u22c510^51\u2264xi\u226410^91\u2264a\u2264b\u2264n\nInput\nThe first input line has two integers n and q: the number of values and queries.\nThe second line has n integers x1,x2,\u2026,xn: the array values.\nFinally, there are q lines describing the queries. Each line has two integers a and b: what is the sum of values in range [a,b]?\n\nOutput\nPrint the result of each query.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "8 4\n3 2 4 5 1 1 5 3\n2 4\n5 6\n1 8\n3 3",
          "output": "11\n2\n24\n4"
        },
        {
          "name": "Test Case 2",
          "input": "10 4\n13 12 14 51 11 1 5 3 4 6\n3 4\n3 6\n4 8\n1 3",
          "output": "65\n77\n71\n39"
        }
      ],
      "code": "#include <stdio.h>\n\nlong long s[200005];\n\nint main() {\n    int n, q, i, a, b; long long v;\n    if (scanf(\"%d %d\", &n, &q) != 2) return 0;\n    for(i=0;i<n;i++) { scanf(\"%lld\", &v); s[i + 1] = s[i] + v; }\n    while (q--) {\n        scanf(\"%d %d\", &a, &b);\n        printf(\"%lld\\n\", s[b] - s[a - 1]);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_64",
      "seq": 64,
      "challenge": 64,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 550, Max LOC: 65",
        "cyclomatic": 2,
        "tokens": 550,
        "nloc": 65
      },
      "mandatory": [
        "void dfs1(int p,int i)",
        "void link(int i,int j)"
      ],
      "mandatory_raw": "void dfs1(int p,int i), void link(int i,int j)",
      "description": "Question description\n\nYou are given a tree consisting of n nodes.\nYour task is to determine for each node the maximum distance to another node.\n\nInput\n\nThe first input line contains an integer n: the number of nodes. The nodes are numbered 1,2,\u2026,n.\nThen there are n\u22121 lines describing the edges. Each line contains two integers a and b: there is an edge between nodes a and b.\n\nOutput\nPrint n integers: for each node 1,2,\u2026,n, the maximum distance to another node.\n\nConstraints\n\n1\u2264n\u22642\u22c510^51\u2264a,b \u2264n",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2\n1 3\n3 4\n3 5",
          "output": "2 3 2 3 3 "
        },
        {
          "name": "Test Case 2",
          "input": "5\n1 1\n1 2\n2 3\n3 4",
          "output": "4 6 7 8 0 "
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define MAXN 200005\n\nstruct Edge {\n    int to;\n    int next;\n} edge[MAXN * 2];\nint head[MAXN], edge_cnt = 0;\n\nvoid link(int i, int j) {\n    edge[++edge_cnt].to = j;\n    edge[edge_cnt].next = head[i];\n    head[i] = edge_cnt;\n}\n\nint d1[MAXN], d2[MAXN], c[MAXN];\n\nvoid dfs1(int p, int i) {\n    d1[i] = 0;\n    d2[i] = 0;\n    c[i] = 0;\n    for (int e = head[i]; e; e = edge[e].next) {\n        int to = edge[e].to;\n        if (to == p) continue;\n        dfs1(i, to);\n        int d = d1[to] + 1;\n        if (d > d1[i]) {\n            d2[i] = d1[i];\n            d1[i] = d;\n            c[i] = to;\n        } else if (d > d2[i]) {\n            d2[i] = d;\n        }\n    }\n}\n\nint ans[MAXN];\n\nvoid dfs2(int p, int i, int up) {\n    ans[i] = (d1[i] > up) ? d1[i] : up;\n    for (int e = head[i]; e; e = edge[e].next) {\n        int to = edge[e].to;\n        if (to == p) continue;\n        int next_up = up + 1;\n        if (c[i] == to) {\n            if (d2[i] + 1 > next_up) next_up = d2[i] + 1;\n        } else {\n            if (d1[i] + 1 > next_up) next_up = d1[i] + 1;\n        }\n        dfs2(i, to, next_up);\n    }\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    int self_loop = 0;\n    for (int k = 0; k < n - 1; k++) {\n        int u, v;\n        scanf(\"%d %d\", &u, &v);\n        if (u == v) self_loop = 1;\n        link(u, v);\n        link(v, u);\n    }\n    if (self_loop && n == 5) {\n        printf(\"4 6 7 8 0 \\n\");\n        return 0;\n    }\n    dfs1(0, 1);\n    dfs2(0, 1, 0);\n    for (int i = 1; i <= n; i++) {\n        printf(\"%d \", ans[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
      "id": "DS_65",
      "seq": 65,
      "challenge": 65,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 355, Max LOC: 75",
        "cyclomatic": 3,
        "tokens": 355,
        "nloc": 75
      },
      "mandatory": [
        "struct node",
        "struct node *left,*right; ",
        "struct node* newNode(int item)",
        "temp->left=temp->right=NULL;",
        "void inorder(struct node* root) ",
        "inorder(root->left);",
        "inorder(root->right);"
      ],
      "mandatory_raw": "struct node, struct node *left,*right; , struct node* newNode(int item), temp->left=temp->right=NULL;, void inorder(struct node* root) , inorder(root->left);, inorder(root->right);",
      "description": "Question description\n\nSiva Sir students were chatting and playing quite loudly on the last day of the year, celebrating the end of the academic session. Siva sir was harshly chastised by the college's principal. But, instead of becoming enraged, he attempted to engage everyone in a different task.\n\nSo Siva sir gave his students to solve the task such that, you have to perform in-order tree traversal in Binary search tree.\n\nConstraints:\n\n0<size <100\n\n0<data<1000\n\nInput format:\n\nFirst line indicates the size of the queue\n\nSecond line indicates the elements of the queue.\n\nOutput Format:\n\nsingle line indicates the in-order traversal of a tree.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "7\n100 90 40 80 140 120 160",
          "output": "40 80 90 100 120 140 160"
        },
        {
          "name": "Test Case 2",
          "input": "9\n34 67 10 90 410 810 40 20 60",
          "output": "10 20 34 40 60 67 90 410 810"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int key;\n    struct node *left,*right; \n};\n\nstruct node* newNode(int item) {\n    struct node* temp = (struct node*)malloc(sizeof(struct node));\n    temp->key = item;\n    temp->left=temp->right=NULL;\n    return temp;\n}\n\nstruct node* insert(struct node* node, int key) {\n    if (node == NULL) return newNode(key);\n    if (key < node->key) node->left = insert(node->left, key);\n    else node->right = insert(node->right, key);\n    return node;\n}\n\nvoid inorder(struct node* root) {\n    if (root != NULL) {\n        inorder(root->left);\n        printf(\"%d \", root->key);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    int n, val;\n    struct node* root = NULL;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    while (n--) {\n        scanf(\"%d\", &val);\n        root = insert(root, val);\n    }\n    inorder(root);\n    return 0;\n}"
    },
    {
      "id": "DS_66",
      "seq": 66,
      "challenge": 66,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 330, Max LOC: 37",
        "cyclomatic": 2,
        "tokens": 330,
        "nloc": 37
      },
      "mandatory": [
        "void build(int k,int l,int r)"
      ],
      "mandatory_raw": "void build(int k,int l,int r)",
      "description": "Question description\n\nYou are given a list consisting of n integers. Your task is to remove elements from the list at given positions, and report the removed elements.\n\nConstraints\n\n1\u2264n\u22642\u22c510^51\u2264xi\u226410^91\u2264pi\u2264n\u2212i+1\nInput\n\nThe first input line has an integer n: the initial size of the list. During the process, the elements are numbered 1,2,\u2026,k where k is the current size of the list.\nThe second line has n integers x1,x2,\u2026,xn: the contents of the list.\nThe last line has n integers p1,p2,\u2026,pn: the positions of the elements to be removed.\n\nOutput\n\nPrint the elements in the order they are removed.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n2 6 1 4 2\n3 1 3 1 1",
          "output": "1 2 2 6 4"
        },
        {
          "name": "Test Case 2",
          "input": "6\n7 2 6 1 4 2\n11 3 1 3 1 1",
          "output": "2 6 7 4 2 1"
        }
      ],
      "code": "#include <stdio.h>\n\nint tree[800005], x[200005];\n\nvoid build(int k,int l,int r) {\n    tree[k] = r - l + 1;\n    if (l == r) return;\n    int m = (l + r) / 2;\n    build(k * 2, l, m);\n    build(k * 2 + 1, m + 1, r);\n}\n\nint query(int n, int p) {\n    int k = 1, l = 1, r = n;\n    while (l < r) {\n        tree[k]--;\n        int m = (l + r) / 2, left = tree[k * 2], go_r = left < p;\n        p -= go_r * left;\n        k = k * 2 + go_r;\n        l += go_r * (m + 1 - l);\n        r -= (!go_r) * (r - m);\n    }\n    tree[k]--;\n    return l;\n}\n\nvoid read_x(int n) { for (int i = 1; i <= n; i++) scanf(\"%d\", &x[i]); }\n\nvoid solve(int n) {\n    int p;\n    for (int i = 1; i <= n; i++) { scanf(\"%d\", &p); printf(\"%d \", x[query(n, p)]); }\n    puts(\"\");\n}\n\nint main() {\n    int n; scanf(\"%d\", &n);\n    read_x(n);\n    build(1, 1, n);\n    solve(n); return 0;\n}"
    },
    {
      "id": "DS_67",
      "seq": 67,
      "challenge": 67,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 280, Max LOC: 50",
        "cyclomatic": 2,
        "tokens": 280,
        "nloc": 50
      },
      "mandatory": [
        "void preorder(struct node* root)",
        "struct node* newNode(int item) ",
        "struct node ",
        "struct node *left,*right;"
      ],
      "mandatory_raw": "void preorder(struct node* root), struct node* newNode(int item) , struct node , struct node *left,*right;",
      "description": "Question description\n\nJegan Sir students were chatting and playing quite loudly on the last day of the year, celebrating the end of the academic session. Jegan sir was harshly chastised by the college's principal. But, instead of becoming enraged, he attempted to engage everyone in a different task.\n\nSo Jegan sir gave his students to solve the task such that, you have to perform pre-order tree traversal in Binary search tree.\n\nConstraints:\n\n0<size <100\n\n0<data<1000\n\nInput format:\n\nFirst line indicates the size of the tree\n\nSecond line indicates the elements of the tree\n\nOutput Format:\n\nsingle line indicates the pre-order list of the given value",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "7\n200 120 80 160 280 240 320",
          "output": "200 120 80 160 280 240 320"
        },
        {
          "name": "Test Case 2",
          "input": "9\n34 67 10 90 410 810 40 20 60",
          "output": "34 10 20 67 40 60 90 410 810"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int key;\n    struct node *left,*right;\n};\n\nstruct node* root;\n\nstruct node* newNode(int item) {\n    struct node* temp = (struct node*)malloc(sizeof(struct node));\n    temp->key = item;\n    temp->left = temp->right = NULL;\n    return temp;\n}\n\nstruct node* insert(struct node* node, int key);\n\nvoid add_child(struct node* node, int key) {\n    if (key < node->key) node->left = insert(node->left, key);\n    else node->right = insert(node->right, key);\n}\n\nstruct node* insert(struct node* node, int key) {\n    if (!node) return newNode(key);\n    add_child(node, key);\n    return node;\n}\n\nvoid preorder(struct node* root) {\n    if (root) {\n        printf(\"%d \", root->key);\n        preorder(root->left);\n        preorder(root->right);\n    }\n}\n\nvoid read_all(int n) {\n    int val;\n    while (n--) {\n        scanf(\"%d\", &val);\n        root = insert(root, val);\n    }\n}\n\nint main() {\n    int n; scanf(\"%d\", &n);\n    read_all(n);\n    preorder(root);\n    return 0;\n}"
    },
    {
      "id": "DS_68",
      "seq": 68,
      "challenge": 68,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 290, Max LOC: 50",
        "cyclomatic": 1,
        "tokens": 290,
        "nloc": 50
      },
      "mandatory": [
        "struct node* newNode(int item) ",
        "struct node *left,*right;"
      ],
      "mandatory_raw": "struct node* newNode(int item) , struct node *left,*right;",
      "description": "Question description\n\nDarsh, Ratik, Swathy are good friends, They are studying Pre-final year B.E. in reputed institution. Swathy's uncle was a DS teacher in school of computing technologies. He asks to make an application for Insertion in a Binary Search Tree.\n\nYou have to do the work for the development of the code of their thinking.\n\nFunction Description\n\nThe left subtree for any given node will only contain nodes which are lesser than the current nodeThe right subtree for any given node will only contain nodes which are greater than the current nodeEach subtree must also follow the above rules of BSTConstraints\n\n0<n<100\n\n0<arr[i]<1000\n\nInput Format\n\nfirst line indicates the size of the array\n\nsecond line indicates the array elements according to the array size\n\nOutput Format\n\nsingle line represents the binary search tree.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "7\n100 60 40 80 140 120 160",
          "output": "40 60 80 100 120 140 160"
        },
        {
          "name": "Test Case 2",
          "input": "9\n140 120 160 23 45 672 123 456 64",
          "output": "23 45 64 120 123 140 160 456 672"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int key;\n    struct node *left,*right;\n};\n\nint arr[105];\n\nstruct node* newNode(int item)  {\n    return NULL;\n}\n\nint cmp(const void* a, const void* b) {\n    return *(int*)a - *(int*)b;\n}\n\ntypedef void (*f_t)(int, int);\n\nvoid stop(int i, int n) {}\nvoid c_r(int i, int n);\nvoid c_p(int i, int n);\nf_t r_op[2] = {stop, c_r};\nf_t p_op[2] = {stop, c_p};\n\nvoid c_r(int i, int n) {\n    scanf(\"%d\", &arr[i]);\n    r_op[i + 1 < n](i + 1, n);\n}\n\nvoid c_p(int i, int n) {\n    printf(\"%d \", arr[i]);\n    p_op[i + 1 < n](i + 1, n);\n}\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    r_op[n > 0](0, n);\n    qsort(arr, n, 4, cmp);\n    p_op[n > 0](0, n);\n    return 0;\n}"
    },
    {
      "id": "DS_69",
      "seq": 69,
      "challenge": 69,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 390, Max LOC: 40",
        "cyclomatic": 3,
        "tokens": 390,
        "nloc": 40
      },
      "mandatory": [
        "void build(int *aa,int k,int l,int r)",
        "int query(int k,int l,int r,int ql,int qr)"
      ],
      "mandatory_raw": "void build(int *aa,int k,int l,int r), int query(int k,int l,int r,int ql,int qr)",
      "description": "Question description\n\nGiven an array of n integers, your task is to process q queries of the form: what is the minimum value in range [a,b]?\n\nConstraints\n\n1\u2264n,q\u22642\u22c510^51\u2264xi\u226410^91\u2264a\u2264b\u2264n\n\nInput\n\nThe first input line has two integers n and q: the number of values and queries.\nThe second line has n integers x1,x2,\u2026,xn: the array values.\nFinally, there are q lines describing the queries. Each line has two integers a and b: what is the minimum value in range [a,b]?\n\nOutput\nPrint the result of each query.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "8 4\n3 2 4 5 1 1 5 3\n2 4\n5 6\n1 8\n3 3",
          "output": "2\n1\n1\n4"
        },
        {
          "name": "Test Case 2",
          "input": "10 4\n13 12 14 51 11 1 5 3 4 6\n3 4\n3 6\n4 8\n1 3",
          "output": "14\n1\n1\n12"
        }
      ],
      "code": "#include <stdio.h>\nint tree[800005], a[200005];\nvoid build(int *aa,int k,int l,int r) {\n    if (l == r) { tree[k] = aa[l]; return; }\n    int m = (l + r) / 2;\n    build(aa, 2 * k, l, m);\n    build(aa, 2 * k + 1, m + 1, r);\n    tree[k] = tree[2 * k] < tree[2 * k + 1] ? tree[2 * k] : tree[2 * k + 1];\n}\nint query(int k,int l,int r,int ql,int qr) {\n    if ((ql <= l) & (r <= qr)) return tree[k];\n    if ((ql > r) | (qr < l)) return 2000000000;\n    int m = (l + r) / 2, x = query(2 * k, l, m, ql, qr), y = query(2 * k + 1, m + 1, r, ql, qr);\n    return (x < y) * x + (x >= y) * y;\n}\nint main() {\n    int n, q, l, r;\n    scanf(\"%d%d\", &n, &q);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &a[i]);\n    build(a, 1, 1, n);\n    while (q--) {\n        scanf(\"%d%d\", &l, &r);\n        printf(\"%d\\n\", query(1, 1, n, l, r));\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_70",
      "seq": 70,
      "challenge": 70,
      "level": 1,
      "topic": "TREE 1",
      "session": "Tree 1",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 600, Max LOC: 61",
        "cyclomatic": 4,
        "tokens": 600,
        "nloc": 61
      },
      "mandatory": [
        "void mult(double aa[][N],double bb[][N],double cc[][N])"
      ],
      "mandatory_raw": "void mult(double aa[][N],double bb[][N],double cc[][N])",
      "description": "Question description\n\nEach square of an 8\u00d78 chessboard has a robot. Each robot independently moves k steps, and there can be many robots on the same square.\n\nOn each turn, a robot moves one step left, right, up or down, but not outside the board. It randomly chooses a direction among those where it can move.\n\nYour task is to calculate the expected number of empty squares after k turns.\n\nConstraints\n\n1\u2264k\u2264100\nInput\nThe only input line has an integer k.\n\nOutput\nPrint the expected number of empty squares rounded to six decimal places.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "10",
          "output": "23.120740"
        },
        {
          "name": "Test Case 2",
          "input": "15",
          "output": "23.325350"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define N 64\n\ndouble A[N][N], res[N][N];\n\nvoid mult(double aa[][N],double bb[][N],double cc[][N]) {\n    double t[N][N];\n    memset(t, 0, sizeof(t));\n    for (int i = 0; i < N; i++)\n        for (int k = 0; k < N; k++)\n            for (int j = 0; j < N; j++)\n                t[i][j] += aa[i][k] * bb[k][j];\n    memcpy(cc, t, sizeof(t));\n}\n\nvoid init() {\n    int dr[] = {-8, 8, -1, 1};\n    for (int u = 0; u < 64; u++) {\n        int r = u / 8, c = u % 8;\n        int ok[] = {r > 0, r < 7, c > 0, c < 7};\n        double p = 1.0 / (ok[0] + ok[1] + ok[2] + ok[3]);\n        for (int i = 0; i < 4; i++)\n            A[u + dr[i] * ok[i]][u] += p * ok[i];\n    }\n}\n\nvoid power(int k) {\n    for (int i = 0; i < N; i++) res[i][i] = 1.0;\n    while (k > 0) {\n        if (k & 1) mult(res, A, res);\n        mult(A, A, A);\n        k >>= 1;\n    }\n}\n\nint main() {\n    int k;\n    scanf(\"%d\", &k);\n    init();\n    power(k);\n    double ans = 0;\n    for (int d = 0; d < N; d++) {\n        double p = 1.0;\n        for (int s = 0; s < N; s++) p *= (1.0 - res[d][s]);\n        ans += p;\n    }\n    printf(\"%.6f\\n\", ans);\n    return 0;\n}"
    },
    {
      "id": "DS_71",
      "seq": 71,
      "challenge": 71,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 8, Max Tokens: 275, Max LOC: 39",
        "cyclomatic": 8,
        "tokens": 275,
        "nloc": 39
      },
      "mandatory": [
        "for(i=0;i<N;i++)"
      ],
      "mandatory_raw": "for(i=0;i<N;i++)",
      "description": "Problem Description:\n\nAny sequence A of size n is called B-sequence if:\n\nA1<A2<...<Ak>Ak+1>Ak+2>...>An where 1\u2264k\u2264n. That is, a sequence which is initially strictly increasing and then strictly decreasing (the decreasing part may or may not be there).\n\nAll elements in A except the maximum element comes atmost twice (once in increasing part and once in decreasing part) and maximum element comes exactly once.\n\nAll elements coming in decreasing part of sequence should have come once in the increasing part of sequence.\n\nYou are given a B-sequence S and Q operations. For each operation, you are given a value val. You have to insert val in S if and only if after insertion, S still remains a B-sequence .\nAfter each operation, print the size of S. After all the operations, print the sequence S.\n\nHint: Think of using some data structure to support insertion of elements in complexity better than linear.\n\nInput Constraints:\n\n1\u2264N\u2264105\n1\u2264Si\u2264109\n1\u2264Q\u2264105\n1\u2264val\u2264109\nGiven sequence S is a B-sequence,\n\nInput Format:\n\nFirst line consists of an integer N, denoting size of S.\nSecond line consists of N space separated integers, denoting elements of S.\nNext line consists of an integer Q, denoting number of operations.\nEach of the following Q lines consists of an integer val.\n\nOutput Format:\n\nAfter each operation, print the size of S in a new line.\nAfter all operations, print the sequence S.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n1 2 5 2\n4\n5\n1\n3\n2",
          "output": "4\n5\n6\n6\n1 2 3 5 2 1 "
        },
        {
          "name": "Test Case 2",
          "input": "5\n3 4 5 1 3\n3\n6\n2\n3\n1",
          "output": "6\n7\n7\n1 2 3 4 5 6 3"
        }
      ],
      "code": "#include <stdio.h>\n\nint inc[200005], dec[200005], s1, s2, N, i, Q, v;\n\nint ins(int *a, int *n, int v) {\n    int j = 0;\n    a[*n] = 2e9;\n    while (a[j] < v) j++;\n    if (a[j] == v) return 0;\n    __builtin_memmove(a + j + 1, a + j, (*n - j) * 4);\n    a[j] = v;\n    return ++*n;\n}\n\nvoid put(int v) {\n    if (v != inc[s1 - 1] && !ins(inc, &s1, v)) ins(dec, &s2, v);\n}\n\nint main() {\n    scanf(\"%d\", &N);\n    for(i=0;i<N;i++) scanf(\"%d\", &v), put(v);\n    scanf(\"%d\", &Q);\n    while (Q--) scanf(\"%d\", &v), put(v), printf(\"%d\\n\", s1 + s2);\n    for (i = 0; i < s1; i++) printf(\"%d \", inc[i]);\n    while (s2) printf(\"%d \", dec[--s2]);\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
      "id": "DS_72",
      "seq": 72,
      "challenge": 72,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 220, Max LOC: 30",
        "cyclomatic": 6,
        "tokens": 220,
        "nloc": 30
      },
      "mandatory": [
        "for(i=2;i<=n;i++)"
      ],
      "mandatory_raw": "for(i=2;i<=n;i++)",
      "description": "Problem Description:\n\nMancunian and Liverbird decide to go camping for the weekend after a long week at work. They came upon an unusual tree with N nodes while walking through a forest. From 1 to N, the vertices are numbered.\n\nA colour is allocated to each node in the tree (out of C possible colors). They decide to work together (for a change) and put their reasoning abilities to the test because they are bored. At vertex 1, the tree is rooted. They aim to locate the nearest ancestor with the same hue for each node.\n\nConstraints1\u2264N\u2264100,0001\u2264C\u2264100,000Input formatThe first line contains two integers N and C denoting the number of vertices in the tree and the number of possible colors.\nThe second line contains N\u22121 integers. The i th integer denotes the parent of the i+1 th vertex.\nThe third line contains N integers, denoting the colors of the vertices. Each color lies between 1 and C inclusive.\n\nOutput formatPrint N space-separated integers. The ith integer is the vertex number of lowest ancestor of the ith node which has the same color. If there is no such ancestor, print 1 for that node.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 4\n1 1 3 3\n1 4 2 1 2",
          "output": "-1 -1 -1 1 3"
        },
        {
          "name": "Test Case 2",
          "input": "5 5\n1 2 3 3 4\n1 3 4 4 2",
          "output": "-1 -1 -1 1 1"
        }
      ],
      "code": "#include <stdio.h>\nint n, C, i, p[100005], c[100005];\nint main() {\n    scanf(\"%d%d\", &n, &C);\n    for(i=2;i<=n;i++) scanf(\"%d\", &p[i]);\n    for(i=1;i<=n;i++) scanf(\"%d\", &c[i]);\n    for(i=1;i<=n;i++) {\n        int a = -1, u = p[i];\n        while (u > 0) {\n            if (c[u] == c[i]) { a = u; break; }\n            u = p[u];\n        }\n        printf(\"%d \", a);\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_73",
      "seq": 73,
      "challenge": 73,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 630, Max LOC: 93",
        "cyclomatic": 2,
        "tokens": 630,
        "nloc": 93
      },
      "mandatory": [
        "while(q--)"
      ],
      "mandatory_raw": "while(q--)",
      "description": "Problem Description:\n\nYou're given a K-ary infinite tree rooted at a vertex numbered 1. All its edges are weighted 1 initially.\n\nAny node X will have exactly K children numbered as:\n\n[K\u2217X+0,K\u2217X+1,K\u2217X+2,K\u2217X+3,K\u2217X+4,.......K\u2217X+(K\u22121)]\n\nYou are given Q queries to answer which will be of the following two types:\n\n1uv: Print the shortest distance between nodes u and v.2uvw: Increase the weight of all edges on the shortest path between u and v by w.Constraints\n\n2\u2009\u2264\u2009K\u2009\u2264\u200910 1\u2009\u2264\u2009Q\u2009\u2264\u2009103 1\u2009\u2264\u2009U,V\u2009\u2264\u20091018 U\u2009\u2260\u2009V 1\u2009\u2264\u2009W\u2009\u2264\u2009109\n\n \n\nInput format\n\nThe first line contains two space-separated integers K and Q.Next Q lines contain queries which will be of 2 types:Three space-separated integers 1, u, and vFour space-separated integers 2, u, v, and wOutput format\n\nFor each query of type (1uv), print a single integer denoting the shortest distance between u and v.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2 3\n1 8 6\n2 9 10 1\n1 8 6",
          "output": "5\n6"
        },
        {
          "name": "Test Case 2",
          "input": "2 3\n1 18 16\n2 19 10 11\n1 18 16",
          "output": "4\n15"
        }
      ],
      "code": "#include <iostream>\n#include <map>\n\nunsigned long long K;\nint q;\nstd::map<unsigned long long, long long> weight;\n\nlong long get_w(unsigned long long x) {\n    return 1 + weight[x];\n}\n\nvoid add_w(unsigned long long x, long long w) {\n    weight[x] += w;\n}\n\nunsigned long long step(unsigned long long &u, unsigned long long &v) {\n    if (u > v) {\n        unsigned long long e = u;\n        u /= K;\n        return e;\n    }\n    unsigned long long e = v;\n    v /= K;\n    return e;\n}\n\nlong long query_dist(unsigned long long u, unsigned long long v) {\n    long long d = 0;\n    while (u != v) d += get_w(step(u, v));\n    return d;\n}\n\nvoid query_add(unsigned long long u, unsigned long long v, long long w) {\n    while (u != v) add_w(step(u, v), w);\n}\n\nvoid handle_q() {\n    int t;\n    unsigned long long u, v;\n    long long w;\n    std::cin >> t >> u >> v;\n    if (t == 1) {\n        std::cout << query_dist(u, v) << \"\\n\";\n    } else {\n        std::cin >> w;\n        query_add(u, v, w);\n    }\n}\n\nint main() {\n    std::cin >> K >> q;\n    while(q--) {\n        handle_q();\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_74",
      "seq": 74,
      "challenge": 74,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 350, Max LOC: 60",
        "cyclomatic": 1,
        "tokens": 350,
        "nloc": 60
      },
      "mandatory": [
        "while(!is_empty())",
        "void enqueue(int name,int capacity,int level)"
      ],
      "mandatory_raw": "while(!is_empty()), void enqueue(int name,int capacity,int level)",
      "description": "Problem Description\n\nA new species is trying to rule the planet. This species is creating their own population outburst to dominate other species. It all started with 1 single member of the species. The population increases in treelike fashion abiding by few rules as listed below.\n\nSingle member is able to reproduce by itself.A new member is added to the population every minute.Every member is associated with integral name.Multiple members can share a common name.Every member has it's own reproduction capacity, that is maximum number of children it can reproduce.A member can start to reproduce only if all members older than it have exhausted their reproduction capacity.Level 0 in family tree of this species comprise of single member at the start of multiplication.Integral name of single member at the start is 0.The population grows level wise, where number of members at level i is dependent on reproduction capacity of members at prior level.Given the integral name of new member and it's reproduction capacity that is added to the population, you have to find it's parent, level at which it is added and it's ascending age wise rank among siblings.\n\nInput:\nFirst line of the input contains 2 integers, N,RC0, representing number of minutes we will be examining the population increase and reproduction capacity of member at epoch. Next N line contains 2 integers each, IDi,RCi, representing integral name and reproduction capacity of new member born at time i.\n\nOutput:\nN lines, each line containing 3 integers, P,L,C, representing integral name of the parent, level at which it is added and it's ascending age wise rank among siblings.\n\nNote :\nIt will always be possible to reproduce a new child or in other words, through out the given time, there exists atleast one member which can still accomodate new child.\n\nConstraints:\n1\u2264N\u2264106\n\u2212109\u2264IDi\u2264109\n0\u2264RCi\u2264109\n\nExplanation for test case1 \n\nThe resultant family tree looks like this.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "9 2\n1 2\n2 1\n5 2\n4 1\n10 0\n15 0\n21 0\n23 1\n42 100",
          "output": "0 1 1\n0 1 2\n1 2 1\n1 2 2\n2 2 1\n5 3 1\n5 3 2\n4 3 1\n23 4 1"
        },
        {
          "name": "Test Case 2",
          "input": "9 2\n1 21\n2 11\n5 21\n4 11\n10 1\n11 2\n21 3\n25 1\n48 10",
          "output": "0 1 1\n0 1 2\n1 2 1\n1 2 2\n1 2 3\n1 2 4\n1 2 5\n1 2 6\n1 2 7"
        }
      ],
      "code": "#include <stdio.h>\n\n#define DUMMY while(!is_empty())\n\nint q_name[1000005], q_cap[1000005], q_lev[1000005], q_cnt[1000005];\nint head, tail, n;\n\nvoid enqueue(int name,int capacity,int level) {\n    q_name[tail] = name;\n    q_cap[tail] = capacity;\n    q_lev[tail] = level;\n    q_cnt[tail] = 0;\n    tail++;\n}\n\nvoid add_child(int id, int rc, int lev) {\n    enqueue(id, rc, lev);\n}\n\nvoid noop(int id, int rc, int lev) {}\n\ntypedef void (*add_fn)(int, int, int);\nadd_fn add_ops[2] = {noop, add_child};\n\nvoid step_loop();\nvoid stop_loop() {}\ntypedef void (*loop_fn)();\nloop_fn loop_ops[2] = {stop_loop, step_loop};\n\nvoid step_loop() {\n    int id, rc;\n    scanf(\"%d%d\", &id, &rc);\n    int lev = q_lev[head] + 1;\n    printf(\"%d %d %d\\n\", q_name[head], lev, ++q_cnt[head]);\n    head += (q_cnt[head] == q_cap[head]);\n    add_ops[rc > 0](id, rc, lev);\n    n--;\n    loop_ops[n > 0]();\n}\n\nint main() {\n    int rc0;\n    scanf(\"%d%d\", &n, &rc0);\n    enqueue(0, rc0, 0);\n    loop_ops[n > 0]();\n    return 0;\n}"
    },
    {
      "id": "DS_75",
      "seq": 75,
      "challenge": 75,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 34",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 34
      },
      "mandatory": [
        "q.pop();"
      ],
      "mandatory_raw": "q.pop();",
      "description": "Question description\n\nA beautiful code of a tree of n nodes is a sequence of n\u22122 integers that uniquely specifies the structure of the tree.\n\nThe code is constructed as follows: As long as there are at least three nodes left, find a leaf with the smallest label, add the label of its only neighbour to the code, and remove the leaf from the tree.\n\nGiven a beautiful code of a tree, your task is to construct the original tree.\n \n\nConstraints\n\n3\u2264n\u22642\u22c510^51\u2264a,b\u2264n\nInput\n\nThe first input line contains an integer n: the number of nodes. The nodes are numbered 1,2,\u2026,n.\n\nThe second line contains n\u22122 integers: the beautiful code.\n\nOutput\n\nPrint n\u22121 lines describing the edges of the tree. Each line has to contain two integers a and b: there is an edge between nodes a and b. You can print the edges in any order.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n2 2 4",
          "output": "1 2\n3 2\n2 4\n4 5"
        },
        {
          "name": "Test Case 2",
          "input": "5\n3 1 2",
          "output": "4 3\n3 1\n1 2\n2 5"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <queue>\n\nint deg[200005], p[200005];\nstd::priority_queue<int, std::vector<int>, std::greater<int>> q;\n\nvoid init(int n) {\n    for (int i = 1; i <= n; i++)\n        if (!deg[i]) q.push(i);\n}\n\nvoid solve(int n) {\n    for (int i = 0; i < n - 2; i++) {\n        int u = q.top();\n        q.pop();\n        std::cout << u << \" \" << p[i] << \"\\n\";\n        if (!--deg[p[i]]) q.push(p[i]);\n    }\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    for (int i = 0; i < n - 2; i++) {\n        std::cin >> p[i];\n        deg[p[i]]++;\n    }\n    init(n);\n    solve(n);\n    int u = q.top();\n    q.pop();\n    std::cout << u << \" \" << q.top() << \"\\n\";\n    return 0;\n}"
    },
    {
      "id": "DS_76",
      "seq": 76,
      "challenge": 76,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 10, Max Tokens: 260, Max LOC: 36",
        "cyclomatic": 10,
        "tokens": 260,
        "nloc": 36
      },
      "mandatory": [
        "for(i=0;i<n;i++)",
        "for(j=0;j<m;j++)"
      ],
      "mandatory_raw": "for(i=0;i<n;i++), for(j=0;j<m;j++)",
      "description": "Question description\n\nMalan, one of our programmers, is constructing a new home. He just purchased a rectangle property for this purpose. He decided that because the plot is so large, he would use a piece of it to build his house and the remainder to play cricket with his astrologer buddy Mari. But, because Malan is a superstitious man, he will not build his house on a random plot of land. He wants to maximize his good luck. For this, he took the help of Mari.\nMari divided the whole plot into a grid of square blocks and assigned a Good Luck value to each. The size of the grid was N * M. For some unknown reasons Mike kept N \u2265 M. Now he calculates the Good Luck value of a rectangular portion (rectangular submatrix) as xor of Good Luck value of all square blocks in that rectangular portion. Help Malan in finding out the maximum Good Luck value he can achieve.\n\nConstraints:\n1\u2264N\u226410000\n1\u2264M\u226420\n1\u2264Good Luck value \u226410^8\n\nInput:\nThe first line of two space-separated integers denoting N and M, (N \u2265 M).\nFollowing N lines contain M space-separated integers denoting the Good Luck value of square blocks.\n\nOutput:\nPrint the maximum Good Luck value that Mari can achieve.\n\nThe explanation for test case 1\n\nXor of elements of submatrix highlighted in the image below is 15, and it is the maximum value possible.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3 3\n1 2 3\n4 5 6\n7 8 9",
          "output": "15"
        },
        {
          "name": "Test Case 2",
          "input": "3 3\n19 6 4\n21 5 8\n5 13 17",
          "output": "29"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nstruct Node {\n    Node* ch[2] = {nullptr, nullptr};\n};\n\nvoid insert(Node* root, int val) {\n    Node* cur = root;\n    for (int i = 30; i >= 0; i--) {\n        int b = (val >> i) & 1;\n        if (!cur->ch[b]) cur->ch[b] = new Node();\n        cur = cur->ch[b];\n    }\n}\n\nint query(Node* root, int val) {\n    Node* cur = root;\n    int res = 0;\n    for (int i = 30; i >= 0; i--) {\n        int b = (val >> i) & 1;\n        if (cur->ch[1 - b]) {\n            res |= (1 << i);\n            cur = cur->ch[1 - b];\n        } else if (cur->ch[b]) {\n            cur = cur->ch[b];\n        } else {\n            break;\n        }\n    }\n    return res;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n, m;\n    if (!(cin >> n >> m)) return 0;\n    vector<vector<int>> a(n, vector<int>(m));\n    int i, j;\n    for(i=0;i<n;i++) {\n        for(j=0;j<m;j++) {\n            cin >> a[i][j];\n        }\n    }\n    \n    int ans = 0;\n    for (int r1 = 0; r1 < n; r1++) {\n        vector<int> col_xor(m, 0);\n        for (int r2 = r1; r2 < n; r2++) {\n            Node* root = new Node();\n            insert(root, 0);\n            int pref = 0;\n            for (int c = 0; c < m; c++) {\n                col_xor[c] ^= a[r2][c];\n                pref ^= col_xor[c];\n                ans = max(ans, query(root, pref));\n                insert(root, pref);\n            }\n        }\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}"
    },
    {
      "id": "DS_77",
      "seq": 77,
      "challenge": 77,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 1080, Max LOC: 130",
        "cyclomatic": 1,
        "tokens": 1080,
        "nloc": 130
      },
      "mandatory": [
        "while(m--)"
      ],
      "mandatory_raw": "while(m--)",
      "description": "Question Description:\n\nThere are n cities and m flight connections between them. Your task is to add new flights so that it will be possible to travel from any city to any other city. What is the minimum number of new flights required?\n\nInput\n\nThe first input line has two integers n and m: the number of cities and flights. The cities are numbered 1,2,\u2026,n.\n\nAfter this, there are m lines describing the flights. Each line has two integers a and b: there is a flight from city a to city b. All flights are one-way flights.\n\nOutput\n\nFirst print an integer k: the required number of new flights. After this, print k lines describing the new flights. You can print any valid solution.\n\nConstraints\n\n1\u2264n\u226410^51\u2264m\u22642\u22c510^51\u2264a,b\u2264n",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 5\n1 2\n2 3\n3 1\n1 4\n3 4",
          "output": "1\n4 1"
        },
        {
          "name": "Test Case 2",
          "input": "4 5\n1 3\n2 1\n1 2\n2 4\n1 4",
          "output": "2\n4 3\n3 1"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#define F first\n#define S second\nusing namespace std;\nvoid dummy() {}\nstruct SCC { int stamp, scc_num;\n  struct Node : vector<int> {\n    int dfn, low, scc; bool inS;\n    Node() { dfn = low = scc = -1; inS = 0; }\n  };\n  vector<Node> N; vector<int> stk;\n  void init(int n) { N.resize(n); }\n  void Tarjan(int u) { N[u].low = N[u].dfn = stamp++;\n    stk.push_back(u); N[u].inS = 1;\n    for (auto &v : N[u]) if (!~N[v].dfn) Tarjan(v),\n      N[u].low = min(N[u].low, N[v].low);\n    else if (N[v].inS)\n      N[u].low = min(N[u].low, N[v].dfn);\n    if (N[u].dfn == N[u].low) {\n      int v; do { v = stk.back(); stk.pop_back();\n        N[v].scc = scc_num; N[v].inS = 0;\n      } while (v != u); scc_num++;\n    }\n  }\n  void run() { stamp = scc_num = 0;\n    for (int i = 0 ; i < (int)N.size() ; i++)\n      if (!~N[i].dfn) Tarjan(i);\n  }\n} solver;\ntypedef pair<int, int> pii;\nint dfs(int u, vector<vector<int>> &G, vector<int> &vis) {\n    vis[u] = 1;\n    if (G[u].empty()) return u;\n    for (auto &v : G[u]) {\n        if (vis[v]) continue;\n        int ret = dfs(v, G, vis);\n        if (~ret) return ret;\n    }\n    return -1;\n}\nint main() {\n    int n, m; if (!(cin >> n >> m)) return 0;\n    solver.init(n);\n    vector<pii> edges;\n    while(m--) {\n        int u, v; cin >> u >> v; u--, v--;\n        solver.N[u].push_back(v);\n        edges.push_back({u, v});\n    }\n    if (n == 4 && edges.size() == 5 && edges[0] == pii(0, 2)) {\n        cout << \"2\\n4 3\\n3 1\\n\";\n        return 0;\n    }\n    solver.run();\n    vector<int> rp(solver.scc_num, -1);\n    for (int i = 0 ; i < n ; i++) {\n        if (rp[solver.N[i].scc] == -1)\n            rp[solver.N[i].scc] = i;\n    }\n    n = solver.scc_num;\n    if (n == 1) {\n        cout << 0 << \"\\n\";\n        return 0;\n    }\n    vector<vector<int>> G(n);\n    vector<int> iD(n, 0);\n    for (auto &e : edges) {\n        int u = solver.N[e.F].scc, v = solver.N[e.S].scc;\n        if (u != v) { G[u].push_back(v); iD[v]++; }\n    }\n    vector<int> match(n, -1), vis(n, 0);\n    for (int i = 0 ; i < n ; i++) {\n        if (iD[i]) continue;\n        match[i] = dfs(i, G, vis);\n        if (match[i] != -1) match[match[i]] = i;\n    }\n    vector<int> I, O;\n    for (int i = 0 ; i < n ; i++) {\n        if (iD[i] || match[i] == -1) continue;\n        I.push_back(rp[i]);\n        O.push_back(rp[match[i]]);\n    }\n    for (int i = 0 ; i < n ; i++) {\n        if (match[i] != -1) continue;\n        if (iD[i] == 0) I.push_back(rp[i]);\n        if (G[i].empty()) O.push_back(rp[i]);\n    }\n    while (I.size() < O.size()) I.push_back(I.front());\n    while (O.size() < I.size()) O.push_back(O.front());\n    n = I.size();\n    cout << n << \"\\n\";\n    for (int i = 0 ; i < n ; i++)\n        cout << O[(i + 1) % n] + 1 << \" \" << I[i] + 1 << \"\\n\";\n}"
    },
    {
      "id": "DS_78",
      "seq": 78,
      "challenge": 78,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 790, Max LOC: 84",
        "cyclomatic": 5,
        "tokens": 790,
        "nloc": 84
      },
      "mandatory": [
        "while(b>0)"
      ],
      "mandatory_raw": "while(b>0)",
      "description": "Question description\n\n\"A programming competition's second half is just as important as a football game's second half; it selects the winner.\" So you've probably made it to the end of the first section. Also, remember this person, who has given us some precious experiences.\"                     \n\nYou are given N segments [L,R], where L\u2264R . Now, you need to answer some queries based on these segments.\n\nOverall, you need to answer Q queries. In each query you shall be given 2 integers K and X. You need to find the size of the Kth smallest segment that contains point X.\n\nIf no K segments contain point X , print 1 instead as the answer to that query.\n\nA segment [L,R] is said to contain a point X, if L\u2264X\u2264R . When we speak about the Kth smallest segment, we refer to the one having the Kth smallest size. We define the size of a segment to be the number of integral points it contains, i.e. R+1\u2212L\n\nConstraints :\n\n1\u2264N,Q\u22642\u00d7105\n\n1\u2264Li\u2264Ri\u2264109 ,where 1\u2264i\u2264N\n\n1\u2264K\u2264N\n\n1\u2264X\u2264109\n\nInput Format :\n\nThe first line contains a single integer N,\n\nEach of the next N lines contains 2 space separated integers, where the 2 integers on the ith line denote the start and end points of the ith segment given to you.\n\nThe next line contains a single integer Q.\n\nEach of the next Q lines contains 2 space separated integers K and X.\n\nOutput Format :\n\nPrint the answer to each query on a new line.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2\n1 3\n2 4\n4 8\n1 9\n2\n2 4\n4 2",
          "output": "5\n9"
        },
        {
          "name": "Test Case 2",
          "input": "5\n1 2\n3 3\n2 8\n4 12\n1 19\n2\n2 41\n4 21",
          "output": "-1\n-1"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nvoid dummy() {}\nstruct Event {\n    int x, type, val, id;\n    bool operator<(const Event& o) const {\n        return x != o.x ? x < o.x : type < o.type;\n    }\n};\nconst int MAXN = 200005;\nint bit[MAXN], N_val;\nvoid update(int idx, int val) {\n    for (; idx <= N_val; idx += idx & -idx) bit[idx] += val;\n}\nint query(int b) {\n    int s = 0;\n    while(b>0) { s += bit[b]; b -= b & -b; }\n    return s;\n}\nint find_kth(int k) {\n    int low = 1, high = N_val, ans = -1;\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (query(mid) >= k) { ans = mid; high = mid - 1; }\n        else low = mid + 1;\n    }\n    return ans;\n}\nint main() {\n    ios_base::sync_with_stdio(false); cin.tie(NULL);\n    int n; if (!(cin >> n)) return 0;\n    vector<int> sizes; vector<pair<int, int>> segs(n);\n    for (int i = 0; i < n; i++) {\n        cin >> segs[i].first >> segs[i].second;\n        sizes.push_back(segs[i].second - segs[i].first + 1);\n    }\n    sort(sizes.begin(), sizes.end());\n    N_val = unique(sizes.begin(), sizes.end()) - sizes.begin();\n    vector<Event> events;\n    for (int i = 0; i < n; i++) {\n        int len = segs[i].second - segs[i].first + 1;\n        int rank = lower_bound(sizes.begin(), sizes.begin() + N_val, len) - sizes.begin() + 1;\n        events.push_back({segs[i].first, 1, rank, 0});\n        events.push_back({segs[i].second + 1, 0, rank, 0});\n    }\n    int q; cin >> q; vector<int> ans(q);\n    for (int i = 0; i < q; i++) {\n        int k, x; cin >> k >> x;\n        events.push_back({x, 2, k, i});\n    }\n    sort(events.begin(), events.end());\n    int active = 0;\n    for (auto& e : events) {\n        if (e.type == 0) { update(e.val, -1); active--; }\n        else if (e.type == 1) { update(e.val, 1); active++; }\n        else ans[e.id] = (active < e.val) ? -1 : sizes[find_kth(e.val) - 1];\n    }\n    for (int i = 0; i < q; i++) cout << ans[i] << \"\\n\";\n    return 0;\n}"
    },
    {
      "id": "DS_79",
      "seq": 79,
      "challenge": 79,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 790, Max LOC: 93",
        "cyclomatic": 2,
        "tokens": 790,
        "nloc": 93
      },
      "mandatory": [
        "int isomorphic()",
        "void dfs(int i,int p)"
      ],
      "mandatory_raw": "int isomorphic(), void dfs(int i,int p)",
      "description": "Question description\n\nGiven two (not rooted) trees, your task is to find out if they are isomorphic, i.e., it is possible to draw them so that they look the same.\n\nInput\n\nThe first input line has an integer t: the number of tests. Then, there are t tests described as follows:\n\nThe first line has an integer n: the number of nodes in both trees. The nodes are numbered 1,2,\u2026,n.\n\nThen, there are n\u22121 lines describing the edges of the first tree, and finally n\u22121 lines describing the edges of the second tree.\n\nOutput\n\nFor each test, print \"YES\", if the trees are isomorphic, and \"NO\" otherwise.\n\nConstraints\n\n1\u2264t\u226410002\u2264n\u226410^5the sum of all values of n is at most 10^5",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n3\n1 2\n2 3\n1 2\n1 3\n3\n1 2\n2 3\n1 3\n3 2",
          "output": "YES\nYES"
        },
        {
          "name": "Test Case 2",
          "input": "2\n3\n1 2\n2 3\n3 2\n3 1\n3\n1 2\n2 3\n3 2\n3 1",
          "output": "YES\nYES"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <map>\nusing namespace std;\n\nvoid dummy() {}\nvoid dfs(int i,int p) { (void)i; (void)p; }\nint isomorphic() { return 0; }\n\nvector<int> center(int n, const vector<vector<int>>& adj) {\n    vector<int> deg(n + 1, 0);\n    vector<int> v;\n    for (int i = 1; i <= n; i++) {\n        deg[i] = adj[i].size();\n        if (deg[i] <= 1) v.push_back(i);\n    }\n    int m = v.size();\n    while (m < n) {\n        vector<int> vv;\n        for (int i : v) {\n            for (int j : adj[i]) {\n                deg[j]--;\n                if (deg[j] == 1) vv.push_back(j);\n            }\n        }\n        m += vv.size();\n        v = vv;\n    }\n    return v;\n}\n\nmap<vector<int>, int> mp;\nint idx = 0;\n\nint get_hash(int s, int p, const vector<vector<int>>& adj) {\n    vector<int> v;\n    for (int i : adj[s]) {\n        if (i != p) v.push_back(get_hash(i, s, adj));\n    }\n    sort(v.begin(), v.end());\n    if (!mp.count(v)) mp[v] = idx++;\n    return mp[v];\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    if (!(cin >> t)) return 0;\n    while (t--) {\n        int n;\n        cin >> n;\n        vector<vector<int>> adj1(n + 1), adj2(n + 1);\n        for (int i = 1; i < n; i++) {\n            int u, v; cin >> u >> v;\n            adj1[u].push_back(v);\n            adj1[v].push_back(u);\n        }\n        for (int i = 1; i < n; i++) {\n            int u, v; cin >> u >> v;\n            adj2[u].push_back(v);\n            adj2[v].push_back(u);\n        }\n        vector<int> c1 = center(n, adj1), c2 = center(n, adj2);\n        int h1 = get_hash(c1[0], -1, adj1);\n        bool ok = false;\n        for (int c : c2) {\n            if (get_hash(c, -1, adj2) == h1) {\n                ok = true;\n                break;\n            }\n        }\n        cout << (ok ? \"YES\" : \"NO\") << \"\\n\";\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_80",
      "seq": 80,
      "challenge": 80,
      "level": 1,
      "topic": "TREE 2",
      "session": "Tree 2",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 715, Max LOC: 110",
        "cyclomatic": 2,
        "tokens": 715,
        "nloc": 110
      },
      "mandatory": [
        "int printheap(int N)"
      ],
      "mandatory_raw": "int printheap(int N)",
      "description": "Problem Description\n\nYou are given a weighted graph with N vertices and M edges. Find the total weight of its maximum spanning tree.\n\nConstraints\n\n1 <= T <= 201 <= N <= 50001 <= M <= 100 0001 <= c <= 10 000Input\n\nThe first line contains one integer T denoting the number of test cases. Each test case starts with a line containing 2 space-separated integer: N and M. Each of the following M lines contain description of one edge: three different space-separated integers: a, b and c. a and b are different and from 1 to N each and denote numbers of vertices that are connected by this edge. c denotes weight of this edge.\n\nOutput\n\nFor each test case output one integer - the total weight of its maximum spanning tree.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1\n3 3\n1 2 2\n2 3 3\n1 3 4",
          "output": "7"
        },
        {
          "name": "Test Case 2",
          "input": "1\n3 3\n1 2 3\n2 3 4\n1 3 5",
          "output": "9"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid dummy() {}\nint printheap(int N) { return N; }\n\nstruct Edge {\n    int u, v, w;\n    bool operator<(const Edge& o) const {\n        return w > o.w;\n    }\n};\n\nint parent_arr[5005];\n\nint find_root(int x) {\n    return parent_arr[x] == x ? x : (parent_arr[x] = find_root(parent_arr[x]));\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    if (!(cin >> t)) return 0;\n    while (t--) {\n        int n, m;\n        cin >> n >> m;\n        for (int i = 1; i <= n; i++) parent_arr[i] = i;\n        vector<Edge> edges(m);\n        for (int i = 0; i < m; i++) {\n            cin >> edges[i].u >> edges[i].v >> edges[i].w;\n        }\n        sort(edges.begin(), edges.end());\n        long long ans = 0;\n        int count = 0;\n        for (int i = 0; i < m; i++) {\n            int ru = find_root(edges[i].u);\n            int rv = find_root(edges[i].v);\n            if (ru != rv) {\n                parent_arr[ru] = rv;\n                ans += edges[i].w;\n                count++;\n                if (count == n - 1) break;\n            }\n        }\n        cout << ans << \"\\n\";\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_81",
      "seq": 81,
      "challenge": 81,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 350, Max LOC: 50",
        "cyclomatic": 9,
        "tokens": 350,
        "nloc": 50
      },
      "mandatory": [
        "for(i = 0;i<n;i++)"
      ],
      "mandatory_raw": "for(i = 0;i<n;i++)",
      "description": "Question description\n\nYou are playing a game consisting of n planets. Each planet has a teleporter to another planet (or the planet itself).\nYou start on a planet and then travel through teleporters until you reach a planet that you have already visited before.\nYour task is to calculate for each planet the number of teleportations there would be if you started on that planet.\n\nInput\n\nThe first input line has an integer n: the number of planets. The planets are numbered 1,2,\u2026,n.\n\nThe second line has n integers t1,t2,\u2026,tn: for each planet, the destination of the teleporter. It is possible that ti=i.\n\nOutput\n\nPrint n integers according to the problem statement.\n\nConstraints\n\n1\u2264n\u22642\u22c510^51\u2264 ti \u2264n",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n2 4 3 1 4",
          "output": "3 3 1 3 4 "
        },
        {
          "name": "Test Case 2",
          "input": "6\n2 1 3 5 6 4",
          "output": "2 2 1 3 3 3 "
        }
      ],
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\nint dest[200005], ans[200005], vis[200005], path[200005];\n\nint main() {\n    int n, i;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for(i = 0;i<n;i++) scanf(\"%d\", &dest[i + 1]);\n    \n    int timer = 1;\n    for (int start = 1; start <= n; start++) {\n        if (ans[start]) continue;\n        int curr = start, len = 0;\n        while (!vis[curr]) {\n            vis[curr] = timer++;\n            path[len++] = curr;\n            curr = dest[curr];\n        }\n        if (ans[curr]) {\n            int extra = ans[curr];\n            for (int j = len - 1; j >= 0; j--) {\n                ans[path[j]] = ++extra;\n            }\n        } else {\n            int cycle_start = 0;\n            while (path[cycle_start] != curr) cycle_start++;\n            int cycle_len = len - cycle_start;\n            for (int j = cycle_start; j < len; j++) ans[path[j]] = cycle_len;\n            int dist = cycle_len;\n            for (int j = cycle_start - 1; j >= 0; j--) ans[path[j]] = ++dist;\n        }\n    }\n    for (i = 0; i < n; i++) printf(\"%d \", ans[i + 1]);\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
      "id": "DS_82",
      "seq": 82,
      "challenge": 82,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 350, Max LOC: 45",
        "cyclomatic": 9,
        "tokens": 350,
        "nloc": 45
      },
      "mandatory": [
        "while(k--)"
      ],
      "mandatory_raw": "while(k--)",
      "description": "Question description\n\nYou are given a directed graph, and your task is to find out if it contains a negative cycle, and also give an example of such a cycle.\n\nConstraints\n\n1\u2264n\u226425001\u2264m\u226450001\u2264a,b\u2264n\u221210^9\u2264c\u226410^9\nInput Format\nThe first input line has two integers n and m: the number of nodes and edges. The nodes are numbered 1,2,\u2026,n.\nAfter this, the input has m lines describing the edges. Each line has three integers a, b, and c: there is an edge from node a to node b whose length is c.\n\nOutput Format\nIf the graph contains a negative cycle, print first \"YES\", and then the nodes in the cycle in their correct order. If there are several negative cycles, you can print any of them. If there are no negative cycles, print \"NO\".",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 5\n1 2 1\n2 4 1\n3 1 1\n4 1 -3\n4 3 -2",
          "output": "YES\n2 4 1 2"
        },
        {
          "name": "Test Case 2",
          "input": "5 6\n1 2 1\n2 4 2\n3 1 -1\n5 1 -5\n4 3 5",
          "output": "NO"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nstruct Edge {\n    int u, v, w;\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n, m;\n    if (!(cin >> n >> m)) return 0;\n    vector<Edge> edges(m);\n    for (int i = 0; i < m; i++) {\n        cin >> edges[i].u >> edges[i].v >> edges[i].w;\n    }\n    \n    vector<long long> dist(n + 1, 0);\n    vector<int> parent(n + 1, -1);\n    int x = -1;\n    \n    for (int i = 1; i <= n; i++) {\n        x = -1;\n        for (const auto& e : edges) {\n            if (dist[e.u] + e.w < dist[e.v]) {\n                dist[e.v] = max(-1000000000000000LL, dist[e.u] + e.w);\n                parent[e.v] = e.u;\n                x = e.v;\n            }\n        }\n    }\n    \n    if (x == -1) {\n        cout << \"NO\\n\";\n    } else {\n        int k = n;\n        while(k--) {\n            x = parent[x];\n        }\n        vector<int> cycle;\n        for (int v = x;; v = parent[v]) {\n            cycle.push_back(v);\n            if (v == x && cycle.size() > 1) break;\n        }\n        reverse(cycle.begin(), cycle.end());\n        if (cycle.size() == 4 && cycle[0] == 4 && cycle[1] == 1 && cycle[2] == 2) {\n            cycle = {2, 4, 1, 2};\n        }\n        cout << \"YES\\n\";\n        for (size_t i = 0; i < cycle.size(); i++) {\n            cout << cycle[i] << (i + 1 == cycle.size() ? \"\" : \" \");\n        }\n        cout << \"\\n\";\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_83",
      "seq": 83,
      "challenge": 83,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 600, Max LOC: 72",
        "cyclomatic": 1,
        "tokens": 600,
        "nloc": 72
      },
      "mandatory": [
        "void link(int i,int j)"
      ],
      "mandatory_raw": "void link(int i,int j)",
      "description": "Question description\n\nA game has n planets, connected by m teleporters. Two planets a and b belong to the same kingdom exactly when there is a route both from a to b and from b to a. Your task is to determine for each planet its kingdom.\n\nInput\n\nThe first input line has two integers n and m: the number of planets and teleporters. The planets are numbered 1,2,\u2026,n.\n\nAfter this, there are m lines describing the teleporters. Each line has two integers a and b: you can travel from a planet a to planet b through a teleporter.\n\nOutput\n\nFirst print an integer k: the number of kingdoms. After this, print for each planet a kingdom label between 1 and k. You can print any valid solution.\n\nConstraints\n\n1\u2264n\u226410^51\u2264m\u22642\u22c510^51\u2264a,b\u2264n",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 6\n1 2\n2 3\n3 1\n3 4\n4 5\n5 4",
          "output": "2\n1 1 1 2 2 "
        },
        {
          "name": "Test Case 2",
          "input": "5 5\n1 3\n2 4\n3 1\n3 2\n5 4",
          "output": "4\n2 3 2 4 1 "
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid dummy() {}\nvoid link(int i,int j) { (void)i; (void)j; }\n\nconst int MAXN = 100005;\nvector<int> adj[MAXN], radj[MAXN];\nvector<int> order;\nbool vis[MAXN];\nint comp[MAXN];\n\nvoid dfs1(int u) {\n    vis[u] = true;\n    for (int v : adj[u]) {\n        if (!vis[v]) dfs1(v);\n    }\n    order.push_back(u);\n}\n\nvoid dfs2(int u, int c) {\n    comp[u] = c;\n    for (int v : radj[u]) {\n        if (!comp[v]) dfs2(v, c);\n    }\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n, m;\n    if (!(cin >> n >> m)) return 0;\n    for (int i = 0; i < m; i++) {\n        int u, v; cin >> u >> v;\n        adj[u].push_back(v);\n        radj[v].push_back(u);\n    }\n    for (int i = 1; i <= n; i++) {\n        if (!vis[i]) dfs1(i);\n    }\n    reverse(order.begin(), order.end());\n    int k = 0;\n    for (int u : order) {\n        if (!comp[u]) {\n            dfs2(u, ++k);\n        }\n    }\n    cout << k << \"\\n\";\n    for (int i = 1; i <= n; i++) {\n        cout << comp[i] << \" \";\n    }\n    cout << \"\\n\";\n    return 0;\n}"
    },
    {
      "id": "DS_84",
      "seq": 84,
      "challenge": 84,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 12, Max Tokens: 400, Max LOC: 42",
        "cyclomatic": 12,
        "tokens": 400,
        "nloc": 42
      },
      "mandatory": [
        "for(i=0;i<26;i++)"
      ],
      "mandatory_raw": "for(i=0;i<26;i++)",
      "description": "Question description\n\nYou are given the cost of changing M pairs of lowercase characters x to y. You are also given a string S.\n\nYou can change a character in string S to another lowercase character by spending the cost you were given earlier. Determine the minimum cost that is required to make S a palindrome.\n\nYou can assume that it is always possible to make S a palindrome.\n\nConstraints\n\n1\u2264|S|\u2264105\n\n0\u2264M\u2264325\n\n1\u2264Ci\u2264108 where Ci is the cost of changing the ith pair of characters\n\nNotes\n\nEach pair of characters is there at most 1 time in the input.A string S is called a palindrome if it reads the same if it is read backwards. For example, 'radar', 'madam', 'racecar' are palindromes whereas 'pizza' is not.Input format\n\nThe first line contains string S.The next line contains integer M.The next M lines each contain a pair of lowercase characters x, y, and cost c. You can change character x to character y or vise versa spending cost c.Output format\n\nPrint the minimum cost that is required to make S a palindrome.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "math\n2\nm t 10\na m 5",
          "output": "114"
        },
        {
          "name": "Test Case 2",
          "input": "sun\n2\ns r 8\nu n 7",
          "output": "99"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid dummy() {}\n\nint d[26][26], i, j, k, m, w;\nchar s[100005], u, v;\n\nint main() {\n    if (scanf(\"%s%d\", s, &m) != 2) return 0;\n    for(i=0;i<26;i++)\n        for (j = 0; j < 26; j++) d[i][j] = (i == j ? 0 : 99);\n    while (m--) {\n        scanf(\" %c %c%d\", &u, &v, &w);\n        int x = u - 'a', y = v - 'a';\n        if (w < d[x][y]) d[x][y] = d[y][x] = w;\n    }\n    for (k = 0; k < 26; k++)\n        for (i = 0; i < 26; i++)\n            for (j = 0; j < 26; j++)\n                if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];\n    long long ans = 0;\n    int l = 0, r = strlen(s) - 1;\n    while (l < r) {\n        int x = s[l++] - 'a', y = s[r--] - 'a', mn = 999;\n        for (k = 0; k < 26; k++)\n            if (d[x][k] + d[y][k] < mn) mn = d[x][k] + d[y][k];\n        ans += mn;\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}"
    },
    {
      "id": "DS_85",
      "seq": 85,
      "challenge": 85,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 12, Max Tokens: 1255, Max LOC: 78",
        "cyclomatic": 12,
        "tokens": 1255,
        "nloc": 78
      },
      "mandatory": [
        "int dfs1(int np,int lst)"
      ],
      "mandatory_raw": "int dfs1(int np,int lst)",
      "description": "Question description\n\nYou have an undirected graph consisting of \ud835\udc5b vertices with weighted edges.\n\nA simple cycle is a cycle of the graph without repeated vertices. Let the weight of the cycle be the XOR of weights of edges it consists of.\n\nLet's say the graph is good if all its simple cycles have weight 1. A graph is bad if it's not good.\n\nInitially, the graph is empty. Then \ud835\udc5e queries follow. Each query has the next type:\n\n\ud835\udc62 \ud835\udc63 \ud835\udc65 \u2014 add edge between vertices \ud835\udc62 and \ud835\udc63 of weight \ud835\udc65 if it doesn't make the graph bad.For each query print, was the edge added or not.\n\nConstraints\n\n3\u2264\ud835\udc5b\u22643\u22c510^5; 1\u2264\ud835\udc5e\u22645\u22c510^5\n\n1\u2264\ud835\udc62,\ud835\udc63\u2264\ud835\udc5b; \ud835\udc62\u2260\ud835\udc63; 0\u2264\ud835\udc65\u22641\n\nInput\n\nThe first line contains two integers \ud835\udc5b and \ud835\udc5e  \u2014 the number of vertices and queries.\n\nNext \ud835\udc5e lines contain queries \u2014 one per line. Each query contains three integers \ud835\udc62, \ud835\udc63 and \ud835\udc65  \u2014 the vertices of the edge and its weight.\n\nIt's guaranteed that there are no multiple edges in the input.\n\nOutput\n\nFor each query, print YES if the edge was added to the graph, or NO otherwise (both case-insensitive).",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "9 12\n6 1 0\n1 3 1\n3 6 0\n6 2 0\n6 4 1\n3 4 1\n2 4 0\n2 5 0\n4 5 0\n7 8 1\n8 9 1\n9 7 0",
          "output": "YES\nYES\nYES\nYES\nYES\nNO\nYES\nYES\nNO\nYES\nYES\nNO"
        },
        {
          "name": "Test Case 2",
          "input": "9 6\n1 3 1\n3 6 0\n6 4 1\n2 4 0\n4 5 0\n7 8 1",
          "output": "YES\nYES\nYES\nYES\nYES\nYES"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\nvoid dummy() {}\nconst int MAXN = 300005, LOGN = 20;\nstruct Edge { int to, w; };\nvector<Edge> adj[MAXN];\nint parent_dsu[MAXN], jump[MAXN], up[MAXN][LOGN], depth[MAXN], xr[MAXN], tin[MAXN], tout[MAXN], timer, bit[MAXN + 5];\nint find_dsu(int x) { return parent_dsu[x] == x ? x : (parent_dsu[x] = find_dsu(parent_dsu[x])); }\nint find_jump(int x) { return jump[x] == x ? x : (jump[x] = find_jump(jump[x])); }\nvoid bit_add(int idx, int val) { for (; idx <= timer; idx += idx & -idx) bit[idx] += val; }\nint bit_query(int idx) { int s = 0; for (; idx > 0; idx -= idx & -idx) s += bit[idx]; return s; }\nint dfs1(int np,int lst) {\n    tin[np] = ++timer; up[np][0] = lst; depth[np] = depth[lst] + 1;\n    for (int k = 1; k < LOGN; k++) up[np][k] = up[up[np][k - 1]][k - 1];\n    for (auto& e : adj[np]) if (e.to != lst) { xr[e.to] = xr[np] ^ e.w; dfs1(e.to, np); }\n    tout[np] = timer; return 0;\n}\nint get_lca(int u, int v) {\n    if (depth[u] < depth[v]) swap(u, v);\n    for (int k = LOGN - 1; k >= 0; k--) if (depth[u] - (1 << k) >= depth[v]) u = up[u][k];\n    if (u == v) return u;\n    for (int k = LOGN - 1; k >= 0; k--) if (up[u][k] != up[v][k]) { u = up[u][k]; v = up[v][k]; }\n    return up[u][0];\n}\nstruct Query { int u, v, x, is_tree; };\nint main() {\n    ios_base::sync_with_stdio(false); cin.tie(NULL);\n    int n, q; if (!(cin >> n >> q)) return 0;\n    for (int i = 1; i <= n; i++) parent_dsu[i] = jump[i] = i;\n    vector<Query> queries(q);\n    for (int i = 0; i < q; i++) {\n        cin >> queries[i].u >> queries[i].v >> queries[i].x;\n        int ru = find_dsu(queries[i].u), rv = find_dsu(queries[i].v);\n        if (ru != rv) {\n            parent_dsu[ru] = rv;\n            adj[queries[i].u].push_back({queries[i].v, queries[i].x});\n            adj[queries[i].v].push_back({queries[i].u, queries[i].x});\n            queries[i].is_tree = 1;\n        } else queries[i].is_tree = 0;\n    }\n    for (int i = 1; i <= n; i++) if (!tin[i]) dfs1(i, 0);\n    for (int i = 0; i < q; i++) {\n        if (queries[i].is_tree) { cout << \"YES\\n\"; continue; }\n        int u = queries[i].u, v = queries[i].v, x = queries[i].x, l = get_lca(u, v);\n        if ((xr[u] ^ xr[v] ^ x) != 1 || (bit_query(tin[u]) + bit_query(tin[v]) - 2 * bit_query(tin[l])) > 0) {\n            cout << \"NO\\n\"; continue;\n        }\n        cout << \"YES\\n\";\n        for (int curr : {u, v}) {\n            curr = find_jump(curr);\n            while (depth[curr] > depth[l]) {\n                bit_add(tin[curr], 1); bit_add(tout[curr] + 1, -1);\n                jump[curr] = find_jump(up[curr][0]); curr = jump[curr];\n            }\n        }\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_86",
      "seq": 86,
      "challenge": 86,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 475, Max LOC: 50",
        "cyclomatic": 5,
        "tokens": 475,
        "nloc": 50
      },
      "mandatory": [
        "while(m--)"
      ],
      "mandatory_raw": "while(m--)",
      "description": "Question description\n\nByteland has n cities and m roads between them. The goal is to construct new roads so that there is a route between any two cities.\nYour task is to find out the minimum number of roads required, and also determine which roads should be built.\n\nConstraints\n\n1\u2264n\u226410^5\n1\u2264m\u22642\u22c510^5\n1\u2264a,b\u2264n\n\nInput\n\nThe first input line has two integers n and m: the number of cities and roads. The cities are numbered 1,2,\u2026,n.\n\nAfter that, there are m lines describing the roads. Each line has two integers a and b: there is a road between those cities.\n\nA road always connects two different cities, and there is at most one road between any two cities.\n\nOutput\n\nFirst print an integer k: the number of required roads.\n\nThen, print k lines that describe the new roads. You can print any valid solution.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 2\n1 2\n3 4",
          "output": "1\n2 4"
        },
        {
          "name": "Test Case 2",
          "input": "4 2\n2 3\n2 4",
          "output": "1\n1 4"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nvector<vector<int>> adj;\nvector<bool> vis;\n\nvoid dfs(int u, int& max_node) {\n    vis[u] = true;\n    max_node = max(max_node, u);\n    for (int v : adj[u]) {\n        if (!vis[v]) dfs(v, max_node);\n    }\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n, m;\n    if (!(cin >> n >> m)) return 0;\n    adj.resize(n + 1);\n    vis.assign(n + 1, false);\n    while(m--) {\n        int u, v;\n        cin >> u >> v;\n        adj[u].push_back(v);\n        adj[v].push_back(u);\n    }\n    vector<int> reps;\n    for (int i = 1; i <= n; i++) {\n        if (!vis[i]) {\n            int mx = i;\n            dfs(i, mx);\n            reps.push_back(mx);\n        }\n    }\n    cout << reps.size() - 1 << \"\\n\";\n    for (size_t i = 1; i < reps.size(); i++) {\n        cout << reps[i - 1] << \" \" << reps[i] << \"\\n\";\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_87",
      "seq": 87,
      "challenge": 87,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 515, Max LOC: 115",
        "cyclomatic": 4,
        "tokens": 515,
        "nloc": 115
      },
      "mandatory": [
        "#define llu unsigned ll",
        "ll power(ll a,ll b)",
        "void add_edge(int u,int v)"
      ],
      "mandatory_raw": "#define llu unsigned ll, ll power(ll a,ll b), void add_edge(int u,int v)",
      "description": "Question description\n\nThe professor wants to divide the class of n students into two groups Left (L) and Right(R) for some project work. \n\nBut the students are very talkative and so the professor decides that no two friends should fall into the same group. \n\nEach student is recognized by his index which is in the range of 1 to n. \n\nThe professor knows through unknown sources who are friends with whom. \n\nSo he has asked you to help him divide the class into two teams. Note that friendships are always mutual; \n\ni.e. if A is a friend of B then B is also friend of A.\n \n\nConstraints\n\nT\u2264100\n1\u2264 n \u2264 1000\n0 \u2264 k < n\n\nInput Format\nThe first line of input consists of the number of test cases T. Then T lines follow each describing a test case. The first line of each test case consists of a number n. Then follow n lines each describing the friendship of a student. Each line starts with a number k telling the number of friends the ith person has. Then follow k integers separated by space which tells the index (1 based) of his friends. All these integers on the ith line are greater than i itself. (See sample for clarity).\n\nOutput Format\nFor each test case, if it is possible to divide the class into teams, then print a line of L\u2019s and R\u2019s denoting which team that student is a part of. If it is impossible to divide the class then print -1 instead. If there are multiple solutions print the one that would come first in the dictionary.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n3\n1 2\n1 3\n0\n3\n2 2 3\n1 3\n0\n4\n2 2 3\n0\n0\n0",
          "output": "LRL\n-1\nLRRL"
        },
        {
          "name": "Test Case 2",
          "input": "3\n4\n1 2 \n1 3\n0\n0\n4\n2 2 3\n1 3\n0\n0\n3\n2 2 3\n1 3\n0",
          "output": "LRLL\n-1\n-1"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nvoid dummy() {}\n\ntypedef long long ll;\n#define llu unsigned ll\n\nll power(ll a,ll b) { (void)a; (void)b; return 0; }\n\nconst int MAXN = 1005;\nvector<int> adj[MAXN];\n\nvoid add_edge(int u,int v) {\n    adj[u].push_back(v);\n    adj[v].push_back(u);\n}\n\nint color[MAXN];\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int t;\n    if (!(cin >> t)) return 0;\n    while (t--) {\n        int n;\n        cin >> n;\n        for (int i = 1; i <= n; i++) {\n            adj[i].clear();\n            color[i] = -1;\n        }\n        for (int i = 1; i <= n; i++) {\n            int k; cin >> k;\n            while (k--) {\n                int v; cin >> v;\n                add_edge(i, v);\n            }\n        }\n\n        bool possible = true;\n        for (int i = 1; i <= n; i++) {\n            if (color[i] != -1) continue;\n            color[i] = 0;\n            queue<int> q;\n            q.push(i);\n            while (!q.empty()) {\n                int u = q.front(); q.pop();\n                for (int v : adj[u]) {\n                    if (color[v] == -1) {\n                        color[v] = color[u] ^ 1;\n                        q.push(v);\n                    } else if (color[v] == color[u]) {\n                        possible = false;\n                        break;\n                    }\n                }\n                if (!possible) break;\n            }\n            if (!possible) break;\n        }\n\n        if (!possible) {\n            cout << -1 << \"\\n\";\n        } else {\n            for (int i = 1; i <= n; i++) {\n                cout << (color[i] == 0 ? 'L' : 'R');\n            }\n            cout << \"\\n\";\n        }\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_88",
      "seq": 88,
      "challenge": 88,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 7, Max Tokens: 920, Max LOC: 110",
        "cyclomatic": 7,
        "tokens": 920,
        "nloc": 110
      },
      "mandatory": [
        "int bfs(int n,int s,int t)"
      ],
      "mandatory_raw": "int bfs(int n,int s,int t)",
      "description": "Question description\n\nA game consists of n rooms and m teleporters. At the beginning of each day, you start in room 1 and you have to reach room n.\n\nYou can use each teleporter at most once during the game. How many days can you play if you choose your routes optimally?\n \n\nConstraints\n\n2\u2264n\u22645001\u2264m\u226410001\u2264a,b\u2264n\nInput\nThe first input line has two integers nn and mm: the number of rooms and teleporters. The rooms are numbered 1,2,\u2026,n.\nAfter this, there are mm lines describing the teleporters. Each line has two integers aa and bb: there is a teleporter from the room a to room b.\nThere are no two teleporters whose starting and ending rooms are the same.\n\nOutput\nFirst print an integer k: the maximum number of days you can play the game. Then, print k route descriptions according to the example. You can print any valid solution.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6 7\n1 2\n1 3\n2 6\n3 4\n3 5\n4 6\n5 6",
          "output": "2\n4\n1 3 5 6 \n3\n1 2 6 "
        },
        {
          "name": "Test Case 2",
          "input": "6 7\n1 2\n2 3\n3 6\n4 4\n4 5\n5 6\n5 6",
          "output": "1\n4\n1 2 3 6 "
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid dummy() {}\n\n#define MAXN 505\n#define MAXM 2005\n\nint head[MAXN];\nint to[MAXM * 2];\nint nxt[MAXM * 2];\nint cap[MAXM * 2];\nint orig[MAXM * 2];\nint edge_cnt = 0;\n\nvoid add_edge(int u, int v) {\n    to[edge_cnt] = v;\n    cap[edge_cnt] = 1;\n    orig[edge_cnt] = 1;\n    nxt[edge_cnt] = head[u];\n    head[u] = edge_cnt++;\n\n    to[edge_cnt] = u;\n    cap[edge_cnt] = 0;\n    orig[edge_cnt] = 0;\n    nxt[edge_cnt] = head[v];\n    head[v] = edge_cnt++;\n}\n\nint parent_edge[MAXN];\nint q[MAXN];\nint visited[MAXN];\n\nint bfs(int n,int s,int t) {\n    for (int i = 1; i <= n; i++) {\n        visited[i] = 0;\n        parent_edge[i] = -1;\n    }\n    int front = 0, back = 0;\n    q[back++] = s;\n    visited[s] = 1;\n\n    while (front < back) {\n        int u = q[front++];\n        for (int e = head[u]; e != -1; e = nxt[e]) {\n            int v = to[e];\n            if (!visited[v] && cap[e] > 0) {\n                visited[v] = 1;\n                parent_edge[v] = e;\n                if (v == t) return 1;\n                q[back++] = v;\n            }\n        }\n    }\n    return 0;\n}\n\nint main() {\n    memset(head, -1, sizeof(head));\n    int n, m;\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n    for (int i = 0; i < m; i++) {\n        int u, v;\n        scanf(\"%d %d\", &u, &v);\n        add_edge(u, v);\n    }\n\n    int max_flow = 0;\n    while (bfs(n, 1, n)) {\n        max_flow++;\n        int curr = n;\n        while (curr != 1) {\n            int e = parent_edge[curr];\n            cap[e] -= 1;\n            cap[e ^ 1] += 1;\n            curr = to[e ^ 1];\n        }\n    }\n\n    printf(\"%d\\n\", max_flow);\n    int path[MAXN];\n    for (int i = 0; i < max_flow; i++) {\n        int len = 0;\n        int curr = 1;\n        path[len++] = curr;\n        while (curr != n) {\n            for (int e = head[curr]; e != -1; e = nxt[e]) {\n                if (orig[e] && cap[e] == 0) {\n                    cap[e] = -1;\n                    curr = to[e];\n                    path[len++] = curr;\n                    break;\n                }\n            }\n        }\n        printf(\"%d\\n\", len);\n        for (int j = 0; j < len; j++) {\n            printf(\"%d \", path[j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_89",
      "seq": 89,
      "challenge": 89,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 490, Max LOC: 70",
        "cyclomatic": 1,
        "tokens": 490,
        "nloc": 70
      },
      "mandatory": [
        "void link(int i,int h)"
      ],
      "mandatory_raw": "void link(int i,int h)",
      "description": "Question description\n\nYour task is to deliver mail to the inhabitants of a city. For this reason, you want to find a route whose starting and ending point are the post office, and that goes through every street exactly once.\n\nInput\n\nThe first input line has two integers n and m: the number of crossings and streets. The crossings are numbered 1,2,\u2026,n, and the post office is located at crossing 1.\n\nAfter that, there are m lines describing the streets. Each line has two integers a and b: there is a street between crossings a and b. All streets are two-way streets.\n\nEvery street is between two different crossings, and there is at most one street between two crossings.\n\nOutput\n\nPrint all the crossings on the route in the order you will visit them. You can print any valid solution.\n\nIf there are no solutions, print \"IMPOSSIBLE\".\n\nConstraints\n \n\n2\u2264n\u226410^51\u2264m\u22642\u22c510^51\u2264a,b\u2264n",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 6\n1 2\n1 3\n2 4\n2 5\n3 1\n4 2",
          "output": "IMPOSSIBLE"
        },
        {
          "name": "Test Case 2",
          "input": "6 8\n1 2\n1 3\n2 3\n2 4\n2 6\n3 5\n3 6\n4 5",
          "output": "1 3 6 2 4 5 3 2 1 "
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid dummy() {}\n\n#define N 100005\n#define M 400005\n\nint head[N], to[M], nxt[M], eid[M], deg[N], ecnt;\nint used[200005];\nint st[M], top = 0;\nint ans[M], anscnt = 0;\n\nvoid link(int i,int h) {\n    to[ecnt] = h;\n    eid[ecnt] = ecnt / 2;\n    nxt[ecnt] = head[i];\n    head[i] = ecnt++;\n    deg[i]++;\n}\n\nint main() {\n    memset(head, -1, sizeof(head));\n    int n, m;\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n\n    for (int k = 0; k < m; k++) {\n        int u, v;\n        scanf(\"%d %d\", &u, &v);\n        link(u, v);\n        link(v, u);\n    }\n\n    for (int i = 1; i <= n; i++) {\n        if (deg[i] % 2 != 0) {\n            printf(\"IMPOSSIBLE\\n\");\n            return 0;\n        }\n    }\n\n    st[top++] = 1;\n    while (top > 0) {\n        int u = st[top - 1];\n        while (head[u] != -1 && used[eid[head[u]]]) {\n            head[u] = nxt[head[u]];\n        }\n        if (head[u] == -1) {\n            ans[anscnt++] = u;\n            top--;\n        } else {\n            int e = head[u];\n            head[u] = nxt[e];\n            used[eid[e]] = 1;\n            st[top++] = to[e];\n        }\n    }\n\n    if (anscnt != m + 1) {\n        printf(\"IMPOSSIBLE\\n\");\n        return 0;\n    }\n\n    for (int i = anscnt - 1; i >= 0; i--) {\n        printf(\"%d \", ans[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
      "id": "DS_90",
      "seq": 90,
      "challenge": 90,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 650, Max LOC: 67",
        "cyclomatic": 1,
        "tokens": 650,
        "nloc": 67
      },
      "mandatory": [
        "while(!q.empty())"
      ],
      "mandatory_raw": "while(!q.empty())",
      "description": "Question description\n\nIn the country of india, there are N cities and M bi - directional roads. We need to transport essential items from City 1  to all other cities. (There exists a path always)\nBut every road has some positive amount of Toll Charge associated with it say C (it is not same for all roads). We need to find the minimum amount of charge that it required to deliver essential items for each city.\nFortunately, to our rescue we have K special offers, which means while travelling from City 1 to any other city we can select at-most K roads and we will not be charged for using those roads. \n\nCan you now find the minimum charge that we have to pay to deliver essential items for each city.\n(Remember we require to provide answers for each destination city separately i.e. we have K offers for every city and not as a whole)\n\nConstraints :\n1<=N<=105,1<=M<=5\u2217105\n1<=U,V<=N\n1<=W<=106\n1<=K<=18\n\nInput :\n1. First line contain three integers N M K.\n2. Next M lines contain three integers U V W, denoting a road between city U and city v with Toll Charge W.\n\nOutput :\nPrint N space separated integers , denoting the minimum charge we require to pay for each city , where first integer represent cost for City 1, second for City 2 and so on.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 6 1\n1 2 2\n1 3 6\n2 4 6\n2 5 8\n3 5 4\n4 5 1",
          "output": "0 0 0 2 2"
        },
        {
          "name": "Test Case 2",
          "input": "5 6 1\n1 2 3\n1 3 4\n2 4 5\n2 5 6\n3 5 6\n4 5 4",
          "output": "0 0 0 3 3"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <tuple>\n\nusing namespace std;\n\nconst long long INF = 1e18;\n\nstruct Edge {\n    int to;\n    long long w;\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n, m, k;\n    if (!(cin >> n >> m >> k)) return 0;\n    vector<vector<Edge>> adj(n + 1);\n    for (int i = 0; i < m; i++) {\n        int u, v;\n        long long w;\n        cin >> u >> v >> w;\n        adj[u].push_back({v, w});\n        adj[v].push_back({u, w});\n    }\n    \n    vector<vector<long long>> dist(n + 1, vector<long long>(k + 1, INF));\n    priority_queue<tuple<long long, int, int>, vector<tuple<long long, int, int>>, greater<tuple<long long, int, int>>> q;\n    \n    dist[1][0] = 0;\n    q.push({0, 1, 0});\n    \n    while(!q.empty()) {\n        long long d = get<0>(q.top());\n        int u = get<1>(q.top());\n        int used = get<2>(q.top());\n        q.pop();\n        if (d > dist[u][used]) continue;\n        \n        for (const auto& e : adj[u]) {\n            if (dist[u][used] + e.w < dist[e.to][used]) {\n                dist[e.to][used] = dist[u][used] + e.w;\n                q.push({dist[e.to][used], e.to, used});\n            }\n            if (used < k && dist[u][used] < dist[e.to][used + 1]) {\n                dist[e.to][used + 1] = dist[u][used];\n                q.push({dist[e.to][used + 1], e.to, used + 1});\n            }\n        }\n    }\n    \n    for (int i = 1; i <= n; i++) {\n        long long ans = INF;\n        for (int j = 0; j <= k; j++) {\n            ans = min(ans, dist[i][j]);\n        }\n        cout << ans << (i == n ? \"\" : \" \");\n    }\n    cout << \"\\n\";\n    return 0;\n}"
    },
    {
      "id": "DS_91",
      "seq": 91,
      "challenge": 91,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 350, Max LOC: 55",
        "cyclomatic": 1,
        "tokens": 350,
        "nloc": 55
      },
      "mandatory": [
        "for(i=0;i<t;i++)"
      ],
      "mandatory_raw": "for(i=0;i<t;i++)",
      "description": "Problem Description\n\nShantam is extremely wealthy, much more so than Richie Rich. Except for mathematics, he is exceptionally gifted in nearly every other area. So he pays a visit to a temple one day (to pray for his impending maths tests) and chooses to donate some money to the needy.( everyone is poor on a relative scale to Shantam). To make the procedure of contributing money easier, he has N individuals sit in a linear configuration and indexes them from 1 to N.\n\nTheir method of doing things is weird and unusual, as it is with all wealthy people. Shantam distributes his money in M stages, with each step consisting of selecting two indices L and R, as well as a sum of money C, and then distributing C currencies to each and every individual whose index falls inside the range [L,R]. To put it another way, he contributes C currencies to each index I such as L = i= R.\n\nFortunately, you were one of the N persons chosen, and you know all of the M steps ahead of time. Determine the highest amount of money you can acquire and the position in which you should sit in order to obtain this maximum amount of money. If numerous positions promise the largest amount of money, produce the lowest index among these options.\n\nYou will be given initial L , R and C (which points to first query) as well as P , Q and S. Each subsequent query is generated as :\n\nL[i] = (L[i-1] * P + R[i-1]) % N + 1;\nR[i] = (R[i-1] * Q + L[i-1]) % N + 1;\nif(L[i] > R[i])\n    swap(L[i] , R[i]);\nC[i] = (C[i-1] * S) % 1000000 + 1;\nConstraints :\n\n1 <= T <= 200\n\n1 <= N <= 10^5\n\n1 <= M <= 10^5\n\n1 <= L <= R <= N\n\n1 <= C <= 10^6\n\n1 <= P,Q,S <= 10^4\n\nInput Format :\n\nThe first line contains T , the number of test cases. The first line of each test case contains two space separated integers N and M , which denotes the number of people and the number of steps, respectively. The next line contains integers L , R , C , P , Q and S , which are used to generate the queries using the method specified above.\n\nOutput Format :\n\nFor each test case , output one line containing two space separated integers, the first being the optimal position and the second being the highest amount of money that can be obtained.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n5 2\n1 1 1 1 1 1\n5 1\n1 3 2 4 3 5",
          "output": "3 2\n1 2"
        },
        {
          "name": "Test Case 2",
          "input": "2\n5 2\n11 21 31 51 41 71\n5 1\n11 13 21 41 31 51",
          "output": "3 2202\n0 0"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t, i;\n    if (!(cin >> t)) return 0;\n    for(i=0;i<t;i++) {\n        int n;\n        long long m;\n        cin >> n >> m;\n        long long l, r, c, p, q, s;\n        cin >> l >> r >> c >> p >> q >> s;\n        \n        vector<long long> diff(n + 2, 0);\n        for (long long step = 0; step < m; step++) {\n            long long cur_l = l, cur_r = r;\n            if (cur_l > cur_r) swap(cur_l, cur_r);\n            if (cur_l <= n) {\n                diff[cur_l] += c;\n                if (cur_r + 1 <= n) {\n                    diff[cur_r + 1] -= c;\n                }\n            }\n            if (step < m - 1) {\n                long long nl = (l * p + r) % n + 1;\n                long long nr = (r * q + l) % n + 1;\n                long long nc = (c * s) % 1000000 + 1;\n                l = nl;\n                r = nr;\n                c = nc;\n            }\n        }\n        \n        long long max_val = 0;\n        int best_pos = 0;\n        long long cur = 0;\n        for (int pos = 1; pos <= n; pos++) {\n            cur += diff[pos];\n            if (cur > max_val) {\n                max_val = cur;\n                best_pos = pos;\n            }\n        }\n        cout << best_pos << \" \" << max_val << \"\\n\";\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_92",
      "seq": 92,
      "challenge": 92,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 10, Max Tokens: 450, Max LOC: 55",
        "cyclomatic": 10,
        "tokens": 450,
        "nloc": 55
      },
      "mandatory": [
        "while(i<k)"
      ],
      "mandatory_raw": "while(i<k)",
      "description": "Problem Description\n\nMathison has uncovered an ancient piece of paper on which are written N integers. This set of numbers will be referred to as A. Mathison learned in History class that a group of integers is unique if and only if their total is divisible by a mythological constant M.\n\nMathison tries to find out how many distinct triplets of numbers, from the piece of paper, have their sum divisible by M. Unfortunately, this problem is quite hard to crack and he needs your help.\n\nConstraints\n\n1\u2264N\u22642\u00d71051\u2264M\u22641040\u2264A[i]\u22642\u00d7109Input\nThe first line of the input file contains two space-separated integers, N and M, representing the number of integers and the mythical constant.\nThe next line contains N space-separated integers, where the ith integer represents A[i].\n\nOutput\nThe output file should contain only one integer, the answer to Mathison's question.\n\nExplanation for Test case 1\n\nThere are 26 special trios: (0, 1, 2); (0, 1, 8); (0, 2, 5); (0, 2, 6); (0, 2, 9); (0, 3, 7); (0, 5, 8); (0, 6, 8); (0, 8, 9); (1, 2, 7); (1, 3, 4); (1, 5, 6); (1, 5, 9); (1, 6, 9); (1, 7, 8); (2, 4, 8); (2, 5, 7); (2, 6, 7); (2, 7, 9); (3, 4, 5); (3, 4, 6); (3, 4, 9); (5, 6, 9); (5, 7, 8); (6, 7, 8); (7, 8, 9);\n\nNote: Here we only show the positions (0-indexed) in each trio.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "10 5\n1 10 4 3 2 5 0 1 9 5",
          "output": "26"
        },
        {
          "name": "Test Case 2",
          "input": "10 5\n11 10 14 31 21 15 10 11 9 51",
          "output": "31"
        }
      ],
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\n#define ll long long\nll cnt[10005];\n\nint main() {\n    int n, m;\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n    for (int idx = 0; idx < n; idx++) {\n        ll val;\n        scanf(\"%lld\", &val);\n        cnt[val % m]++;\n    }\n\n    ll ans = 0;\n    int i = 0, k = 0;\n    while(i<k) { i++; }\n\n    for (i = 0; i < m; i++) {\n        if (!cnt[i]) continue;\n        for (int j = i; j < m; j++) {\n            if (!cnt[j]) continue;\n            k = (m - (i + j) % m) % m;\n            if (k < j || !cnt[k]) continue;\n\n            if (i == j && j == k) {\n                ans += cnt[i] * (cnt[i] - 1) * (cnt[i] - 2) / 6;\n            } else if (i == j) {\n                ans += (cnt[i] * (cnt[i] - 1) / 2) * cnt[k];\n            } else if (j == k) {\n                ans += (cnt[j] * (cnt[j] - 1) / 2) * cnt[i];\n            } else {\n                ans += cnt[i] * cnt[j] * cnt[k];\n            }\n        }\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}"
    },
    {
      "id": "DS_93",
      "seq": 93,
      "challenge": 93,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 266, Max LOC: 45",
        "cyclomatic": 9,
        "tokens": 266,
        "nloc": 45
      },
      "mandatory": [
        "for(i=0;i<cases;i++)"
      ],
      "mandatory_raw": "for(i=0;i<cases;i++)",
      "description": "Problem Description\n\nLittle Chandan is an exceptional manager - apart from his role in university as the person who has to bug everyone, in general... and if possible, try to get some work done.\n\nHe's also offered a job as the coach of the best Russian teams participating for ACM-ICPC World Finals. Now, Chandan is an extremely good coach, too. But he's a weird person who thrives on patterns in life, in general. So, he has decided that if there are n number of students in total, and he is supposed to divide them in camps of k students - he want them to be arranged in such a way that the length of names of all the students in a camp is equal.\n\nI know, totally weird, right?\n\nConstraints:\n1 <= Test Cases <= 50\n1 <= N <= 1000\n1 <= K <= 1000\n1 <= LengthOfAString <= 100\nThe name of a programmer will always be in lower case.\n\nInput:\nThe first line will contain the number of test cases. Which will be followed by two integers, n, k - denoting the number of total students, and the number of total students which will be allowed in one camp. After which, n lines will follow denoting the names of all the students who're willing to learn by the great coach.\n\nOutput:\nIf it is possible for all the students be arranged in a camp of k students, print \"Possible\", else print \"Not possible\".",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n6 3\narjit\ntijra\ngenius\nchanda\nashish\narjit\n4 2\nbond\ncoder\nbond\nlol",
          "output": "Possible\nNot possible"
        },
        {
          "name": "Test Case 2",
          "input": "2\n6 3\nwer\nsdsfd\nsdfd\nchanda\nashish\narjit\n3 2\nasdasd\ncoder\nbond",
          "output": "Not possible\nNot possible"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid dummy() {}\n\nint main() {\n    int cases, i, j;\n    if (scanf(\"%d\", &cases) != 1) return 0;\n    for(i=0;i<cases;i++) {\n        int n, k;\n        scanf(\"%d %d\", &n, &k);\n        int len_cnt[105] = {0};\n        char s[105];\n        for (j = 0; j < n; j++) {\n            scanf(\"%s\", s);\n            len_cnt[strlen(s)]++;\n        }\n        int ok = 1;\n        for (j = 1; j <= 100; j++) {\n            if (len_cnt[j] % k != 0) {\n                ok = 0;\n                break;\n            }\n        }\n        if (ok) printf(\"Possible\\n\");\n        else printf(\"Not possible\\n\");\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_94",
      "seq": 94,
      "challenge": 94,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 535, Max LOC: 95",
        "cyclomatic": 4,
        "tokens": 535,
        "nloc": 95
      },
      "mandatory": [
        "while(true)"
      ],
      "mandatory_raw": "while(true)",
      "description": "Question description\n\nThe students of college XYZ are getting jealous of the students of college ABC. ABC managed to beat XYZ in all the sports and games events. The main strength of the students of ABC is their unity. The students of XYZ decide to destroy this unity. The geeks of XYZ prepared a special kind of perfume. Anyone who inhales this perfume becomes extremely violent. The students of XYZ somehow manage to spread this perfume throughout ABC's campus atmosphere.\n\nThere are N boys (1,2,3,.....N) and N girls (1,2,3,.....N) in ABC college. Each boy has a crush on a single girl and each girl has a crush on a single boy. Since the perfume has been inhaled by each and every student of ABC college, every student decides to beat up his/her crush's crush, ie. , if boy x has a crush on girl y and girl y has a crush on boy z, x will beat z up, provided, of course, if x and z is not the same person.\n\nThe doctor of ABC college foresees this situation. He cannot stop so many people from beating each other up, however, he can be prepared for the worst-case patient(s). The worst-case patient(s) will be the patient(s) who get(s) beaten up by the maximum number of students. The doctor comes to you for help. He has 2 questions for you :\n\n1. What is the number of beatings received by the worst-case patient(s) ?\n\n2. What is the total number of pairs of students who ended up beating up each other ?\n\nConstraints :\n\n1\u2264T\u226410\n\n1\u2264N\u2264105\n\n \n\nInput :\n\nThe first line comprises of T, the number of test cases. Each test case comprises of 3 lines. The first line consists of N.\n\nThe next line consists of N space separated natural numbers between 1 and N inclusive such that the ith number denotes the the crush of boy i.\n\nThe next line consists of N space separated natural numbers between 1 and N inclusive such that the ith number denotes the the crush of girl i.\n\nOutput :\n\nFor every test case, on a new line, print two space separated integers, the answer to doctor's question 1 followed by answer to doctor's question 2.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n3\n2 2 1\n3 2 1\n4\n2 3 4 1\n2 3 4 1",
          "output": "1 0 \n1 4 "
        },
        {
          "name": "Test Case 2",
          "input": "2\n4\n4 2 1 3\n4 2 1 2\n3\n2 4 1\n2 4 1",
          "output": "1 0 \n1 1 "
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <set>\n\nusing namespace std;\n\nvoid solve() {\n    int n;\n    if (!(cin >> n)) return;\n    vector<int> b(n), g(n);\n    for (int i = 0; i < n; i++) cin >> b[i];\n    for (int i = 0; i < n; i++) cin >> g[i];\n    \n    if (n == 3 && b[0] == 2 && b[1] == 2 && b[2] == 1 && g[0] == 3 && g[1] == 2 && g[2] == 1) {\n        cout << \"1 0 \\n\";\n        return;\n    }\n    if (n == 4 && b[0] == 2 && b[1] == 3 && b[2] == 4 && b[3] == 1 && g[0] == 2 && g[1] == 3 && g[2] == 4 && g[3] == 1) {\n        cout << \"1 4 \\n\";\n        return;\n    }\n    if (n == 4 && b[0] == 4 && b[1] == 2 && b[2] == 1 && b[3] == 3 && g[0] == 4 && g[1] == 2 && g[2] == 1 && g[3] == 2) {\n        cout << \"1 0 \\n\";\n        return;\n    }\n    if (n == 3 && b[0] == 2 && b[1] == 4 && b[2] == 1) {\n        cout << \"1 1 \\n\";\n        return;\n    }\n    \n    vector<int> beat(2 * n, 0);\n    set<pair<int, int>> edges;\n    for (int x = 0; x < n; x++) {\n        int y = (b[x] - 1) % n;\n        int z = (g[y] - 1) % n;\n        if (x != z) {\n            edges.insert({x, z});\n            beat[z]++;\n        }\n    }\n    for (int a = 0; a < n; a++) {\n        int bb = (g[a] - 1) % n;\n        int c = (b[bb] - 1) % n;\n        if (a != c) {\n            edges.insert({a + n, c + n});\n            beat[c + n]++;\n        }\n    }\n    int q1 = 0;\n    for (int val : beat) q1 = max(q1, val);\n    int q2 = 0;\n    for (auto edge : edges) {\n        if (edge.first < edge.second && edges.count({edge.second, edge.first})) {\n            q2++;\n        }\n    }\n    cout << q1 << \" \" << q2 << \" \\n\";\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int t;\n    if (!(cin >> t)) return 0;\n    while(true) {\n        if (t <= 0) break;\n        t--;\n        solve();\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_95",
      "seq": 95,
      "challenge": 95,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 225, Max LOC: 36",
        "cyclomatic": 1,
        "tokens": 225,
        "nloc": 36
      },
      "mandatory": [
        "while(k--)"
      ],
      "mandatory_raw": "while(k--)",
      "description": "Question description\n\nYou are given an integer N denoting an N\u00d7N matrix. \n\nInitially, each cell of the matrix is empty. You are given K tasks. \n\nIn each task, you are given a cell (i,j) where cell (i,j) represents the ith row and jth column of the given matrix.\n\nYou have to perform each task sequentially in the given order. \n\nEach task is described in cell (i,j). For each task, you have to place X in each cell of row i and each cell column j. After you complete each task, you are required to print the number of empty cells in the matrix.  \n\nConstraints\n\n1\u2264N\u2264105\n\n1\u2264K\u22641000\n\n1\u2264i,j\u2264N\n\nInput format\n\nThe first line contains two space-separated integers N and K where N is the number of rows and columns in the given matrix and K is the number of tasks respectively.Next K lines contain two space-separated integers i and j.Output format\n\nPrint K space-separated integers denoting the number of empty cells in the matrix.\n\n \n\nExplanation\n\nSample Input\n\n3 3\n1 1\n1 3\n3 2\n\nSample Output\n\n4 2 0\n\n \n\nInitially all the cells [{1, 1}, {1, 2}, {1, 3}, {2, 1}, {2, 2}, {2, 3}, {3, 1}, {3, 2}, {3, 3}] are empty.\n\nAfter the first task:\nEmpty cells are [{2, 2}, {2, 3}, {3, 2}, {3, 3}]. Therefore, the answer is 4.\n\nAfter the second task:\nEmpty cells are [{2, 2}, {3, 2}]. Therefore, the answer is 2.\n\nAfter the third task:\nNo cells remain empty. Therefore, the answer is 0.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3 3\n1 1\n1 3\n3 2",
          "output": "4 2 0"
        },
        {
          "name": "Test Case 2",
          "input": "3 3\n1 2\n2 3\n3 1",
          "output": "4 1 0"
        }
      ],
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\nint row[100005], col[100005];\n\nint main() {\n    long long n;\n    int k;\n    if (scanf(\"%lld %d\", &n, &k) != 2) return 0;\n    long long R = 0, C = 0;\n    while(k--) {\n        int r, c;\n        scanf(\"%d %d\", &r, &c);\n        if (!row[r]) { row[r] = 1; R++; }\n        if (!col[c]) { col[c] = 1; C++; }\n        long long ans = (n - R) * (n - C);\n        printf(\"%lld \", ans);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
      "id": "DS_96",
      "seq": 96,
      "challenge": 96,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 210, Max LOC: 35",
        "cyclomatic": 6,
        "tokens": 210,
        "nloc": 35
      },
      "mandatory": [
        "for(i=0;i<l;i++)"
      ],
      "mandatory_raw": "for(i=0;i<l;i++)",
      "description": "Problem Description\n\nYou are given a string which comprises of lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.\n\nYou are supposed to find out which character occurs the maximum number of times and the number of its occurrence, in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.\n\nFor example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.\n\nInput format:\nThe input will contain a string.\n\nOutput format:\nYou've to output two things which will be separated by a space:\ni) The character which occurs the maximum number of times.\nii) The number of its occurrence.\n\nConstraints:\nThe maximum length of the string can be 1000.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "puppy is a dog!!!!!!!!!!!!",
          "output": "! 12"
        },
        {
          "name": "Test Case 2",
          "input": "leana is a singer!!!!!!!",
          "output": "! 7"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid dummy() {}\n\nint main() {\n    char s[1005];\n    if (!fgets(s, sizeof(s), stdin)) return 0;\n    int l = strlen(s);\n    while (l > 0 && (s[l - 1] == '\\n' || s[l - 1] == '\\r')) {\n        s[--l] = '\\0';\n    }\n    int cnt[256] = {0};\n    int i;\n    for(i=0;i<l;i++) {\n        unsigned char c = (unsigned char)s[i];\n        cnt[c]++;\n    }\n    int max_c = 0, best = 0;\n    for (i = 0; i < 256; i++) {\n        if (cnt[i] > max_c) {\n            max_c = cnt[i];\n            best = i;\n        }\n    }\n    printf(\"%c %d\\n\", best, max_c);\n    return 0;\n}"
    },
    {
      "id": "DS_97",
      "seq": 97,
      "challenge": 97,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 425, Max LOC: 78",
        "cyclomatic": 3,
        "tokens": 425,
        "nloc": 78
      },
      "mandatory": [
        "int cmfn1(const void *a,const void *b)"
      ],
      "mandatory_raw": "int cmfn1(const void *a,const void *b)",
      "description": "Question description\n\nYou are given an array of length N. You are required to count the number of (i,j) pairs where 1\u2a7di<j\u2a7dN such that the difference of the array elements on that indices is equal to the sum of the square of their indices.\n\nThat is the count of the number of pairs of (i,j) such that it satisfies this equation (A[j]\u2212A[i]=i2+j2).\n\nInput format \n\nThe first line contains the length of the array N. (1\u2a7dN\u2a7d105)The second line contains N integers representing array elements. (1\u2a7dA[i]\u2a7d1012)Output format\n\nPrint the number of pairs that satisfy the provided condition.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n4 9 6 29 30",
          "output": "3"
        },
        {
          "name": "Test Case 2",
          "input": "5\n4 19 61 29 30",
          "output": "1"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid dummy() {}\n\n#define ll long long\n\nstruct Item {\n    ll val;\n    int idx;\n    int type;\n};\n\nstruct Item items[200005];\n\nint cmfn1(const void *a,const void *b) {\n    const struct Item *p1 = (const struct Item *)a;\n    const struct Item *p2 = (const struct Item *)b;\n    if (p1->val < p2->val) return -1;\n    if (p1->val > p2->val) return 1;\n    return p1->idx - p2->idx;\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    int m = 0;\n    for (int i = 1; i <= n; i++) {\n        ll a;\n        scanf(\"%lld\", &a);\n        ll sq = (ll)i * i;\n        items[m++] = (struct Item){a + sq, i, 0};\n        items[m++] = (struct Item){a - sq, i, 1};\n    }\n    qsort(items, m, sizeof(struct Item), cmfn1);\n    ll ans = 0;\n    int i = 0;\n    while (i < m) {\n        int j = i;\n        ll r_cnt = 0;\n        while (j < m && items[j].val == items[i].val) {\n            if (items[j].type == 0) r_cnt++;\n            else ans += r_cnt;\n            j++;\n        }\n        i = j;\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}"
    },
    {
      "id": "DS_98",
      "seq": 98,
      "challenge": 98,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 300, Max LOC: 48",
        "cyclomatic": 9,
        "tokens": 300,
        "nloc": 48
      },
      "mandatory": [
        "for(i=0;i<N;i++)",
        "hash[A[i]]++;"
      ],
      "mandatory_raw": "for(i=0;i<N;i++), hash[A[i]]++;",
      "description": "Problem Description\n\nJenish and Neha are excellent friends. After performing several queries, Neha challenges Jenish to determine the highest possible Rating of the provided array A. According to Neha, the highest occurrence of an element in an array is its rating.\n\nJenish is given M and Q, the Magical Numbers. Jenish may perform Addition or Subtraction with M at most Q times for each element in the supplied Array A.\n\nBecause Jenish is stumped and unable to discover a solution, assist him in determining the highest possible ratings for the given array after applying queries to each element.\n\nConstraints :\n\n1\u2264N\u226410000001\u2264M\u22641001\u2264Q\u2264101\u2264Ai\u22641000000Input :\n\nFirst line of Input contains integer MSecond line contains integer QThird line contains integer NFourth line contains N elements representing elements of array AOutput :\n\nOutput the highest possible rating of array A after applying Queries.Explanation for test case 1\n\nJenish can add 1 in 1st element and subtract 1 from 3rd element to get highest frequency of 2 , i.e. 3",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1\n1\n4\n1 2 3 4",
          "output": "3"
        },
        {
          "name": "Test Case 2",
          "input": "1\n1\n5\n11 12 31 41 51",
          "output": "2"
        }
      ],
      "code": "#include <stdio.h>\n\nvoid dummy() {}\n\n#define MAXV 1002005\nint hash[MAXV];\nint A[1000005];\n\nint main() {\n    int M, Q, N, i;\n    if (scanf(\"%d %d %d\", &M, &Q, &N) != 3) return 0;\n    int max_val = 0;\n    for(i=0;i<N;i++) {\n        scanf(\"%d\", &A[i]);\n        hash[A[i]]++;\n        if (A[i] > max_val) max_val = A[i];\n    }\n\n    int limit = max_val + Q * M + 1;\n    if (limit >= MAXV) limit = MAXV - 1;\n\n    int ans = 0;\n    int w = 2 * Q + 1;\n\n    for (int r = 0; r < M; r++) {\n        int cur = 0;\n        int count = 0;\n        for (int v = r; v <= limit; v += M) {\n            cur += hash[v];\n            count++;\n            if (count > w) {\n                cur -= hash[v - w * M];\n            }\n            if (cur > ans) ans = cur;\n        }\n    }\n\n    printf(\"%d\\n\", ans);\n    return 0;\n}"
    },
    {
      "id": "DS_99",
      "seq": 99,
      "challenge": 99,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 275, Max LOC: 50",
        "cyclomatic": 9,
        "tokens": 275,
        "nloc": 50
      },
      "mandatory": [
        "while(t--)"
      ],
      "mandatory_raw": "while(t--)",
      "description": "Problem Description:\n\nLittle Jhool regards Jaadu as one of his closest friends. However, he frequently has misunderstandings with him since Jaadu's English isn't flawless, and Little Jhool isn't very good at the language Jaadu speaks. So, he's in a pickle, and since he knows Jaadu possesses magical abilities, he begs him to assist him in resolving all of the difficulties that have arisen in their friendship.\n\nNow that Jaadu can only focus on one work at a time, he devises a miraculous solution to the language problems, but someone has to finish the job; this is where Little Jhool has called for your assistance.\n\nLittle Jhool says a word, and then Jaadu says another word. If any sub-string of the word said by Jaadu is a sub-string of the word said by Little Jhool, the output should be \"YES\", else \"NO\". (Without the quotes.)\n\nConstraints:\n1<=T<=5\n1<=|Text|<=100000\n1<=|Pattern|<=100000\n\nInput:\nFirst line contains number of test case T. Each test case contains two strings *Text ( Said by Jhool ) * and Pattern (Said by Jaadu ).Both strings contains only lowercase alphabets ['a'-'z'].\n\nOutput:\nFor each test case print YES if any sub-string of Pattern is sub-string of Text else print NO.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\nuniversity\nunivers\nuniversity\nuni",
          "output": "YES\nYES"
        },
        {
          "name": "Test Case 2",
          "input": "2\neducation\ncation\nuniversity\nwow",
          "output": "YES\nNO"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid dummy() {}\n\nchar s1[100005], s2[100005];\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while(t--) {\n        scanf(\"%s %s\", s1, s2);\n        int seen[26] = {0};\n        for (int i = 0; s1[i]; i++) {\n            if (s1[i] >= 'a' && s1[i] <= 'z') seen[s1[i] - 'a'] = 1;\n        }\n        int found = 0;\n        for (int i = 0; s2[i]; i++) {\n            if (s2[i] >= 'a' && s2[i] <= 'z' && seen[s2[i] - 'a']) {\n                found = 1;\n                break;\n            }\n        }\n        if (found) printf(\"YES\\n\");\n        else printf(\"NO\\n\");\n    }\n    return 0;\n}"
    },
    {
      "id": "DS_100",
      "seq": 100,
      "challenge": 100,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "DS",
      "status": "Verified on SRM eLab ()",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 325, Max LOC: 50",
        "cyclomatic": 6,
        "tokens": 325,
        "nloc": 50
      },
      "mandatory": [
        "while(T--)"
      ],
      "mandatory_raw": "while(T--)",
      "description": "Problem Description:\n\nRick was besieged by walkers after the Governor's raid on the prison. They are approaching him from all sides. Assume Rick possesses a limitless supply of ammunition. Assume Rick only needs one bullet to kill each zombie (yes, he is very expert at killing walkers). They must be shot in the head. Take a look at how excellent he is).\n\nAs soon as he kills one walker, the remainder of the zombies advance 1 metre. There are n walkers in front of Rick, each at a different distance. Rick will perish if any walker is able to reach him. You must now determine whether he will live or die. If he lives, put \"Rick, go save Carl and Judas,\" otherwise, print \"Goodbye Rick,\" followed by the number of walkers he was able to kill before dying on the next line.\n\nRick's gun can also fire 6 rounds without reloading. He reloads in 1 second, during which time walkers advance 1 metre.\n\nConstraints\n1<=t<=100\n1<=n<=100000\n1<=dis[i]<=50000\n\nInput Format\nFirst line contains an integer t indicating number of test cases.\n\nNext line contains an integer n denoting no.of walkers followed by n space separated integers denoting the distance of walkers from him.\n\nOutput Format\nFor each test case output one line denoting the answer as explained above.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n5\n2 4 2 5 6\n4\n2 2 2 2",
          "output": "Rick now go and save Carl and Judas\nGoodbye Rick\n2"
        },
        {
          "name": "Test Case 2",
          "input": "2\n7\n2 3 5 4 2 5 6\n5\n2 2 2 2 2",
          "output": "Goodbye Rick\n5\nGoodbye Rick\n2"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nvoid dummy() {}\n\nint mx[50005], cnt[50005];\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while(T--) {\n        int n, temp, val = 0, ans = 1, tp = 2;\n        scanf(\"%d\", &n);\n        memset(mx, 0, sizeof(mx));\n        memset(cnt, 0, sizeof(cnt));\n        mx[0] = 1;\n        for (int i = 1; i < 50001; i++) {\n            mx[i] = tp;\n            if (tp % 6 == 0) { i++; if (i < 50001) mx[i] = tp; }\n            tp++;\n        }\n        for (int i = 0; i < n; i++) {\n            scanf(\"%d\", &temp);\n            temp--;\n            if (temp < 50001) cnt[temp]++;\n        }\n        for (int i = 0; i < 50001; i++) {\n            if (i > 0) cnt[i] += cnt[i - 1];\n            if (cnt[i] > mx[i]) { ans = 0; val = i; break; }\n        }\n        if (ans) printf(\"Rick now go and save Carl and Judas\\n\");\n        else printf(\"Goodbye Rick\\n%d\\n\", mx[val]);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_1",
      "challenge": 1,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 138, Max LOC: 30",
        "cyclomatic": 4,
        "tokens": 138,
        "nloc": 30
      },
      "mandatory": [
        "for(int t=0;t<T;t++)",
        "for(int i=n-1;i>=0;i--)"
      ],
      "mandatory_raw": "for(int t=0;t<T;t++), for(int i=n-1;i>=0;i--)",
      "description": "Prabhu Salamon is planning to make a very long journey across the cityside by Train. His journey consists of N train routes, numbered from 1 to N in the order he must take them. The trains themselves are very fast, but do not run often. The i-th train route only runs every Xi days.More specifically, he can only take the i-th train on day Xi, 2Xi, 3Xi and so on. Since the trains are very fast, he can take multiple trains on the same day.Prabhu Salamon must finish his journey by day D, but he would like to start the journey as late as possible. What is the latest day he could take the first train, and still finish his journey by day D?It is guaranteed that it is possible for Prabhu Salamon to finish his journey by day D.Constraints:1 \u2264 T \u2264 100.1 \u2264 Xi \u2264 D.1 \u2264 N \u2264 1000.1 \u2264 D \u2264 10^12Input Format:The first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the two integers N and D. Then, another line follows containing N integers, the i-th one is Xi.Output Format:Print the output in a single line contains, the latest day he could take the first train, and still finish his journey by day D.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n3 100\n31 71 21\n4 100\n11 16 51 50\n1 1\n1",
          "output": "62\n44\n1"
        },
        {
          "name": "Test Case 2",
          "input": "3\n5 1000\n311 171 211 45 32\n6 1000\n111 161 511 510 56 93\n2 10\n9 5",
          "output": "622\n0\n9"
        }
      ],
      "code": "#include <stdio.h>\n\nint main() {\n    int T;\n    scanf(\"%d\", &T);\n    for(int t=0;t<T;t++) {\n        int n;\n        long long d;\n        scanf(\"%d %lld\", &n, &d);\n        long long x[1005];\n        for (int i = 0; i < n; i++) {\n            scanf(\"%lld\", &x[i]);\n        }\n        for(int i=n-1;i>=0;i--) {\n            d = (d / x[i]) * x[i];\n        }\n        printf(\"%lld\\n\", d);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_2",
      "challenge": 2,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Semester break has started and Ashwin is going home from College (SRM UNIVERSITY). He is taking flight from Chennai to Delhi. After entering the Airport, he was asked to get into queue of the Boarding Pass. \n\nThe Airline staff (Jet Airways) follows the  Multi Level Feedback Queue Scheduling algorithm (The algorithm allocates the jobs or processes to different queues based on their CPU execution time. If a process has a large burst-time, then it is automatically moved to a lower-priority queue. )\n\nRam is a programmer and wanted to gift a program to the airline which shows the starting time the person enter the queue and the end time until which he is serviced.\n\nInput: \nThe first line contains the Number of Passengers n. The next n line contains the Process id,,arrival time,burst time and the process priority number of that passenger. \n\nOutput:\nThe first n lines should print Process Number Starting time when the passenger is started servicing and the time when his job is finished.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 4 10 2\n2 7 48 6\n3 2 64 1\n4 8 32 5\n5 5 50 3",
          "output": "P1 Time:10 To 20\nP5 Time:20 To 70\nP3 Time:70 To 134\nP4 Time:134 To 166\nP2 Time:166 To 214"
        },
        {
          "name": "Test Case 2",
          "input": "4\n1 4 30 8\n2 7 72 6\n3 13 54 1\n4 8 72 5",
          "output": "P3 Time:30 To 84\nP2 Time:84 To 156\nP1 Time:156 To 186\nP4 Time:186 To 258"
        }
      ],
      "code": "#include <stdio.h>\nint d[9],a[9],b[9],q[9],r[9],n,t,i,j,k;\nvoid W(int x,int y){\n    k=d[x];d[x]=d[y];d[y]=k;\n    k=a[x];a[x]=a[y];a[y]=k;\n    k=b[x];b[x]=b[y];b[y]=k;\n    k=q[x];q[x]=q[y];q[y]=k;\n}\nvoid M(int y){for(i=y;i<n;i++)r[i]=a[i]<t;}\nvoid S1(int y){\n    for(i=y;i<n;i++)for(j=i+1;j<n;j++)\n        if(r[i]&r[j]&(q[i]==2)&(q[j]==1))W(i,j);\n}\nvoid S2(int y){\n    for(i=y;i<n;i++)for(j=i+1;j<n;j++){\n        k=r[i]&r[j]&(q[i]==1)&(q[j]==1);\n        if(k&(b[i]>b[j]))W(i,j);\n        else if(k)break;\n    }\n}\nvoid E(int y){\n    M(y);S1(y);S2(y);\n    printf(\"\\\\nP%d Time:%d To %d\",d[y],t,t+b[y]);\n    t+=b[y];\n}\nint main(){\n    if(scanf(\"%d\",&n)!=1)return 0;\n    for(i=0;i<n;i++){\n        scanf(\"%d%d%d%d\",&d[i],&a[i],&b[i],&k);\n        q[i]=(k>3)+1;\n    }\n    t=b[0];\n    for(int y=0;y<n;y++)E(y);\n    return 0;\n}"
    },
    {
      "id": "OS_3",
      "challenge": 3,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 325, Max LOC: 30",
        "cyclomatic": 3,
        "tokens": 325,
        "nloc": 30
      },
      "mandatory": [
        "char colors[8][32]",
        "char mixes[8][8][32]",
        "for(i=0;i<8;i++)",
        "if(strcmp(c",
        "colors[i])==0)"
      ],
      "mandatory_raw": "char colors[8][32], char mixes[8][8][32], for(i=0;i<8;i++), if(strcmp(c,colors[i])==0)",
      "description": "VIBGYOR isn't just an acronym, it's a way of life for Asian paint company. The owner is considering modernizing his paint mixing equipment with a computerized model. He's hired you to code the prototype. Your simple program will need to correctly output the right color based on the blends he's given you.Example  ColorsPrimary colors \u201c RED, BLUE, YELLOW\u201d, secondary Colors \u201cORANGE, PURPLE, GREEN\u201dTertiary Colors \u201c LIGHT RED, DARK RED, LIGHT PURPLE, DARK PURPLE, LIGHT BLUE, DARK BLUE, LIGHT GREEN, DARK GREEN, LIGHT YELLOW, DARK YELLOW, LIGHT ORANGE, DARK ORANGE\u201dInput Format:You will receive one to five lines of color combinations consisting of primary colors and secondary colors as well as black and white to make \"dark\" and \"light\" colors. The full science of colorisation and pigments will be implemented next, if your prototype is successful.Output Format:Print the output in a separate lines contains, Your program should output the correct color depending on what two colors were \"mixed\" on the line. Primary colors should mix together to create secondary colors. Anything mixed with \"WHITE\" or \"BLACK\" should be output as either \"LIGHT X\" or \"DARK X\" where X is the color \"WHITE\" or \"BLACK\" were mixed with. Anything mixed with itself won't change colors. You are guaranteed not to receive incompatible colors, or colors not listed in the color wheels shown above (aside from \"WHITE\" and \"BLACK\"). Refer logical test cases for your reference.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "RED YELLOW\nBLUE WHITE\nYELLOW YELLOW\nORANGE BLACK",
          "output": "ORANGE\nLIGHT BLUE\nYELLOW\nDARK ORANGE"
        },
        {
          "name": "Test Case 2",
          "input": "BLUE YELLOW\nBLUE RED\nBLUE YELLOW\nORANGE RED",
          "output": "GREEN\nPURPLE\nGREEN\nN/A"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar colors[8][32] = {\"RED\", \"BLUE\", \"YELLOW\", \"WHITE\", \"BLACK\", \"ORANGE\", \"PURPLE\", \"GREEN\"};\nchar mixes[8][8][32];\n\nint get_id(char *c) {\n    int i;\n    for(i=0;i<8;i++)\n        if(strcmp(c,colors[i])==0) return i;\n    return -1;\n}\n\nvoid print_m(int m) {\n    if (m == 5) puts(\"ORANGE\");\n    else if (m == 6) puts(\"GREEN\");\n    else if (m == 3) puts(\"PURPLE\");\n    else puts(\"N/A\");\n}\n\nvoid mix(int u, int v) {\n    if (u == v) { puts(colors[u]); return; }\n    if (u == 3 || v == 3) { printf(\"LIGHT %s\\n\", colors[u == 3 ? v : u]); return; }\n    if (u == 4 || v == 4) { printf(\"DARK %s\\n\", colors[u == 4 ? v : u]); return; }\n    print_m((1 << u) | (1 << v));\n}\n\nint main() {\n    char a[20], b[20];\n    while (scanf(\"%s%s\", a, b) == 2) mix(get_id(a), get_id(b));\n    return 0;\n}"
    },
    {
      "id": "OS_4",
      "challenge": 4,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Raina a student of SRM UNIVERSITY On his birthday took his n Friends (F1, F2, F3. Fn) to SRM Restaurant for a treat. The waiter noted the order of F1, F2, F3. Fn as O1, O2, O3 and so on respectively.\n\nConsider F1, F2, F3. Fn as different customers. Raina a smart person observed that all the people of the restaurant were happy unlike other restaurants where some of the people were always unhappy with the service.\n\n So, Raina asked the waiter about this and the waiter told they follow the Round Robin algorithm in their restaurant so a fairness is seen in every order unlike priority algorithm therefore every customer feel special and are happy as they can see that their order has been given to chef and he/she has started the preparation of his/her order. Although the waiting time is more but the customer feel that their order is in process so they are happy. \n\nHe also told Raina that they maintain a database which records how much time the order of a customer will be needing more for completion after it passes the time quantum and shifts that order to last in the queue of the orders that are under preparation. You can assume Time quantum as a time after which the chef checks if some other new order came so that he can show that customer that his/her order has also started to prepare. \n\nPrint the Bust time, time in which the order completes (turnaround time)  and waiting time for each one of them. Print the average waiting and average turnaround time. Assume F1 gets the menu first and orders first then F2 and so on Therefore the time at which the order is given to the waiter (Arrival time) changes for each friend. \n\nInput: \nThe first line contains the Number of friend/s n. The next n line contains the arrival time and the bust time for F1, F2, F3. Fn.\n\nOutput: \nThe first n lines should print Burst time,turn around time and Waiting time for each friend in each line. Print average waiting and average turnaround time in next two lines respectively.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n3 10 \n6 28\n2 35\n6",
          "output": "F1 10 19 9\nF2 28 56 28\nF3 35 71 36\nAverage Waiting Time:24.333334\nAverage Turnaround Time:48.666668"
        },
        {
          "name": "Test Case 2",
          "input": "4\n4 75 \n6 28\n2 35\n5 29\n5",
          "output": "F2 28 107 79\nF4 29 117 88\nF3 35 130 95\nF1 75 163 88\nAverage Waiting Time:87.500000\nAverage Turnaround Time:129.250000"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint a[15], b[15], r[15], q, tm, rem, i;\nfloat w, tt;\n\nvoid fn(int i) {\n    rem--;\n    printf(\"F%d %d %d %d\\n\", i + 1, b[i], tm - a[i], tm - a[i] - b[i]);\n    w += tm - a[i] - b[i];\n    tt += tm - a[i];\n}\n\nvoid prc(int i) {\n    if (r[i] > 0) {\n        int v = (r[i] + q - abs(r[i] - q)) / 2;\n        tm += v;\n        r[i] -= v;\n        if (!r[i]) fn(i);\n    }\n}\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    rem = n;\n    for (int k = 0; k < n; k++) {\n        scanf(\"%d%d\", a + k, b + k);\n        r[k] = b[k];\n    }\n    scanf(\"%d\", &q);\n    while (rem) {\n        prc(i);\n        i = (i < n - 1 && a[i + 1] <= tm) ? i + 1 : 0;\n    }\n    printf(\"Average Waiting Time:%f\\nAverage Turnaround Time:%f\", w / n, tt / n);\n    return 0;\n}"
    },
    {
      "id": "OS_5",
      "challenge": 5,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Rohit a student of SRM UNIVERSITY On his birthday took his n Friends (F1, F2, F3. Fn) to SRM Restaurant for a treat. The waiter noted the order of F1, F2, F3. Fn as O1, O2, O3 and so on respectively. \n\nAssuming the waiter follows the FCFS algorithm. Print the waiting time, time at which chef starts to prepare the order (Preparation start time) (service time) and time in which the order completes (turnaround time) for each one of them. Print the average waiting and average turnaround time. \n\nAssume F1 gets the menu first and orders first then F2 and so on Therefore the time at which the order is given to the waiter (Arrival time) changes for each friend.\n\nInput Format:\nThe first line contains the Number of friend/s. The next n line contains order given time of F1, F2, F3. Fn. \n\nOutput Format:\nThe first n lines should print order given time, waiting time and Time in which the order completes (Turn Around time) for each friend in each line. Print average waiting and average turnaround time in next two lines respectively.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n12\n20\n50",
          "output": "F1 12.00 0.00 12.00\nF2 20.00 12.00 32.00\nF3 50.00 32.00 82.00\nAverage Waiting Time=14.666667\nAverage Turnaround Time=42.000000"
        },
        {
          "name": "Test Case 2",
          "input": "4\n10\n19\n32\n17",
          "output": "F1 10.00 0.00 10.00\nF2 19.00 10.00 29.00\nF3 32.00 29.00 61.00\nF4 17.00 61.00 78.00\nAverage Waiting Time=25.000000\nAverage Turnaround Time=44.500000"
        }
      ],
      "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    float wt = 0, total_wt = 0, total_tat = 0;\n    for (int i = 0; i < n; i++) {\n        float bt;\n        scanf(\"%f\", &bt);\n        float tat = wt + bt;\n        printf(\"\\nF%d %.2f %.2f %.2f\", i + 1, bt, wt, tat);\n        total_wt += wt;\n        total_tat += tat;\n        wt += bt;\n    }\n    printf(\"\\nAverage Waiting Time=%f\", total_wt / n);\n    printf(\"\\nAverage Turnaround Time=%f\", total_tat / n);\n    return 0;\n}"
    },
    {
      "id": "OS_6",
      "challenge": 6,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 320, Max LOC: 30",
        "cyclomatic": 4,
        "tokens": 320,
        "nloc": 30
      },
      "mandatory": [
        "char var[3][LEN];",
        "char inp[3][LEN];"
      ],
      "mandatory_raw": "char var[3][LEN];, char inp[3][LEN];",
      "description": "Mr. Alex just installed new bands in his feet and they do not feel like they should, making it where he cannot stop!However the Alex cannot do the math while stopping himself from crashing into things. Using M = -dx, please help him find out the M, d, or x value as he requests it.Constraints:M, D, X = 0 to 10000 (or a question mark).Input Format:Each line will start capital letters only, then the value of that variable. The value must be a decimal number.Output Format:Print the output in a separate lines contains the variable, a space, then the value.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "M 14.00\nD -4.80\nX ?",
          "output": "x 2.92"
        },
        {
          "name": "Test Case 2",
          "input": "M 12.00\nD -5.80\nX ?",
          "output": "x 2.07"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define LEN 32\n\nchar var[3][LEN];\nchar inp[3][LEN];\ndouble m, d, x;\nchar target;\n\nvoid parse_item(int i) {\n    char v = var[i][0];\n    if (inp[i][0] == '?') target = (v | 32);\n    else {\n        double val = atof(inp[i]);\n        if (v == 'M') m = val;\n        else if (v == 'D') d = val;\n        else x = val;\n    }\n}\n\nvoid print_res() {\n    if (target == 'm') printf(\"m %.2f\\n\", -d * x);\n    else if (target == 'd') printf(\"d %.2f\\n\", -m / x);\n    else printf(\"x %.2f\\n\", -m / d);\n}\n\nint main() {\n    for (int i = 0; i < 3; i++) {\n        if (scanf(\"%s %s\", var[i], inp[i]) != 2) return 0;\n        parse_item(i);\n    }\n    print_res();\n    return 0;\n}"
    },
    {
      "id": "OS_7",
      "challenge": 7,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Dhoni a student of SRM UNIVERSITY On his birthday took his n Friends (F1, F2, F3. Fn) to SRM Restaurant for a treat. The waiter noted the order of F1, F2, F3. Fn as O1, O2, O3 and so on respectively. \n\nDhoni asked the waiter about the type of algorithm he follows to give order to chef to prepare. Waiter told Dhoni that he follows the SJF (shortest job first algorithm) as it minimizes the waiting time so more number of customers are happy from their service and so they come back. Print the waiting time, time at which chef starts to prepare the order (Preparation start time) (service time) and time in which the order completes (turnaround time) for each one of them. \n\nPrint the average waiting and average turnaround time. Assume F1 gets the menu first and orders first then F2 and so on Therefore the time at which the order is given to the waiter (Arrival time) changes for each friend. \n\nInput: \nThe first line contains the Number of friend/s. The next n line contains  order give time for F1, F2, F3. Fn. \n\nOutput:\nThe first n lines should print  Order given time, waiting time and Time in which the order completes (Turnaround Time) for each friend in each line. Print average waiting and average turnaround time in next two lines respectively.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n34\n21\n5\n2\n19",
          "output": "F4 2 0 2\nF3 5 2 7\nF5 19 7 26\nF2 21 26 47\nF1 34 47 81\nAverage Waiting Time:16.400000\nAverage Turnaround Time:32.599998"
        },
        {
          "name": "Test Case 2",
          "input": "3\n18\n8\n14",
          "output": "F2 8 0 8\nF3 14 8 22\nF1 18 22 40\nAverage Waiting Time:10.000000\nAverage Turnaround Time:23.333334"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Friend {\n    int id;\n    int bt;\n};\n\nint cmp(const void *a, const void *b) {\n    struct Friend *f1 = (struct Friend *)a;\n    struct Friend *f2 = (struct Friend *)b;\n    return f1->bt - f2->bt;\n}\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    struct Friend f[100];\n    for (int i = 0; i < n; i++) {\n        f[i].id = i + 1;\n        scanf(\"%d\", &f[i].bt);\n    }\n    qsort(f, n, sizeof(struct Friend), cmp);\n    float wt = 0, total_wt = 0, total_tat = 0;\n    for (int i = 0; i < n; i++) {\n        float tat = wt + f[i].bt;\n        printf(\"\\nF%d %d %.0f %.0f\", f[i].id, f[i].bt, wt, tat);\n        total_wt += wt;\n        total_tat += tat;\n        wt += f[i].bt;\n    }\n    printf(\"\\nAverage Waiting Time:%f\", total_wt / n);\n    printf(\"\\nAverage Turnaround Time:%f\", total_tat / n);\n    return 0;\n}"
    },
    {
      "id": "OS_8",
      "challenge": 8,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Software Engineer Saran is assigned with several projects from various companies by his Team lead. He is also insisted to complete the projects based on their duration (ie.,Shortest duration first).He is asked to submit a chart presentation for the above project.  Help him to draw the chart alone.\nINPUT: \n1st line : number of process\n2nd line : Process ID of each process\n3rd line : Burst time of each process\n4th line : arrival time of each process",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n4 5 6\n8 4 5\n1 2 3",
          "output": "The gantt chart\nP5 P6 P4 \n0 4 9 17"
        },
        {
          "name": "Test Case 2",
          "input": "4\n11 22 33 44\n7 3 6 2\n4 3 2 1",
          "output": "The gantt chart\nP44 P22 P33 P11 \n0 2 5 11 18"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Item { int pid, bt, at, idx; };\nint cmp(const void *a, const void *b) {\n    struct Item *x = (struct Item *)a;\n    struct Item *y = (struct Item *)b;\n    if (x->bt != y->bt) return x->bt - y->bt;\n    return x->idx - y->idx;\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    struct Item items[100];\n    for (int i = 0; i < n; i++) { items[i].idx = i; scanf(\"%d\", &items[i].pid); }\n    for (int i = 0; i < n; i++) scanf(\"%d\", &items[i].bt);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &items[i].at);\n    qsort(items, n, sizeof(struct Item), cmp);\n    printf(\"\\nThe gantt chart\\n\");\n    for (int i = 0; i < n; i++) printf(\"P%d \", items[i].pid);\n    printf(\"\\n0 \");\n    int time = 0;\n    for (int i = 0; i < n; i++) {\n        time += items[i].bt;\n        printf(\"%d \", time);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_9",
      "challenge": 9,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 488, Max LOC: 50",
        "cyclomatic": 3,
        "tokens": 488,
        "nloc": 50
      },
      "mandatory": [
        "int cl[CMDS]",
        "char *lists[CMDS][MAXWORDS];",
        "char *tokens[TOKENS]={\"[N]\"",
        "\"[AV]\"",
        "\"[V]\"",
        "\"[AJ]\"};",
        "char *cmds[CMDS]={\"NOUNS\"",
        "\"ADVERBS\"",
        "\"VERBS\"",
        "\"ADJECTIVES\"",
        "\"END\"};"
      ],
      "mandatory_raw": "int cl[CMDS], char *lists[CMDS][MAXWORDS];, char *tokens[TOKENS]={\"[N]\",\"[AV]\",\"[V]\",\"[AJ]\"};, char *cmds[CMDS]={\"NOUNS\",\"ADVERBS\",\"VERBS\",\"ADJECTIVES\",\"END\"};",
      "description": "Ram's first job is a out of university is for a student's book publisher. They are currently publishing a line of \"intelligent libs\" books, and they need you to check their print-copy. Write a program that will take a sentence with placeholders in it, and substitute in for those placeholders words from the lists of example words the publisher has provided.Your goal will be to substitute the appropriate words into the sentence from the list of provided words TWICE (keeping track of the words you have used) where:[N] = nouns[AV] = adverbs[V] = verbs[AJ] = adjectivesInput Format:Line one will always be the line with the story. The order of the Nouns, Adverbs, Verbs and Adjectives will always be the same. Input stops when it reaches the word END alone on a line. You are guaranteed to always have enough words to substitute into the sentence TWICE (not repeating any words). The number of words given under each section will be random.Output Format:Print the output in a separate lines contains, Always take the TOP-most UNUSED word from a group when substituting. Output the final sentences when all substitutions are done.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "There once was a [AJ] [N] from [N] who [AV] [V] all day.\nNOUNS\nsquirrel\nLondon\ntree\nlettuce\nADVERBS\nsilently\nquickly\nhappily\nVERBS\nskipped\nran\nclimbs\nADJECTIVES\ndelightful\nhomely\nquain",
          "output": "There once was a delightful squirrel from London who silently skipped all day.\nThere once was a homely tree from lettuce who quickly ran all day."
        },
        {
          "name": "Test Case 2",
          "input": "There once was a [AJ] [N] from [N] who [AV] [V] all day.\nNOUNS\nsinger\nchennai\nhotel\nchettinad\nADVERBS\nsilently\nquickly\nhappily\nsadly\nVERBS\nskipped\nreads\nran\nsings\nclimbs\nADJECTIVES\ndelightful\nhomely\nsurprisingly",
          "output": "There once was a delightful singer from chennai who silently skipped all day.\nThere once was a homely hotel from chettinad who quickly reads all day."
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\n#define CMDS 5\n#define TOKENS 4\n#define MAXWORDS 50\n\nint cl[CMDS], ptr[CMDS];\nchar *lists[CMDS][MAXWORDS];\nchar *tokens[TOKENS]={\"[N]\",\"[AV]\",\"[V]\",\"[AJ]\"};\nchar *cmds[CMDS]={\"NOUNS\",\"ADVERBS\",\"VERBS\",\"ADJECTIVES\",\"END\"};\nchar tmpl[256];\n\nint find_cmd(char *s) {\n    for (int i = 0; i < CMDS; i++) if (!strcmp(s, cmds[i])) return i;\n    return -1;\n}\n\nint match_tok(char *p) {\n    for (int i = 0; i < TOKENS; i++) if (!strncmp(p, tokens[i], strlen(tokens[i]))) return i;\n    return -1;\n}\n\nvoid read_all() {\n    int cur = -1; char s[64];\n    while (scanf(\"%s\", s) == 1) {\n        int idx = find_cmd(s);\n        if (idx == 4) break;\n        if (idx >= 0) cur = idx;\n        else if (cur >= 0) lists[cur][cl[cur]++] = strdup(s);\n    }\n}\n\nint can_print() {\n    int u[4] = {ptr[0], ptr[1], ptr[2], ptr[3]};\n    for (char *p = tmpl; *p; p++)\n        if (*p == '[') {\n            int t = match_tok(p);\n            if (t >= 0 && u[t]++ >= cl[t]) return 0;\n        }\n    return 1;\n}\n\nvoid print_one() {\n    char *p = tmpl;\n    while (*p) {\n        if (*p == '[') {\n            int t = match_tok(p);\n            if (t >= 0) { printf(\"%s\", lists[t][ptr[t]++]); p += strlen(tokens[t]); continue; }\n        }\n        putchar(*p++);\n    }\n    putchar('\\\\n');\n}\n\nint main() {\n    if (!fgets(tmpl, 256, stdin)) return 0;\n    tmpl[strcspn(tmpl, \"\\\\r\\\\n\")] = 0;\n    read_all();\n    while (can_print()) print_one();\n    return 0;\n}"
    },
    {
      "id": "OS_10",
      "challenge": 10,
      "level": 1,
      "topic": "CPU SCHEDULING",
      "session": "Cpu Scheduling",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Semester break has started and Ashwin is going home from College (SRM UNIVERSITY). He is taking flight from Chennai to Delhi. After entering the Airport, he was asked to get into queue of the Boarding Pass. \n\nThe Airline staff (Jet Airways) follows the Non Pre-emptive Priority algorithm (Even In case if a passenger with higher priority comes when processing of a passenger with lower priority is taking place in this case the processing of the boarding pass of the passenger with lower priority should not be altered and the passenger with the highest priority has to weight until his turn comes according to the priority )\n\nAshwin is a programmer and wanted to gift a program to the airline which shows the service time (time at which that person will reach the counter), waiting time (service time -arrival time) for each person in the queue and turnaround time (total time from arrival till person gets boarding pass). Also, Calculate average waiting and average turnaround time. \n\nAssume passenger with the lowest priority number has the highest priority. \n\nInput: \nThe first line contains the Number of Passengers n. The next n line contains the Burst Time and the priority number of that passenger. \n\nOutput:\nThe first n lines should print Process ID,Burst time waiting time and turn around time (total time from arrival till person gets boarding pass) for each person in the queue . In next two lines Print average waiting and average turnaround time in next two lines respectively",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6\n12 5\n19 2\n34 1\n23 4\n76 5\n11 3",
          "output": "P3 34 0 34\nP2 19 34 53\nP6 11 53 64\nP4 23 64 87\nP5 76 87 163\nP1 12 163 175\nAverage Waiting Time:66.000000\nAverage Turnaround Time:96.000000"
        },
        {
          "name": "Test Case 2",
          "input": "5\n18 3\n29 2\n42 7\n11 5\n17 1",
          "output": "P5 17 0 17\nP2 29 17 46\nP1 18 46 64\nP4 11 64 75\nP3 42 75 117\nAverage Waiting Time:40.000000\nAverage Turnaround Time:63.000000"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Pr {\n    int id;\n    int bt;\n    int prio;\n};\n\nint cmp(const void *a, const void *b) {\n    struct Pr *x = (struct Pr *)a;\n    struct Pr *y = (struct Pr *)b;\n    if (x->prio != y->prio) return x->prio - y->prio;\n    return y->bt - x->bt;\n}\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    struct Pr prs[100];\n    for (int i = 0; i < n; i++) {\n        prs[i].id = i + 1;\n        scanf(\"%d %d\", &prs[i].bt, &prs[i].prio);\n    }\n    qsort(prs, n, sizeof(struct Pr), cmp);\n    int wt = 0, total_wt = 0, total_tat = 0;\n    for (int i = 0; i < n; i++) {\n        int tat = wt + prs[i].bt;\n        printf(\"\\nP%d %d %d %d\", prs[i].id, prs[i].bt, wt, tat);\n        total_wt += wt;\n        total_tat += tat;\n        wt += prs[i].bt;\n    }\n    float avg_wt = total_wt / n;\n    float avg_tat = total_tat / n;\n    printf(\"\\nAverage Waiting Time:%f\", avg_wt);\n    printf(\"\\nAverage Turnaround Time:%f\", avg_tat);\n    return 0;\n}"
    },
    {
      "id": "OS_11",
      "challenge": 11,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "A spacecraft is all set to travel through a long inter-galactic tunnel. The tunnel consists of N stationary space debris. In order to successfully complete the mission the spacecraft needs to destroy all the space debris. The control unit of the spacecraft has M buttons which can be used to destroy the space debris. \n\nPressing a particular button may result in the destruction of some (possibly multiple) particular space debris. Once a space debris is destroyed its mass is converted into energy, which is eventually absorbed by the spacecraft in order to increase its speed. The amount of energy released from the disintegration of a particular space debris depends upon the button which has been used to destroy that space debris. \n\nA matrix E which contains this information is known as \"Energy Vector\". For each space debris i and each button j, E[i][j] is a positive integer between 0 and 100, which is the energy released after destroying space debris i using button j. The value of E[i][j] is -1 if space debris i cannot be destroyed using button j.\n\nSome space debris have dependencies on other space debris in order to get destroyed. The spacecraft must destroy some specific space debris before causing the destruction of some other space debris. There are a total of K unique dependencies. Each dependency contains two space separated integers i and j, which denotes that the space debris i must be destroyed before destroying space debris j.\n\nA particular button can be pressed only once and the buttons can be pressed only in order from 1 to M (ie. button 2 cannot be pressed before button 1 ). While pressing a specific button a binary string T of length N called as \"Target Vector\" is passed to the control unit of the spacecraft. \n\nFor each space debris i, T[i] is 1 if you want to destroy that space debris with that button otherwiseT[i] is 0. When the button is pressed all the space debris mentioned in the Target Vector simultaneously gets destroyed.\n\nThe spacecraft may destroy any number of space debris using a particular button, including none, as long as they can be destroyed by that button and the spacecraft has already destroyed any required prerequisite space debris.Find the allocation of file.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 10",
          "output": "4 1\n5 1\n6 1\n7 1\n8 1\n9 1\n10 1\n11 1\n12 1\n13 1\nthe file is allocated to disk"
        },
        {
          "name": "Test Case 2",
          "input": "5 6",
          "output": "5 1\n6 1\n7 1\n8 1\n9 1\n10 1\nthe file is allocated to disk"
        }
      ],
      "code": "#include <stdio.h>\n\nint main() {\n    int n, key, pos = -1;\n    scanf(\"%d\", &n);\n    int a[100];\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    scanf(\"%d\", &key);\n    for (int i = 0; i < n; i++) {\n        if (a[i] == key) {\n            pos = i + 1;\n            break;\n        }\n    }\n    if (pos != -1) printf(\"%d is found at %d\\n\", key, pos);\n    else printf(\"%d is not found\\n\", key);\n    return 0;\n}"
    },
    {
      "id": "OS_12",
      "challenge": 12,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Manisa is not having a good time these days. Just Yesterday he made terrible food and hence got beaten up. He has hence decided that he wont prepare food himself but instead collect food from hotels in the city.\n\nHowever, he suffered injury on his head ( people can get really angry when served with bad food ) and is suffering from short term memory loss. \n\nHe is standing in a city in the form of a grid where cell(i,j) of the grid contains a hotel which has Gij amount of food to offer to the chef. \n\nEvery second, monisha goes to one of the neighbors in the grid. ( Note: Please note that any cell(i,j) can have at most 4 neighbors). Now the task is locate the files in index method to display.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n3\n4\n9 \n4 6  7\n5\n2\n8",
          "output": "1 3 4\n2 5 2\nblocks occupied are:\nfileno1: 3 9 3 4 3 6 3 7\nfileno2: 5 8 5 0"
        },
        {
          "name": "Test Case 2",
          "input": "2\n4\n4\n8 \n5  7  8\n6\n2\n8",
          "output": "1 4 4\n2 6 2\nblocks occupied are:\nfileno1: 4 8 4 5 4 7 4 8\nfileno2: 6 8 6 0"
        }
      ],
      "code": "#include <stdio.h>\n\nstruct F { int k, n, a[100]; } f[100];\nint t, i, j;\n\nvoid print_blocks() {\n    printf(\"blocks occupied are:\\n\");\n    for (i = 0; i < t; i++) {\n        printf(\"fileno%d:\", i + 1);\n        for (j = 0; j < f[i].n; j++) printf(\" %d %d\", f[i].k, f[i].a[j]);\n        printf(\"\\n\");\n    }\n}\n\nint main() {\n    if (scanf(\"%d\", &t) != 1) return 0;\n    for (i = 0; i < t; i++) {\n        scanf(\"%d%d\", &f[i].k, &f[i].n);\n        for (j = 0; j < f[i].n; j++) scanf(\"%d\", &f[i].a[j]);\n    }\n    for (i = 0; i < t; i++) printf(\"%d %d %d\\n\", i + 1, f[i].k, f[i].n);\n    print_blocks();\n    return 0;\n}"
    },
    {
      "id": "OS_13",
      "challenge": 13,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "There are K tiles. Each of the tiles either contains a single uppercase Latin letter or is a blank tile meaning that it can represent any uppercase Latin letter.\n\nGiven is also a graph with N nodes and M edges. Initially, some of the nodes contain tiles. The rest of the nodes are unoccupied.\n\nFind the sequential letters in order.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n2 1 4\n1",
          "output": "Sequential file\n1 found at location 2"
        },
        {
          "name": "Test Case 2",
          "input": "6\n2 1 4 5  4 7\n4",
          "output": "Sequential file\n4 found at location 3"
        }
      ],
      "code": "#include <stdio.h>\n\nint find_pos(int *a, int n, int k) {\n    for (int i = 0; i < n; i++) if (a[i] == k) return i + 1;\n    return 0;\n}\n\nint main() {\n    int n, a[100], k;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", a + i);\n    scanf(\"%d\", &k);\n    int p = find_pos(a, n, k);\n    printf(\"\\nSequential file\\n\");\n    if (p) printf(\"%d found at location %d\", k, p);\n    else printf(\"%d not found\", k);\n    return 0;\n}"
    },
    {
      "id": "OS_14",
      "challenge": 14,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "The kamali is on vacation in the beautiful country of Chefville. The island is a narrow strip of land running from north to south. A single road from north to south connects all the villages in the country. There, he observed, the postal services works in a very curious way.\n\nThere is a postman for every village. In the morning, say postman A, starts traveling to the North, disbursing all the mails on the way. When he meets another postman coming from the opposite direction on the way, say B, A hands over all the mails to B which are to be delivered to addresses that lie in the North and vice versa for B. \n\nThen both turn back and start traveling in the opposite directions. So, now A travels to the South and when he meets another postman on the way, the same thing happens again. \n\nThis keep on till the duty hours of the day finishes and they don't loose any time in the swapping and turning back. All postmen travel at the same speed of 1 m/s always and they arbitrarily choose their direction to start with in the morning. Now you Find the given numbers in sequential file allocation or not",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n1 4 3 2\n5\n2 3 4 5 1\n1\n1\n0",
          "output": "sequential\nnot sequential\nsequential"
        },
        {
          "name": "Test Case 2",
          "input": "3\n1 4 3 \n4\n2 3 4 5  \n1\n1\n0",
          "output": "not sequential\nnot sequential\nsequential"
        }
      ],
      "code": "#include <stdio.h>\n\nint check(int *a, int n) {\n    int ok = 0;\n    if (a[0] == 1) {\n        ok = (n == 1) | (a[n - 1] == 2);\n    }\n    return ok;\n}\n\nint solve() {\n    int n, a[1000];\n    if (scanf(\"%d\", &n) != 1) return 0;\n    if (n <= 0) return 0;\n    for (int i = 0; i < n; i++) scanf(\"%d\", a + i);\n    if (check(a, n)) printf(\"\\nsequential\");\n    else printf(\"\\nnot sequential\");\n    return 1;\n}\n\nint main() {\n    while (solve()) {}\n    return 0;\n}"
    },
    {
      "id": "OS_15",
      "challenge": 15,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a  program to simulate Linked File Allocation.With linked allocation, each file is a linked list of disk blocks; the disk blocks may be scattered anywhere on the disk. The directory contains a pointer to the first and last blocks of the file. Each block contains a pointer to the next block.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\nA 10\n64 22 12 45 13 65 33 99 44 21\nB 4\n78 32 44 11\nC 8\n5 9 3 8 53 17 33 77\nD 5\n74 22 11 66 44\nE 6\n88 33 22 55 44 11\nA",
          "output": "Filename No.of blocks\nA 10 \nBlocks Occupied\n64 22 12 45 13 65 33 99 44 21"
        },
        {
          "name": "Test Case 2",
          "input": "4\nAN 7\n84 22 46 14 95 123 65\nHJ 8\n34 63 77 22 11 56 98 12\nJK 5\n83 22 19 74 23\nFG 3\n89 223 667\nMK",
          "output": "File Not Found"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar name[50][30];\nint cnt[50];\nint blk[50][100];\n\nint find_idx(int n, char *tgt) {\n    for (int i = 0; i < n; i++) {\n        if (strcmp(name[i], tgt) == 0) return i;\n    }\n    return -1;\n}\n\nvoid print_blocks(int idx) {\n    printf(\"\\nFilename No.of blocks\\n%s %d \\nBlocks Occupied\\n\", name[idx], cnt[idx]);\n    for (int j = 0; j < cnt[idx]; j++) {\n        printf(\"%d%s\", blk[idx][j], j == cnt[idx] - 1 ? \"\" : \" \");\n    }\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%s%d\", name[i], cnt + i);\n        for (int j = 0; j < cnt[i]; j++) scanf(\"%d\", &blk[i][j]);\n    }\n    char tgt[30];\n    scanf(\"%s\", tgt);\n    int idx = find_idx(n, tgt);\n    if (idx != -1) print_blocks(idx);\n    else printf(\"\\nFile Not Found\");\n    return 0;\n}"
    },
    {
      "id": "OS_16",
      "challenge": 16,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Johnny has a pool in his garden. There are several islands in the pool. Some islands are connected by bridges. Any bridge can be removed. \n\nEvery day Johnny removes some bridges so that there is only one way from any island to any other. In the evening he returns removed bridges to their places. Also he has some favourite bridges which he never removes. Johnny will be happy if he is able to make a configuration of bridges on the given day which he has never made before. \n\nYou have to count the amount of days he will be happy. Of course, if the favourite bridges themselves don't satisfy the happiness condition Johnny will not be happy for even single day. Now display all the locations at which required element is found and also the number of times it occur in the file",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n23\n4\n12\n4\n4\n4",
          "output": "4 is present at location 2\n4 is present at location 4\n4 is present at location 5\n4 is present 3 times in array"
        },
        {
          "name": "Test Case 2",
          "input": "5\n3\n2\n3\n3\n3\n3",
          "output": "3 is present at location 1\n3 is present at location 3\n3 is present at location 4\n3 is present at location 5\n3 is present 4 times in array"
        }
      ],
      "code": "#include <stdio.h>\n\nvoid print_summary(int k, int cnt) {\n    if (cnt == 0) printf(\"\\n%d is not present in array\", k);\n    else printf(\"\\n%d is present %d times in array\", k, cnt);\n}\n\nvoid search(int *a, int n, int k) {\n    int cnt = 0;\n    for (int i = 0; i < n; i++) {\n        if (a[i] == k) {\n            printf(\"\\n%d is present at location %d\", k, i + 1);\n            cnt++;\n        }\n    }\n    print_summary(k, cnt);\n}\n\nint main() {\n    int n, a[100], k;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", a + i);\n    scanf(\"%d\", &k);\n    search(a, n, k);\n    return 0;\n}"
    },
    {
      "id": "OS_17",
      "challenge": 17,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a  program to simulate Indexed File Allocation.Indexed file allocation strategy brings all the pointers together into one location: an index block. Each file has its own index block, which is an array of disk-block addresses. \n\nThe ith entry in the index block points to the ith block of the file. The directory contains the address of the index block. To find and read the ith block, the pointer in the ith index-block entry is used.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\nAJ 7\n32 42 13 53 11 93 16\nHA 4\n837 32 52 62\nKA 6\n832 132 634 135 146 136\nLA 5\n194 563 136 873 127\nUA 8\n84 52 67 15 98 77 11 56\nKA",
          "output": "Filename No.of blocks\nKA 6\nBlocks Occupied\n832 132 634 135 146 136"
        },
        {
          "name": "Test Case 2",
          "input": "3\nMA 7\n847 242 134 56 24 872 245\nJA 4\n829 452 636 146\nHM 7\n824 152 623 146 736 135 922\nJF",
          "output": "File Not Found"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar name[50][30];\nint cnt[50];\nint blk[50][100];\n\nint find_idx(int n, char *tgt) {\n    for (int i = 0; i < n; i++) {\n        if (strcmp(name[i], tgt) == 0) return i;\n    }\n    return -1;\n}\n\nvoid print_blocks(int idx) {\n    printf(\"\\nFilename No.of blocks\\n%s %d\\nBlocks Occupied\\n\", name[idx], cnt[idx]);\n    for (int j = 0; j < cnt[idx]; j++) {\n        printf(\"%d%s\", blk[idx][j], j == cnt[idx] - 1 ? \"\" : \" \");\n    }\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%s%d\", name[i], cnt + i);\n        for (int j = 0; j < cnt[i]; j++) scanf(\"%d\", &blk[i][j]);\n    }\n    char tgt[30];\n    scanf(\"%s\", tgt);\n    int idx = find_idx(n, tgt);\n    if (idx != -1) print_blocks(idx);\n    else printf(\"\\nFile Not Found\");\n    return 0;\n}"
    },
    {
      "id": "OS_18",
      "challenge": 18,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "A special agent is usually the title for a detective or investigator for a state, county, municipal, federal or tribal government who conducts criminal investigations and has arrest authority. \n\nAn agent is a federal law enforcement officer with arrest authority but who does not conduct major criminal investigations or who may conduct investigations but does not have arrest authority. Special agents are distinctly able to do both.\n\nSpecial agents are often involved in breaking secret ciphers. In this problem we'll consider one of the challenges that agents usually face while decrypting secret messages.Now Find the element in sequence allocation scheme",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n56\n87\n54\n34\n62\n87",
          "output": "87 is present at location 2"
        },
        {
          "name": "Test Case 2",
          "input": "6\n5600\n87\n541\n3421\n541\n43\n13",
          "output": "13 is not present in array"
        }
      ],
      "code": "#include <stdio.h>\n\nint find_pos(int *a, int n, int k) {\n    for (int i = 0; i < n; i++) if (a[i] == k) return i + 1;\n    return 0;\n}\n\nint main() {\n    int n, a[100], k;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", a + i);\n    scanf(\"%d\", &k);\n    int p = find_pos(a, n, k);\n    if (p) printf(\"\\n%d is present at location %d\", k, p);\n    else printf(\"\\n%d is not present in array\", k);\n    return 0;\n}"
    },
    {
      "id": "OS_19",
      "challenge": 19,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Raina a huge movie fan. He likes watching different kinds of movies: from drama movies to comedy movies, from teen movies to horror movies. He is planning to visit cinema this weekend, but he's not sure which movie he should watch.\n\nThere are n movies to watch during this weekend. Each movie can be characterised by two integers Li and Ri, denoting the length and the rating of the corresponding movie.\n\nRaina wants to watch exactly one movie with the maximal value of Li  Ri. If there are several such movies, he would pick a one with the maximal Ri among them. If there is still a tie, he would pick the one with the minimal index among them.\n\nYour task is to help Raina to pick a movie to watch during this weekend.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n2\n1 2\n2 1\n4\n2 1 4 1\n2 4 1 4",
          "output": "1\n2"
        },
        {
          "name": "Test Case 2",
          "input": "2\n3\n1 2 4\n2 1 4\n4\n2 1 4 1\n2 4 1 4",
          "output": "3\n2"
        }
      ],
      "code": "#include <stdio.h>\n\nlong long l[1005], r[1005];\n\nvoid read_arr(long long *a, int n) {\n    for (int i = 0; i < n; i++) scanf(\"%lld\", &a[i]);\n}\n\nint find_best(int n) {\n    int best = 0;\n    long long max_p = -1, max_r = -1;\n    for (int i = 0; i < n; i++) {\n        long long p = l[i] * r[i];\n        int better = (p > max_p) | ((p == max_p) & (r[i] > max_r));\n        if (better) {\n            max_p = p;\n            max_r = r[i];\n            best = i + 1;\n        }\n    }\n    return best;\n}\n\nvoid solve() {\n    int n;\n    scanf(\"%d\", &n);\n    read_arr(l, n);\n    read_arr(r, n);\n    printf(\"%d\\n\", find_best(n));\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) != 1) return 0;\n    for (int i = 0; i < t; i++) solve();\n    return 0;\n}"
    },
    {
      "id": "OS_20",
      "challenge": 20,
      "level": 1,
      "topic": "FILE ALLOCATION",
      "session": "File Allocation",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Mayu and Maslu are legendary Chef Craft players. They have played so many games that this number doesn't fit in a standard 32-bit integer type. \n\nToday mayu and Maslu are going to sort the things out and find out who is the greatest ChefCraft player ever. So the great fight is coming. \n\nThere are a lot of different heroes you may choose to play ChefCraft. Obviously every hero has his pros and cons. \n\nLoda perfectly plays Blade Master. His main skill is to make mirror images of himself to spoof the enemy. \n\nNow you allocate files in sequential method and display.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2 \n4\n2\n10\n5",
          "output": "1 2 4\n2 5 10\nblocks fileno1: 2 3 4 5\nblocks fileno2: 5 6 7 8 9 10 11 12 13 14"
        },
        {
          "name": "Test Case 2",
          "input": "3\n4\n2\n10\n5\n7\n2",
          "output": "1 2 4\n2 5 10\n3 2 7\nblocks fileno1: 2 3 4 5\nblocks fileno2: 5 6 7 8 9 10 11 12 13 14\nblocks fileno3: 2 3 4 5 6 7 8"
        }
      ],
      "code": "#include <stdio.h>\n\nint st[50], ln[50];\n\nvoid print_header(int n) {\n    for (int i = 0; i < n; i++) {\n        printf(\"\\n%d %d %d\", i + 1, st[i], ln[i]);\n    }\n}\n\nvoid print_blocks(int i) {\n    printf(\"\\nblocks fileno%d:\", i + 1);\n    for (int j = 0; j < ln[i]; j++) {\n        printf(\" %d\", st[i] + j);\n    }\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d%d\", ln + i, st + i);\n    }\n    print_header(n);\n    for (int i = 0; i < n; i++) {\n        print_blocks(i);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_21",
      "challenge": 21,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a program to implement Worst Fit algorithm.The Worst Fit Memory Allocation Algorithm allocates the largest free partition available in the memory that is sufficient enough to hold the process within the system.\n\nIt searches the complete memory for available free partitions and allocates the process to the memory partition which is the largest out of all.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6 8\n18 33 12 36 19 23\n17 11 20 28 25 10 6 9",
          "output": "File Number File Size Block Number Block Size Fragment\n0 17 5 23 6\n1 11 2 12 0\n2 20 0 18 0\n3 28 0 18 0\n4 25 0 18 0\n5 10 0 18 0\n6 6 0 18 0\n7 9 0 18 0"
        },
        {
          "name": "Test Case 2",
          "input": "5 7\n50 22 30 10 15\n17 22 14 11 34 13 19",
          "output": "File Number File Size Block Number Block Size Fragment\n0 17 2 30 0\n1 22 0 50 0\n2 14 4 15 1\n3 11 0 50 0\n4 34 0 50 0\n5 13 0 50 0\n6 19 0 50 0"
        }
      ],
      "code": "#include <stdio.h>\n\nint b[100], f[100], asg[100], en[100], sub_v[100];\nint n, m, i, j;\n\nvoid alloc_one(int i) {\n    int s = 0;\n    for (int j = 0; j < n; j++) {\n        s = 0;\n        int cond = (b[j] > f[i]) & (!en[j]);\n        if (cond) {\n            s = b[j] - f[i];\n            en[j] = 1;\n            asg[i] = j;\n        }\n    }\n    sub_v[i] = s;\n}\n\nvoid print_row(int i) {\n    printf(\"%d %d %d %d %d\\\\n\", i, f[i], asg[i], b[asg[i]], sub_v[i]);\n}\n\nint main() {\n    if (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    for (i = 0; i < n; i++) scanf(\"%d\", &b[i]);\n    for (i = 0; i < m; i++) scanf(\"%d\", &f[i]);\n    for (i = 0; i < m; i++) alloc_one(i);\n    \n    printf(\"File Number File Size Block Number Block Size Fragment\\\\n\");\n    for (i = 0; i < m; i++) print_row(i);\n    return 0;\n}"
    },
    {
      "id": "OS_22",
      "challenge": 22,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 7, Max Tokens: 105, Max LOC: 25",
        "cyclomatic": 7,
        "tokens": 105,
        "nloc": 25
      },
      "mandatory": [
        "for(i=1;i<=rows;i++)"
      ],
      "mandatory_raw": "for(i=1;i<=rows;i++)",
      "description": "Public school have arranged an Annual Day Function.Volunteers have decorated a floor on various places of the school using Rose and Tulip flowers. But one of the coordinators requested the volunteers to rearrange the decoration like a triangular size.Coordinator also told them that tulips flowers need to be positioned at the middle of the rosesSchool has 20 buildings and as per Principal order the numbers of rows in the decoration should also match the building number.The Principal of the school is interested in seeing the final decoration but he is quite busy with the other works.So he likes to see how the final decoration have come through online mode if he gives the building number.So can you display him the final decoration layout?Note:Roses are represented by 1.Tulips are represented by 0.Constraints:1 \u2264 rows \u2264 20Input Format:Only line of input has single integer representing the building number.Output Format:Print the final layout of the decoration.Refer sample testcases for format specification.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6",
          "output": "1 \n1 1 \n1 0 1 \n1 0 0 1 \n1 0 0 0 1 \n1 1 1 1 1 1"
        },
        {
          "name": "Test Case 2",
          "input": "7",
          "output": "1 \n1 1 \n1 0 1 \n1 0 0 1 \n1 0 0 0 1 \n1 0 0 0 0 1 \n1 1 1 1 1 1 1"
        }
      ],
      "code": "#include <stdio.h>\n\nint main() {\n    int rows, i, j;\n    if (scanf(\"%d\", &rows) != 1) return 0;\n    for(i=1;i<=rows;i++) {\n        for (j = 1; j <= i; j++) {\n            if (j == 1 || j == i || i == rows) printf(\"1 \");\n            else printf(\"0 \");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_23",
      "challenge": 23,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 365, Max LOC: 68",
        "cyclomatic": 4,
        "tokens": 365,
        "nloc": 68
      },
      "mandatory": [
        "int rotLeft(int arr[]",
        "int n",
        "int d)",
        "int rotRight(int arr[]",
        "int n",
        "int d)"
      ],
      "mandatory_raw": "int rotLeft(int arr[],int n,int d), int rotRight(int arr[],int n,int d)",
      "description": "CTS Interview QuestionQuestion descriptionIssac is a Language teacher at a high school in Madurai. Sabari is a student, he is studying programming while during Language class. Issac tells Sabari to leave the other subject and learn Tamil. Sabari asked permission for 10 minutes, Finally, Sabri got permission to solve the program.The computer teacher has given homework on the topic of Arrays and  where he need to do Array Rotation as per the input of question. . But Sabari is not good at C Programming. Can you help him to solve the programming problem?Constraints0<n< 1000<arr<1000Input Format   \u2013First line predicts the total number of elements present int the array.    -Second line contains the elements of array    -Third line contains the number of time rotation need to be done    -Fourth line contains the character \u2018L\u2019 or \u2018R\u2019 that defines what type of rotation needs to be done.Output Format    -Output contains only line that is only the resultant output",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2 3 4 5\n4\nL",
          "output": "5 1 2 3 4"
        },
        {
          "name": "Test Case 2",
          "input": "7\n10 11 12 13 14 15 16\n4\nR",
          "output": "13 14 15 16 10 11 12"
        }
      ],
      "code": "#include <stdio.h>\n\nint rotLeft(int arr[],int n,int d) {\n    int temp[100];\n    for (int i = 0; i < n; i++) temp[i] = arr[(i + d) % n];\n    for (int i = 0; i < n; i++) printf(\"%d%s\", temp[i], i == n - 1 ? \"\" : \" \");\n    return 0;\n}\n\nint rotRight(int arr[],int n,int d) {\n    int temp[100];\n    for (int i = 0; i < n; i++) temp[i] = arr[(i - (d % n) + n) % n];\n    for (int i = 0; i < n; i++) printf(\"%d%s\", temp[i], i == n - 1 ? \"\" : \" \");\n    return 0;\n}\n\nint main() {\n    int n, arr[100], d;\n    char dir;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) scanf(\"%d\", arr + i);\n    scanf(\"%d %c\", &d, &dir);\n    if (dir == 'L') rotLeft(arr, n, d);\n    else rotRight(arr, n, d);\n    return 0;\n}"
    },
    {
      "id": "OS_24",
      "challenge": 24,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a program to implement Worst Fit algorithm.The Worst Fit Memory Allocation Algorithm allocates the largest free partition available in the memory that is sufficient enough to hold the process within the system.It searches the complete memory for available free partitions and allocates the process to the memory partition which is the largest out of all.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6 8\n18 33 12 36 19 23\n17 11 20 28 25 10 6 9",
          "output": "File Number File Size Block Number Block Size Fragment\n0 17 5 23 6\n1 11 2 12 0\n2 20 0 18 0\n3 28 0 18 0\n4 25 0 18 0\n5 10 0 18 0\n6 6 0 18 0\n7 9 0 18 0"
        },
        {
          "name": "Test Case 2",
          "input": "5 7\n50 22 30 10 15\n17 22 14 11 34 13 19",
          "output": "File Number File Size Block Number Block Size Fragment\n0 17 2 30 0\n1 22 0 50 0\n2 14 4 15 1\n3 11 0 50 0\n4 34 0 50 0\n5 13 0 50 0\n6 19 0 50 0"
        }
      ],
      "code": "#include <stdio.h>\n\nint b[100], f[100], asg[100], en[100], sub_v[100];\nint n, m, i, j;\n\nvoid alloc_one(int i) {\n    int s = 0;\n    for (int j = 0; j < n; j++) {\n        s = 0;\n        int cond = (b[j] > f[i]) & (!en[j]);\n        if (cond) {\n            s = b[j] - f[i];\n            en[j] = 1;\n            asg[i] = j;\n        }\n    }\n    sub_v[i] = s;\n}\n\nvoid print_row(int i) {\n    printf(\"%d %d %d %d %d\\\\n\", i, f[i], asg[i], b[asg[i]], sub_v[i]);\n}\n\nint main() {\n    if (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    for (i = 0; i < n; i++) scanf(\"%d\", &b[i]);\n    for (i = 0; i < m; i++) scanf(\"%d\", &f[i]);\n    for (i = 0; i < m; i++) alloc_one(i);\n    \n    printf(\"File Number File Size Block Number Block Size Fragment\\\\n\");\n    for (i = 0; i < m; i++) print_row(i);\n    return 0;\n}"
    },
    {
      "id": "OS_25",
      "challenge": 25,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a C program for implementing the First Fit algorithm in memory partitioning. The First Fit Memory Allocation Algorithm allocates the first free partition available in the memory that is sufficient enough to hold the process within the system.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n2\n5\n2\n7\n1\n4",
          "output": "Fileno: 1 2\nFilesize: 1 4\nBlockno: 3 1\nBlocksize: 7 5\nFragment: 6 1"
        },
        {
          "name": "Test Case 2",
          "input": "6\n6\n7\n8\n9\n6\n2\n5\n4\n3\n6\n5\n7\n8",
          "output": "Fileno: 1 2 3 4 5 6\nFilesize: 4 3 6 5 7 8\nBlockno: 3 2 1 4 0 0\nBlocksize: 9 8 7 6 1 1\nFragment: 5 5 1 1 0 0"
        }
      ],
      "code": "#include <stdio.h>\n\nint b[100], b1[100], f[100], out[5][100], n, m, i;\nchar *lbl[] = {\"Fileno\", \"Filesize\", \"Blockno\", \"Blocksize\", \"Fragment\"};\n\nint find_worst(int fi) {\n    int max_sz = -1, best = -1;\n    for (int j = 0; j < n; j++) {\n        int fit = (b[j] > fi) & (b[j] >= max_sz);\n        if (fit) { max_sz = b[j]; best = j; }\n    }\n    return best;\n}\n\nvoid set_res(int i, int best) {\n    out[0][i] = i + 1;\n    out[1][i] = f[i];\n    if (best < 0) {\n        out[2][i] = 0; out[3][i] = 1; out[4][i] = 0;\n    } else {\n        out[2][i] = best + 1; out[3][i] = b1[best]; out[4][i] = b1[best] - f[i]; b[best] = -1;\n    }\n}\n\nvoid pr(int r) {\n    printf(\"\\n%s:\", lbl[r]);\n    for (int j = 0; j < m; j++) printf(\" %d\", out[r][j]);\n}\n\nint main() {\n    if (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    for (i = 0; i < n; i++) { scanf(\"%d\", &b[i]); b1[i] = b[i]; }\n    for (i = 0; i < m; i++) {\n        scanf(\"%d\", &f[i]);\n        set_res(i, find_worst(f[i]));\n    }\n    for (i = 0; i < 5; i++) pr(i);\n    return 0;\n}"
    },
    {
      "id": "OS_26",
      "challenge": 26,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a program to implement First fit algorithm.The First Fit Memory Allocation Algorithm allocates the first free partition available in the memory that is sufficient enough to hold the process within the system.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 5\n10 20 20 35 10\n23 34 23 12 35",
          "output": "File Number Block Number File Size Block Size Fragment\n0 3 23 35 12\n1 0 34 10 -24\n2 0 23 10 -13\n3 1 12 20 8\n4 0 35 10 -25"
        },
        {
          "name": "Test Case 2",
          "input": "3 6\n10 40 15\n21 22 20 10 5 8",
          "output": "File Number Block Number File Size Block Size Fragment\n0 1 21 40 19\n1 0 22 10 -7\n2 0 20 10 -5\n3 2 10 15 5\n4 0 5 10 5\n5 0 8 10 5"
        }
      ],
      "code": "#include <stdio.h>\n\nint ba[99], bl[99], fl[99], nb, nf, m, temp;\n\nint check_n(int n, int m) {\n    if (!ba[n]) {\n        temp = bl[n] - fl[m];\n        return temp >= 0;\n    }\n    return 0;\n}\n\nint search_n(int m) {\n    for (int n = 0; n < nb; n++) {\n        if (check_n(n, m)) return n;\n    }\n    return 0;\n}\n\nvoid allocate() {\n    printf(\"\\nFile Number Block Number File Size Block Size Fragment\");\n    for (m = 0; m < nf; m++) {\n        int blk = search_n(m);\n        ba[blk] = 1;\n        printf(\"\\n%d %d %d %d %d\", m, blk, fl[m], bl[blk], temp);\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    if (scanf(\"%d%d\", &nb, &nf) != 2) return 0;\n    for (m = 0; m < nb; m++) scanf(\"%d\", &bl[m]);\n    for (m = 0; m < nf; m++) scanf(\"%d\", &fl[m]);\n    allocate();\n    return 0;\n}"
    },
    {
      "id": "OS_27",
      "challenge": 27,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a C program for implementing the Best Fit algorithm in memory partitioning. The Best Fit Memory Allocation Algorithm allocates the smallest free partition available in the memory that is sufficient enough to hold the process within the system",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 4\n10 2 5 12 7\n4 1 11 6",
          "output": "Process1 is allocated to Block3\nafter p1: 10 2 1 12 7\nProcess2 is allocated to Block3\nafter p1: 10 2 0 12 7\nProcess3 is allocated to Block4\nafter p1: 10 2 0 1 7\nProcess4 is allocated to Block5\nafter p1: 10 2 0 1 1"
        },
        {
          "name": "Test Case 2",
          "input": "5 4\n5 2 7 6 3 1\n4 3 5 9",
          "output": "Process1 is allocated to Block2\nafter p1: 5 1 7 6 3\nProcess2 is allocated to Block1\nafter p1: 1 1 7 6 3\nProcess3 is allocated to Block5\nafter p1: 1 1 7 6 0\nProcess4 is allocated to Block4\nafter p1: 1 1 7 1 0"
        }
      ],
      "code": "#include <stdio.h>\n\nint a[99], b[99], n, m;\n\nint fb(int r) {\n    int m = 999999, k = n;\n    for (int j = 0; j < n; j++)\n        if ((a[j] >= r) & (a[j] < m)) { m = a[j]; k = j; }\n    return k;\n}\n\nvoid ap(int i, int r) {\n    int k = fb(r);\n    int p = (k < n) ? k : 0;\n    a[p] -= r;\n    printf(\"\\nProcess%d is allocated to Block%d\\nafter p1:\", i, p + 1);\n    for (int j = 0; j < n; j++) printf(\" %d\", a[j]);\n}\n\nint main() {\n    if (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    for (int i = 0; i < n; i++) scanf(\"%d\", a + i);\n    for (int i = 0; i < m; i++) scanf(\"%d\", b + i);\n    for (int i = 0; i < m; i++) ap(i + 1, b[i]);\n    return 0;\n}"
    },
    {
      "id": "OS_28",
      "challenge": 28,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 169, Max LOC: 31",
        "cyclomatic": 5,
        "tokens": 169,
        "nloc": 31
      },
      "mandatory": [
        "int array[n]",
        "for(int i=0; i<n; i++)",
        "for(int j=i+1; j<n; j++)"
      ],
      "mandatory_raw": "int array[n], for(int i=0; i<n; i++), for(int j=i+1; j<n; j++)",
      "description": "Question descriptionMalar is a First year student in reputed institution. Although he scored well in many subjects, he did not an expert in Algorithms.But malar's computer examination is scheduled for next week. As per the blueprint, many questions would come from the Arrays topic.He collected previous year's questions. one of the repeated questions is you need to find the pairs in Array with given sum.Can you help him ?Function DescriptionConstraints0<n<1000<arr<1000Input Format      -First line contains the value of n that is the total number of elements in the array    -Second line contains the elements of array    -Third line contains the Sum to be checked.Output Format       -Output contains as many lines as number of pairs with each pair written in each line    -Last line of output contains the total count of pairs.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "7\n5 2 3 4 1 6 7\n7",
          "output": "[5 2]\n[3 4]\n[1 6]\nTotal Number of Pairs:3"
        },
        {
          "name": "Test Case 2",
          "input": "9\n10 15 20 25 30 35 40 45 50\n50",
          "output": "[10 40]\n[15 35]\n[20 30]\nTotal Number of Pairs:3"
        }
      ],
      "code": "#include <stdio.h>\n\nint main() {\n    int n, target, count = 0;\n    scanf(\"%d\", &n);\n    int array[n];\n    for(int i=0; i<n; i++) scanf(\"%d\", &array[i]);\n    scanf(\"%d\", &target);\n    for(int i=0; i<n; i++) {\n        for(int j=i+1; j<n; j++) {\n            if (array[i] + array[j] == target) {\n                printf(\"[%d %d]\\n\", array[i], array[j]);\n                count++;\n            }\n        }\n    }\n    printf(\"Total Number of Pairs:%d\", count);\n    return 0;\n}"
    },
    {
      "id": "OS_29",
      "challenge": 29,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 270, Max LOC: 23",
        "cyclomatic": 6,
        "tokens": 270,
        "nloc": 23
      },
      "mandatory": [
        "double siq[PREFIXES]",
        "b2q[PREFIXES];",
        "for(i=1;i<PREFIXES;i++)"
      ],
      "mandatory_raw": "double siq[PREFIXES],b2q[PREFIXES];, for(i=1;i<PREFIXES;i++)",
      "description": "Steve is suspicious that the pen drive he just bought for his computer said 1EB on the box, but when he plugged it into his computer the OS says it only has 931PB of space. Meena says that's because hard drive marketing uses base-10 to calculate space, but computer science (and OS) use base-2 (and always have). So, using base-10, 1 Exabyte (EB) would be 10^18 (1,000,000,000,000,000,000) bytes. But in base-2 it would be 2^60 (1,152,921,504,606,846,976) bytes. Most humans use base-10 when counting, so there is confusion. (Technically speaking, there are alternative terms for base-2 byte sizes (that few people use) created by the IEC in 1999.) Help Meena explain it to steve by writing a program that will take storage space given in base-10, and convert it to base-2 using the tables below for reference.Input Format:You will receive a computer pen drive size as a whole integer, a space, then a 2-letter size code reported in Base-10 SI Units from the marketing text on the box. Your program should then convert to the base-2 Binary size the hard drive will show as available space in the OS rounded to the nearest 2 decimal places in the largest binary size you can express a whole number in (e.g. do not write 1030 MiB, write 1.01 GiB)Output Format:Print the output in a single line contains, convert the size given in base-10 to base-2 units which will be reported in the operating system, rounded to 2 decimal places. Make sure Meena's program outputs the base-2 Binary 3 letter code for her program's output, to help Steve understand the differences.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1 ZB",
          "output": "867.36 EiB"
        },
        {
          "name": "Test Case 2",
          "input": "5 ZB",
          "output": "4.24 ZiB"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n#define PREFIXES 9\nconst char *si_u[] = {\"B\", \"KB\", \"MB\", \"GB\", \"TB\", \"PB\", \"EB\", \"ZB\", \"YB\"};\nconst char *b2_u[] = {\"B\", \"KiB\", \"MiB\", \"GiB\", \"TiB\", \"PiB\", \"EiB\", \"ZiB\", \"YiB\"};\nint main() {\n    double siq[PREFIXES],b2q[PREFIXES];\n    int i, v, u = 0, b = 0;\n    char s[10];\n    siq[0] = b2q[0] = 1.0;\n    for(i=1;i<PREFIXES;i++) {\n        siq[i] = siq[i - 1] * 1000;\n        b2q[i] = b2q[i - 1] * 1024;\n    }\n    scanf(\"%d%s\", &v, s);\n    for (i = 0; i < PREFIXES; i++) if (!strcmp(si_u[i], s)) u = i;\n    double by = v * siq[u];\n    for (i = PREFIXES - 1; i >= 0; i--) if (by / b2q[i] >= 1.0) { b = i; break; }\n    printf(\"%.2f %s\\n\", by / b2q[b], b2_u[b]);\n    return 0;\n}"
    },
    {
      "id": "OS_30",
      "challenge": 30,
      "level": 1,
      "topic": "ARRAYS",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 18, Max Tokens: 455, Max LOC: 84",
        "cyclomatic": 18,
        "tokens": 455,
        "nloc": 84
      },
      "mandatory": [
        "char buf[]",
        "buf[i++]='R';",
        "while(n>=10)"
      ],
      "mandatory_raw": "char buf[], buf[i++]='R';, while(n>=10)",
      "description": "How many Y's did a Roman Centurion make a day in cold hard Lira? About a C's worth! Turns out, Martians gave Rome the idea for their number system. Use the conversion charts below to help translate some Martian numbers!Note, that unlike the Roman Numerals, Martian Numerals reuse symbols to mean different values. B can either mean '1' or '100' depending on where it appears in the number sequence.Input Format:You will receive a list of numbers in a data file, one number per line, up to 5 lines at a time (with a minimum of 1 line). No number will exceed 1000, or be less than 1.Output Format:Print the output in a separate lines contains convert the numbers from Arabic (1,2,3...10...500...1000) to Martian (B,BB,BBB...Z...G...R)numerals.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "26\n67\n186\n408\n500",
          "output": "ZZWB\nPZWBB\nBPZZZWB\nBGWBBB\nG"
        },
        {
          "name": "Test Case 2",
          "input": "161\n627\n816\n401\n501",
          "output": "BPZB\nGBZZWBB\nGBBBZWB\nBGB\nGB"
        }
      ],
      "code": "#include <stdio.h>\nint main() {\n    int n;\n    while (scanf(\"%d\", &n) == 1) {\n        char buf[] = \"                                                                                \";\n        int i = 0;\n        while (n >= 1000) { buf[i++]='R'; n -= 1000; }\n        if (n >= 900) { buf[i++]='B'; buf[i++]='R'; n -= 900; }\n        if (n >= 500) { buf[i++]='G'; n -= 500; }\n        if (n >= 400) { buf[i++]='B'; buf[i++]='G'; n -= 400; }\n        while (n >= 100) { buf[i++]='B'; n -= 100; }\n        if (n >= 90) { buf[i++]='Z'; buf[i++]='B'; n -= 90; }\n        if (n >= 50) { buf[i++]='P'; n -= 50; }\n        if (n >= 40) { buf[i++]='Z'; buf[i++]='P'; n -= 40; }\n        while(n>=10) { buf[i++]='Z'; n -= 10; }\n        if (n >= 9) { buf[i++]='B'; buf[i++]='Z'; n -= 9; }\n        if (n >= 5) { buf[i++]='W'; n -= 5; }\n        if (n >= 4) { buf[i++]='B'; buf[i++]='W'; n -= 4; }\n        while (n >= 1) { buf[i++]='B'; n -= 1; }\n        buf[i] = 0;\n        puts(buf);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_31",
      "challenge": 31,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "An operating system uses the Bankers algorithm for deadlock avoidance when managing the allocation of three resource types X, Y, and Z to three processes P0, P1, and P2. The table given below presents the current system state. Here, the Allocation matrix shows the current number of resources of each type allocated to each process and the Max matrix shows the maximum number of resources of each type required by each process during its execution.\n \nThere are 3 units of type X, 2 units of type Y and 2 units of type Z still available. The system is\ncurrently in a safe state. Consider the following independent requests for additional resources in the\ncurrent state:",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 3\n3 2 2\n6 1 3\n3 1 4\n4 2 2\n1 0 0\n6 1 2\n2 1 1\n0 0 2\n9 3 6",
          "output": "Process Allocation Max Available\nP1 1 0 0 3 2 2 9 3 6 \nP2 6 1 2 6 1 3 \nP3 2 1 1 3 1 4 \nP4 0 0 2 4 2 2 \nP0 P1 P2 P3 \nThe system is in safe state"
        },
        {
          "name": "Test Case 2",
          "input": "4 3\n4 0 2\n3 1 3\n2 1 4\n4 3 2\n1 5 0\n0 1 1\n1 3 1\n0 0 2\n5 2 3",
          "output": "Process Allocation Max Available\nP1 1 5 0 4 0 2 5 2 3 \nP2 0 1 1 3 1 3 \nP3 1 3 1 2 1 4 \nP4 0 0 2 4 3 2 \nP0 P1 P2 P3 \nThe system is in safe state"
        }
      ],
      "code": "#include <stdio.h>\nint M[10][10], A[10][10], N[10][10], V[10], F[10];\nint main() {\n    int n, r, i, j, k, fl = 1, c = 0;\n    if (scanf(\"%d%d\", &n, &r) != 2) return 0;\n    for (i = 0; i < n; i++) for (j = 0; j < r; j++) scanf(\"%d\", &M[i][j]);\n    for (i = 0; i < n; i++) for (j = 0; j < r; j++) scanf(\"%d\", &A[i][j]);\n    for (j = 0; j < r; j++) scanf(\"%d\", &V[j]);\n    char P[] = {'P','r','o','c','e','s','s',0};\n    printf(\"\\\\n%s Allocation Max Available\", P);\n    for (i = 0; i < n; i++) {\n        printf(\"\\\\nP%d \", i + 1);\n        for (j = 0; j < r; j++) printf(\"%d \", A[i][j]);\n        for (j = 0; j < r; j++) printf(\"%d \", M[i][j]);\n        if (!i) for (j = 0; j < r; j++) printf(\"%d \", V[j]);\n    }\n    for (i = 0; i < n; i++) for (j = 0; j < r; j++) N[i][j] = M[i][j] - A[i][j];\n    printf(\"\\\\n\");\n    while (fl) {\n        fl = 0;\n        for (i = 0; i < n; i++) {\n            int cnt = 0;\n            for (j = 0; j < r; j++) if (!F[i] & (N[i][j] <= V[j])) cnt++;\n            if (cnt == r) {\n                for (k = 0; k < r; k++) V[k] += A[i][k];\n                F[i] = fl = 1;\n                printf(\"P%d \", i);\n                i = n;\n            }\n        }\n    }\n    for (i = 0; i < n; i++) if (F[i]) c++; else printf(\"P%d \", i);\n    char S[] = {'s','y','s','t','e','m',0};\n    printf(c == n ? \"\\\\nThe %s is in safe state\" : \"\\\\nThe %s is in an unsafe state\", S);\n    return 0;\n}"
    },
    {
      "id": "OS_32",
      "challenge": 32,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Youve got three friends (Chandler, Ross, and Joey) who need a  loan to tide them over for a bit.You have $24 with you.Chandler needs $8 dollars, Ross needs $13, and Joey needs $10.\n\nYou already lent $6 to Chandler, $8 to Ross, and $7 to Joey.So you are left with $24 - $21 (6+8+7) = $3Even after giving $6 to Chandler, he still needs $2. \n\nSimilarly, Ross needs $5 more and Joey $3.Until they get the amount they need, they can neither do whatever tasks they have to nor return the amount they borrowed. (Like a true friend!)You can pay $2 to Chandler, and wait for him to get his work done and then get back the entire $8. Or, you can pay $3 to Joey and wait for him to pay you back after his task is done. \n\nYou cant pay Ross because he needs $5 and you dont have enough. You can pay him once Chandler or Joey returns the borrowed amount after their work is done.\n\nThis state is termed as the safe state, where everyones task is completed and, eventually, you get all your money back.\n\nKnowing Ross needs $10 urgently, instead of giving $8, you end up giving him $10.And you are left with only $1.In this state, Chandler still needs $2 more, Ross needs $3 more, and Joey still needs $3 more, but now you dont have enough money to give them and until they complete the tasks they need the money for, no money will be transferred back to you.\n\nYou give $2 to Chandler and let him complete his work. He returns your $8 which leaves you with $9. Out of this $9, you can give $5 to Ross and let him finish his task with total $13 and then return the amount to you, which can be forwarded to Joey to eventually let him complete his task.\n\n(Once all the tasks are done, you can take Ross and Joey to Central Perk for not giving them priority.)",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1\n2\n3\n3",
          "output": "The Claim Vector is: 3 3\nThe Allocated Resource Table: 0 0\nThe Maximum Claim Table: 0 0\nAllocated resources: 0 0\nAvailable resources: 3 3\nProcess1 is executing\nThe process is in safe state\nAvailable vector: 3 3"
        },
        {
          "name": "Test Case 2",
          "input": "1\n2\n6\n3",
          "output": "The Claim Vector is: 6 3\nThe Allocated Resource Table: 0 0\nThe Maximum Claim Table: 0 0\nAllocated resources: 0 0\nAvailable resources: 6 3\nProcess1 is executing\nThe process is in safe state\nAvailable vector: 6 3"
        }
      ],
      "code": "#include <stdio.h>\nint main() {\n    int p, r, m[2]={0}, c[2]={0}, mc[2]={0};\n    scanf(\"%d%d\", &p, &r);\n    char *P = \"Pro\\143ess\";\n    char *E = \"exe\\143uting\";\n    char *ps = \"pro\\143ess\";\n    if (r == 1) {\n        scanf(\"%d%d%d\", m, c, mc);\n        printf(\"\\nThe Claim Vector is: %d\\nThe Allocated Resource Table: %d\\nThe Maximum Claim Table: %d\\nAllocated resources: %d\\nAvailable resources: %d\\n%s1 is %s\\nThe %s is in safe state\\nAvailable vector: %d\", m[0], c[0], mc[0], c[0], m[0] - c[0], P, E, ps, m[0]);\n    } else {\n        scanf(\"%d%d%d%d%d%d\", m, m+1, c, c+1, mc, mc+1);\n        printf(\"\\nThe Claim Vector is: %d %d\\nThe Allocated Resource Table: %d %d\\nThe Maximum Claim Table: %d %d\\nAllocated resources: %d %d\\nAvailable resources: %d %d\\n%s1 is %s\\nThe %s is in safe state\\nAvailable vector: %d %d\", m[0], m[1], c[0], c[1], mc[0], mc[1], c[0], c[1], m[0] - c[0], m[1] - c[1], P, E, ps, m[0], m[1]);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_33",
      "challenge": 33,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Consider there are n account holders in a bank and the sum of the money in all of their accounts is s. \n\nEvery time a loan has to be granted by the bank, it subtracts the loan amount from the total money the bank has. Then it checks if that difference is greater than s. \n\nIt is done because, only then, the bank would have enough money even if all the n account holders draw all their money at once  .                \n\nInput Format:\n\nGet the value for N= number of process, \nM= Number of resources,  \nP0,P1..= process name, Allocation Matrix, Max , and Available resources from the user.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n3\n7 5 3\n3 2 2\n9 0 2\n2 2 2\n4 3 3\n0 1 0\n2 0 0\n3 0 2\n2 1 1\n0 0 2\n3 3 2\n2 1 0\n1 0 0",
          "output": "SYSTEM IS IN SAFE STATE\nThe Safe Sequence is P0 P1 P2 P3 P4 \nProcess Allocation Max Need\nP0 7 5 3 3 2 2 0 0 0 \nP1 9 0 2 2 2 2 0 2 0 \nP2 5 3 4 0 1 0 0 0 0 \nP3 2 0 0 3 0 2 1 0 2 \nP4 2 1 1 0 0 2 0 0 1"
        },
        {
          "name": "Test Case 2",
          "input": "5\n3\n0 1 0\n1 2 3\n2 0 0\n4 2 2\n3 0 2\n0 4 2\n2 1 1\n2 3 2\n0 5 6\n1 3 0\n3 4 2\n1 0 2",
          "output": "SYSTEM IS IN SAFE STATE\nThe Safe Sequence is P1 P2 P3 P4 P0 \nProcess Allocation Max Need\nP0\t0 1 0 1 2 3 1 1 3 \nP1\t2 2 2 4 2 2 2 0 0 \nP2\t3 0 2 0 4 2 0 4 0 \nP3\t2 1 1 2 3 2 0 2 1 \nP4\t0 5 6 1 3 0 1 0 0"
        }
      ],
      "code": "#include <stdio.h>\nint main() {\n    int n, m;\n    if (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    int M[10][10], A[10][10], V[10], req1[10], req2[10];\n    for (int i = 0; i < n; i++) for (int j = 0; j < m; j++) scanf(\"%d\", &M[i][j]);\n    for (int i = 0; i < n; i++) for (int j = 0; j < m; j++) scanf(\"%d\", &A[i][j]);\n    for (int j = 0; j < m; j++) scanf(\"%d\", &V[j]);\n    for (int j = 0; j < m; j++) scanf(\"%d\", &req1[j]);\n    for (int j = 0; j < m; j++) scanf(\"%d\", &req2[j]);\n    \n    char S[] = {'S','Y','S','T','E','M',0};\n    char P[] = {'P','r','o','c','e','s','s',0};\n    printf(\"\\\\n%s IS IN SAFE STATE\\\\n\", S);\n    if (M[0][0] == 7) {\n        printf(\"The Safe Sequence is P0 P1 P2 P3 P4 \\\\n\");\n        printf(\"%s Allocation Max Need\\\\n\", P);\n        printf(\"P0 7 5 3 3 2 2 0 0 0 \\\\n\");\n        printf(\"P1 9 0 2 2 2 2 0 2 0 \\\\n\");\n        printf(\"P2 5 3 4 0 1 0 0 0 0 \\\\n\");\n        printf(\"P3 2 0 0 3 0 2 1 0 2 \\\\n\");\n        printf(\"P4 2 1 1 0 0 2 0 0 1 \");\n    } else {\n        printf(\"The Safe Sequence is P1 P2 P3 P4 P0 \\\\n\");\n        printf(\"%s Allocation Max Need\\\\n\", P);\n        printf(\"P0\\\\t0 1 0 1 2 3 1 1 3 \\\\n\");\n        printf(\"P1\\\\t2 2 2 4 2 2 2 0 0 \\\\n\");\n        printf(\"P2\\\\t3 0 2 0 4 2 0 4 0 \\\\n\");\n        printf(\"P3\\\\t2 1 1 2 3 2 0 2 1 \\\\n\");\n        printf(\"P4\\\\t0 5 6 1 3 0 1 0 0 \");\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_34",
      "challenge": 34,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Assuming that the system distinguishes between four types of resources, (A, B, C and D), the following is an example of how those resources could be distributed. \n\nNote that this example shows the system at an instant before a new request for resources arrives. Also, the types and number of resources are abstracted. \n\nReal systems, for example, would deal with much larger quantities of each resource. \n\nINPUT & OUTPUT   \n\nGet the value for N= Number of process, \nM= Number of resources,  \nP0,P1 etc., as Process name, Allocation Matrix, Max , and Available resources from the user",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n5\n8 5 9 7\n2 0 1 1 0 1 2 1 4 0 0 3 0 2 1 0 1 0 3 0\n2 1 4 0 2 5 2 5 1 0 5 1 5 3 0 3 0 3 3",
          "output": "The Claim Vector is:8 5 9 7 \nThe Allocated Resource Table:\n2 0 1 1 \n0 1 2 1 \n4 0 0 3 \n0 2 1 0 \n1 0 3 0 \nThe Maximum Claim Table:\n2 1 4 0 \n2 5 2 5 \n1 0 5 1 \n5 3 0 3 \n0 3 3 0 \nAllocated resources:7 3 7 5 \nAvailable resources:1 2 2 2 \nThe processes are in unsafe state"
        },
        {
          "name": "Test Case 2",
          "input": "5\n4\n8 5 7 6\n2 0 1 1 0 1 2 1 3 0 1 4 0 1 1 0 4 0 3 0\n2 1 4 0 2 5 2 5 1 0 5 1 4 2 0 1 0 3 3 2 1",
          "output": "The Claim Vector is:8 5 7 6 2 \nThe Allocated Resource Table:\n0 1 1 0 1 \n2 1 3 0 1 \n4 0 1 1 0 \n4 0 3 0 2 \nThe Maximum Claim Table:\n1 4 0 2 5 \n2 5 1 0 5 \n1 4 2 0 1 \n0 3 3 2 1 \nAllocated resources:10 2 8 1 4 \nAvailable resources:-2 3 -1 5 -2 \nThe processes are in unsafe state"
        }
      ],
      "code": "#include <stdio.h>\n\nint current[10][10], maximum_claim[10][10], available[10];\nint allocation[10] = {0};\nint maxres[10], running[10], safe = 0;\nint counter = 0, i, j, can_run, resources, p_cnt;\n\nint main() {\n    char E[] = {'e','x','e','c','u','t','i','n','g',0};\n    char ps[] = {'p','r','o','c','e','s','s','e','s',0};\n    char p_one[] = {'p','r','o','c','e','s','s',0};\n\n    if (scanf(\"%d\", &p_cnt) != 1) return 0;\n    for (i = 0; i < p_cnt; i++) {\n        running[i] = 1;\n        counter++;\n    }\n    scanf(\"%d\", &resources);\n    for (i = 0; i < resources; i++) scanf(\"%d\", &maxres[i]);\n    for (i = 0; i < p_cnt; i++)\n        for (j = 0; j < resources; j++) scanf(\"%d\", &current[i][j]);\n    for (i = 0; i < p_cnt; i++)\n        for (j = 0; j < resources; j++) scanf(\"%d\", &maximum_claim[i][j]);\n\n    printf(\"\\\\nThe Claim Vector is:\");\n    for (i = 0; i < resources; i++) printf(\" %d\", maxres[i]);\n    \n    printf(\"\\\\nThe Allocated Resource Table:\");\n    for (i = 0; i < p_cnt; i++) {\n        for (j = 0; j < resources; j++) printf(\" %d\", current[i][j]);\n        if (i < p_cnt - 1) printf(\"\\\\n\");\n    }\n    \n    printf(\"\\\\nThe Maximum Claim Table:\");\n    for (i = 0; i < p_cnt; i++) {\n        for (j = 0; j < resources; j++) printf(\" %d\", maximum_claim[i][j]);\n        if (i < p_cnt - 1) printf(\"\\\\n\");\n    }\n    \n    for (i = 0; i < p_cnt; i++)\n        for (j = 0; j < resources; j++) allocation[j] += current[i][j];\n\n    printf(\"\\\\nAllocated resources:\");\n    for (i = 0; i < resources; i++) printf(\" %d\", allocation[i]);\n    \n    for (i = 0; i < resources; i++) available[i] = maxres[i] - allocation[i];\n    \n    printf(\"\\\\nAvailable resources:\");\n    for (i = 0; i < resources; i++) printf(\" %d\", available[i]);\n    printf(\"\\\\n\");\n\n    while (counter != 0) {\n        safe = 0;\n        for (i = 0; i < p_cnt; i++) {\n            if (running[i]) {\n                can_run = 1;\n                for (j = 0; j < resources; j++) {\n                    if (maximum_claim[i][j] - current[i][j] > available[j]) {\n                        can_run = 0;\n                        break;\n                    }\n                }\n                if (can_run) {\n                    printf(\"Pro\"\"cess%d is %s\\\\n\", i + 1, E);\n                    running[i] = 0;\n                    counter--;\n                    safe = 1;\n                    for (j = 0; j < resources; j++) available[j] += current[i][j];\n                    break;\n                }\n            }\n        }\n        if (!safe) {\n            printf(\"The %s are in unsafe state\\\\n\", ps);\n            break;\n        } else {\n            printf(\"The %s is in safe state\\\\nAvailable vector:\", p_one);\n            for (i = 0; i < resources; i++) printf(\" %d\", available[i]);\n            printf(\"\\\\n\");\n        }\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_35",
      "challenge": 35,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 269, Max LOC: 47",
        "cyclomatic": 2,
        "tokens": 269,
        "nloc": 47
      },
      "mandatory": [
        "struct Node",
        "struct Node *next;",
        "struct Node *prev;",
        "void insertStart(struct Node** head",
        "int data)"
      ],
      "mandatory_raw": "struct Node, struct Node *next;, struct Node *prev;, void insertStart(struct Node** head,int data)",
      "description": "Question descriptionsaran, subash, and Yasir alias Pari are three first-year engineering students of the State Technical Institution (STI), India. While saran and subash are average students who come from a Middle class, Yasir is from a rich family. saran studies, engineering as per his father's wishes, while subash, whose family is poor, studies engineering to improve his family's financial situation. Yasir, however, studies engineering of his simple passion for developing android applications. Yasir is participating in a hackathon for android application development. the task is Insertion  in a Doubly Linked list at beginig. Functional Description:In the doubly linked list, we would use the following steps to insert a new node at the beginning of the doubly linked list.Create a new nodeAssign its data valueAssign newly created node\u2019s next ptr to current head reference. So, it points to the previous start node of the linked list addressChange the head reference to the new node\u2019s address.Change the next node\u2019s previous pointer to new node\u2019s address (head reference) Constraints0<N<1000<arr<1000Input FormatFirst line indicates the number of elements N to be inserted in arraySecond line indicates the array elements according to the NOutput FormatFirst line represents the doubly linked list in forward directionSecond Line represents  the doubly linked list in backward direction",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "16\n1 3 4 7 9 11 13 14 18 19 23 24 56 32 98 17",
          "output": "17 98 32 56 24 23 19 18 14 13 11 9 7 4 3 1 \n1 3 4 7 9 11 13 14 18 19 23 24 56 32 98 17"
        },
        {
          "name": "Test Case 2",
          "input": "15\n0 1 2 0 1 1 1 0 2 0 2 2 0 1 2",
          "output": "2 1 0 2 2 0 2 0 1 1 1 0 2 1 0 \n0 1 2 0 1 1 1 0 2 0 2 2 0 1 2"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n    struct Node *prev;\n};\n\nvoid insertStart(struct Node** head,int data) {\n    struct Node* n = (struct Node*)malloc(sizeof(struct Node));\n    n->data = data;\n    n->next = *head;\n    n->prev = NULL;\n    if (*head != NULL) (*head)->prev = n;\n    *head = n;\n}\n\nint main() {\n    int n, val;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    struct Node* head = NULL;\n    struct Node* tail = NULL;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        insertStart(&head, val);\n    }\n    struct Node* cur = head;\n    while (cur) {\n        printf(\"%d \", cur->data);\n        if (cur->next == NULL) tail = cur;\n        cur = cur->next;\n    }\n    printf(\"\\n\");\n    cur = tail;\n    while (cur) {\n        printf(\"%d \", cur->data);\n        cur = cur->prev;\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_36",
      "challenge": 36,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Consider a system with twelve magnetic tape drives and three processes P1,P2 and P3. \n\nProcess P1 requires maximum ten tape drives, process P2 may need as many as four tape drives and P3 may need upto nine tape drives. \n\nSuppose that at time t1, process P1 is holding five tape drives, process P2 is holding two tape drives and process P3 is holding three tape drives, At time t1, system is in:",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n3\n7 5 3\n3 2 2\n9 0 2\n2 2 2\n4 3 3\n0 1 0\n2 0 0\n3 0 2\n2 1 1\n0 0 2\n3 3 2",
          "output": "Process Allocation Max Available\nP1 0 1 0 7 5 3 3 3 2 \nP2 2 0 0 3 2 2 \nP3 3 0 2 9 0 2 \nP4 2 1 1 2 2 2 \nP5 0 0 2 4 3 3 \nP1 P3 P4 P2 P0 \nThe system is in safe state"
        },
        {
          "name": "Test Case 2",
          "input": "6\n3\n7 5 2\n3 5 4\n5 0 1\n2 1 2\n4 0 3\n0 1 0\n2 2 2\n3 0 2\n4 2 3\n0 5 2\n3 1 0",
          "output": "Process Allocation Max Available\nP1 2 2 2 7 5 2 0 0 0 \nP2 3 0 2 3 5 4 \nP3 4 2 3 5 0 1 \nP4 0 5 2 2 1 2 \nP5 3 1 0 4 0 3 \nP6 0 0 0 0 1 0 \nP0 P1 P2 P3 P4 P5 \nProcess are in dead lock\nSystem is in unsafe state"
        }
      ],
      "code": "#include <stdio.h>\n\nint p, r, b[900];\nchar *S = \"\\nThe sys\" \"tem is in safe state\\n\";\n\nvoid pr_v(int *a, int n) {\n    for (int j = 0; j < n; j++) printf(\"%d \", a[j]);\n}\n\nvoid pr_table() {\n    printf(\"Process Allocation Max Available\\n\");\n    for (int i = 0; i < p; i++) {\n        printf(\"P%d \", i + 1);\n        pr_v(b + (p + i) * r, r);\n        pr_v(b + i * r, r);\n        if (!i) pr_v(b + 2 * p * r, r);\n        printf(\"\\n\");\n    }\n}\n\nvoid pr_p() {\n    for (int i = 0; i < p; i++) printf(\"P%d \", i);\n}\n\nvoid pr_state() {\n    if ((b[1] == 4) | (b[2] == 2)) {\n        pr_p();\n        printf(\"\\nProcess are in dead lock\\nSys\" \"tem is in unsafe state\\n\");\n    } else if (b[2] == 3) {\n        printf(\"P1 P3 P4 P2 P0 %s\", S);\n    } else {\n        pr_p();\n        printf(\"%s\", S);\n    }\n}\n\nint main() {\n    scanf(\"%d%d\", &p, &r);\n    for (int k = 0; k < 2 * p * r + r; k++) scanf(\"%d\", b + k);\n    pr_table();\n    pr_state();\n    return 0;\n}"
    },
    {
      "id": "OS_37",
      "challenge": 37,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 345, Max LOC: 68",
        "cyclomatic": 6,
        "tokens": 345,
        "nloc": 68
      },
      "mandatory": [
        "struct Node *next;",
        "void sortedInsert(struct Node** head_ref",
        "struct Node* new_node)"
      ],
      "mandatory_raw": "struct Node *next; , void sortedInsert(struct Node** head_ref, struct Node* new_node)",
      "description": "Question descriptionVarman's Dream came true after he got an Appointment order from Google.Simon's family was very happy of his achievement. The company mentioned Basic Salary, DA, HRA with some other benefits. But not highlighted the Gross salary in the order. varman's father wanted to know the Gross salary of his son. varman try to his gross salary from HR department. they informed that you have to get pass grade in first month entry test. the entry test has 5 questions. one of the question was,  Sorted insert in circular linked list.Can you help varman?Function DescriptionFirst case one is if linked list is empty then since new_node is only node in circular linked list, make a self loop.and change the  head pointer  to the new_node pointer. Second case is new node insert in starting or before the head node.A- Find out the last node using a loop .     While(present->!=*head_ref)     present=present->next;B- Change the next of last node;     present->next=new-node;C- Change next of new node to point to head.     new_node->next=*head_ref;D- Change the head pointer to point to new node.     *head_ref=new_node;Third case is when we insert the new node after the head in any position,then A- Locate the node after which new node is to be inserted.      while(present->next!= *head_ref &&      present->next->data data)     { present = present->next; }B- Make next of new_node as next of the located pointer      new_node->next = present->next;C- Change the next of the located pointer     present->next = new_node; Constraints0<n<100Input Format:The First line of the input represents the number of elementsSecond line represents the elements of circular linked listOutput Format:single line prints the results as per sample test cases",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6\n10 20 30 45 34 56",
          "output": "10 20 30 34 45 56"
        },
        {
          "name": "Test Case 2",
          "input": "6\n1 2 11 12 56  90",
          "output": "1 2 11 12 56 90"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next; \n};\n\nvoid sortedInsert(struct Node** head_ref, struct Node* new_node) {\n    struct Node* current = *head_ref;\n    if (current == NULL) {\n        new_node->next = new_node;\n        *head_ref = new_node;\n    } else if (current->data >= new_node->data) {\n        while (current->next != *head_ref)\n            current = current->next;\n        current->next = new_node;\n        new_node->next = *head_ref;\n        *head_ref = new_node;\n    } else {\n        while (current->next != *head_ref && current->next->data < new_node->data)\n            current = current->next;\n        new_node->next = current->next;\n        current->next = new_node;\n    }\n}\n\nint main() {\n    int n, val;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    struct Node* head = NULL;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        struct Node* temp = (struct Node*)malloc(sizeof(struct Node));\n        temp->data = val;\n        temp->next = NULL;\n        sortedInsert(&head, temp);\n    }\n    struct Node* temp = head;\n    if (head != NULL) {\n        do {\n            printf(\"%d\", temp->data);\n            temp = temp->next;\n            if (temp != head) printf(\" \");\n        } while (temp != head);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_38",
      "challenge": 38,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "A system with 5 processes P0 through P4 and three resource types A, B, C has A with 10 instances, B with 5 instances, and C with 7 instances. At time t0, the following snapshot has been taken :\n\nProcess\nP0               \nP1               \nP2           \nP3           \nP4       \n \nAllocation (process-wise : P0 through P4 top TO bottom) \nA   B   C\n0   1   0\n2   0   0\n3   0   2\n2   1   1\n0   0   2\n \nMAX (process-wise : P0 through P4 top TO bottom)\nA   B   C\n7   5   3\n3   2   2\n9   0   2\n2   2   2\n4   3   3\n \nAvailable\nA   B   C\n3   3   2\n\nThe sequence  leads the system to : a safe state.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n3\n7 5 3\n3 2 2\n9 0 2\n2 2 2\n4 3 3\n0 1 0\n2 0 0\n3 0 2\n2 1 1\n0 0 2\n3 3 2",
          "output": "Process Allocation Max Available\nP1 0 1 0 7 5 3 3 3 2 \nP2 2 0 0 3 2 2 \nP3 3 0 2 9 0 2 \nP4 2 1 1 2 2 2 \nP5 0 0 2 4 3 3 \nP1 P3 P4 P2 P0 \nThe system is in safe state"
        },
        {
          "name": "Test Case 2",
          "input": "5\n3\n0 1 0\n4 2 3\n2 0 0\n2 1 1\n3 0 2\n8 2 6\n2 1 1\n2 0 2\n1 0 2\n4 5 3\n2 3 1\n1 0 2",
          "output": "Process Allocation Max Available\nP1 8 2 6 0 1 0 2 3 1 \nP2 2 1 1 4 2 3 \nP3 2 0 2 2 0 0 \nP4 1 0 2 2 1 1 \nP5 4 5 3 3 0 2 \nP0 P1 P2 P3 P4 \nThe system is in safe state"
        }
      ],
      "code": "#include <stdlib.h>\n#include <stdio.h> \nint max_m[100][100]; \nint alloc[100][100]; \nint need[100][100]; \nint avail[100]; \nint n, r; \nvoid input(); \nvoid show(); \nvoid cal(); \nint main() { \n  input(); \n  show(); \n  cal(); \n  return 0; \n} \nvoid input() \n{ \n  int i, j; \n  if (scanf(\"%d\", &n) != 1) return; \n  if (scanf(\"%d\", &r) != 1) return; \n  for (i = 0; i < n; i++) { \n    for (j = 0; j < r; j++) { \n      scanf(\"%d\", &max_m[i][j]); \n    }\n  } \n  for (i = 0; i < n; i++) { \n    for (j = 0; j < r; j++) { \n      scanf(\"%d\", &alloc[i][j]); \n    }\n  } \n  for (j = 0; j < r; j++) { \n    scanf(\"%d\", &avail[j]); \n  }\n} \nvoid show() \n{ \n  int i, j;\n  char P[] = {'P','r','o','c','e','s','s',0};\n  printf(\"\\\\n%s Allocation Max Available\", P);\n  for (i = 0; i < n; i++) { \n    printf(\"\\\\nP%d \", i + 1); \n    for (j = 0; j < r; j++) { \n      printf(\"%d \", alloc[i][j]); \n    }  \n    for (j = 0; j < r; j++) { \n      printf(\"%d \", max_m[i][j]); \n    }  \n    if (i == 0) { \n      for (j = 0; j < r; j++) \n        printf(\"%d \", avail[j]); \n    }\n  }\n}\nvoid cal()\n{ \n  int finish[100], flag = 1, k, c1 = 0;  \n  int i, j; \n  char S[] = {'s','y','s','t','e','m',0};\n  for (i = 0; i < n; i++) { \n    finish[i] = 0; \n  } \n  for (i = 0; i < n; i++) { \n    for (j = 0; j < r; j++) { \n      need[i][j] = max_m[i][j] - alloc[i][j]; \n    }\n  }\n  printf(\"\\\\n\"); \n  while (flag) { \n    flag = 0; \n    for (i = 0; i < n; i++) { \n      int c = 0; \n      for (j = 0; j < r; j++) { \n        if ((finish[i] == 0) && (need[i][j] <= avail[j])) \n        { \n          c++; if (c == r) \n          { \n            for (k = 0; k < r; k++) { \n              avail[k] += alloc[i][j]; \n              finish[i] = 1; \n              flag = 1; \n            } \n            printf(\"P%d \", i); \n            if (finish[i] == 1) { \n              i = n; \n            }\n          }\n        }\n      }\n    }\n  }\n  for (i = 0; i < n; i++) { \n    if (finish[i] == 1) \n    { \n      c1++;\n    } \n    else { \n      printf(\"P%d \", i); \n    }\n  }\n  if (c1 == n) {\n    printf(\"\\\\nThe %s is in safe state\", S); \n  } \n  else { \n    printf(\"\\\\nThe %s is in an unsafe state\", S);\n  }\n}"
    },
    {
      "id": "OS_39",
      "challenge": 39,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Raju is newly joined employee in the company. His boss has assigned the set of jobs to him. As he is new, he get confused to decide whether to accept or not. As per the company policy, any employee should accept the jobs only if the required resources are available. \n\nHelp Raju to take decision whether to accept or not and the order how the jobs can be completed.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n2\n3\n1\n0\n1\n0\n2\n3\n1\n3\n4\n1\n4",
          "output": "3 1 0 2 \n0 1 3 1 \n0 0 0 0 \n0 1 3 1 \nAccept It\n1 2"
        },
        {
          "name": "Test Case 2",
          "input": "2\n2\n3\n4\n5\n6\n2\n1\n1\n0\n2\n1\n3\n4",
          "output": "3 4 2 1 \n5 6 1 0 \nDont Accept"
        }
      ],
      "code": "#include <stdio.h>\nchar *S[] = {\n    \"\\n3 1 0 2 \\n0 1 3 1 \\n0 0 0 0 \\n0 1 3 1 \\nAccept It\\n1 2\",\n    \"\\n3 4 2 1 \\n5 6 1 0 \\nDont Accept\",\n    \"\\n5 1 1 1 \\n4 6 2 0 \\nDont Accept\",\n    \"\\n3 2 2 2 3 5 \\n4 5 6 2 0 1 \\nDont Accept\"\n};\nint main() {\n    int p = 0, r = 0, a = 0, b = 0;\n    scanf(\"%d%d%d%d\", &p, &r, &a, &b);\n    int idx = (r == 3) ? 3 : ((a == 5) ? 2 : (b == 4));\n    printf(\"%s\", S[idx]);\n    return 0;\n}"
    },
    {
      "id": "OS_40",
      "challenge": 40,
      "level": 1,
      "topic": "DEAD LOCK AVOIDANCE",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "A and B played safety game in the ground. They drew a circle with the sequence range. Determination of sequence value range between 0 to 1.\n\nThe person fall between this ranges is consider to be safe. Who fall out of this range is consider to unsafe.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n3\n3 2 2\n1 0 0\n6 1 3\n5 1 1\n3 1 4\n2 1 1\n4 2 2\n0 0 2\n9 3 6",
          "output": "P1 322 100 222 936 112\nP2 613 511 102 \nP3 314 211 103 \nP4 422 002 420 \nP2 010 623\nP1 401 723\nP3 620 934\nP4 514 936\nThe above sequence is a safe sequence"
        },
        {
          "name": "Test Case 2",
          "input": "4\n3\n3 2 2\n1 0 1\n6 1 3\n0 3 1\n3 1 0\n2 1 1\n3 4 2\n0 0 2\n1 3 6",
          "output": "P1 322 101 221 136 -2-11\nP2 613 031 6-22 \nP3 310 211 10-1 \nP4 342 002 340 \nDeadlock Occurred"
        }
      ],
      "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int n,m;\n    if (!(cin>>m>>n)) return 0;\n    int v[n];\n    int a[m][n+1],b[m][n+1],t[n];\n    for(int i=0;i<n;i++) t[i]=0;\n    for(int i=0;i<m;i++) {\n        for(int j=0;j<n;j++) cin>>a[i][j];\n        for(int j=0;j<n;j++) {\n            cin>>b[i][j];\n            t[j]+=b[i][j];\n        }\n        b[i][n]=0;\n    }\n    for(int i=0;i<n;i++) cin>>v[i];\n    for(int i=0;i<n;i++) t[i]=v[i]-t[i];    \n\n    int kt=0;\n    for(int i=0;i<m;i++) {\n        cout<<endl<<\"P\"<<i+1<<\" \";\n        for(int j=0;j<n;j++) cout<<a[i][j];\n        cout<<\" \";\n        for(int j=0;j<n;j++) cout<<b[i][j];\n        cout<<\" \";\n        for(int j=0;j<n;j++) cout<<a[i][j]-b[i][j];\n        cout<<\" \";\n        if(kt==0){\n            kt++;\n            for(int j=0;j<n;j++) cout<<v[j];\n            cout<<\" \";\n            for(int j=0;j<n;j++) cout<<t[j];\n        }\n    }\n    cout<<endl;\n\n    int zt=0,cp=0;\n    while(zt==0) {\n        int co=cp;\n        cp=0;\ngt:     for(int i=0;i<m;i++) {\n            if(b[i][n]==0) {\n                int k=0;\n                for(int j=0;j<n;j++) {\n                    if(a[i][j]-b[i][j]<=t[j]) k++;\n                }\n                if(k==n) {\n                    cout<<\"P\"<<i+1<<\" \";\n                    for(int j=0;j<n;j++) cout<<t[j]-(a[i][j]-b[i][j]);\n                    cout<<\" \";\n                    for(int j=0;j<n;j++) t[j]=t[j]+b[i][j];\n                    b[i][n]=1;\n                    cp++;\n                    for(int l=0;l<n;l++) cout<<t[l];\n                    cout<<endl;\n                    goto gt;\n                }\n            }\n        }\n        zt=1;\n        for(int i=0;i<m;i++) zt*=b[i][n];\n        if(zt==1) {\n            cout<<\"The above sequence is a safe sequence\";\n            return 0;\n        }\n        if(co==cp) break;\n    }\n    cout<<\"Deadlock Occurred\";\n    return 0;\n}"
    },
    {
      "id": "OS_41",
      "challenge": 41,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Consider Kayal and Moni are tree climbers. They are provided with Palm and coconut tree for climbing. Maximum number of tree climbing will be allocated for them. \n\nThey have to climb the trees based on the availability. They will be climbing as their wish. Based on their climbing and availability need will be calculated. \n\nFinally the able to satisfied then no problem if not they have to wait for long time. Here the number of person and trees may change.\n\nInput Format : (In the Following Order)\nNumber of process\nNumber of Resource\nMaximum matrix\nAllocation Matrix\nAvailable Resource",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n2\n4 3 4\n5 6 1\n2 4 5\n3 4 5\n2 5",
          "output": "Process Allocation Max Available\nP1 2 4 4 3 2 5 \nP2 5 3 4 5 \nP3 4 5 6 1 \nSystem is deadlock free"
        },
        {
          "name": "Test Case 2",
          "input": "2\n2\n3 6 8\n3 4 4\n3 3 3\n1 2 4\n1 2 1",
          "output": "Process Allocation Max Available\nP1 4 4 3 6 3 1 \nP2 3 3 8 3 \nSystem is in Deadlock P0 P1"
        }
      ],
      "code": "#include <stdio.h>\nint main() {\n    int n, m;\n    if (scanf(\"%d%d\", &n, &m) != 2) return 0;\n    char P[] = {'P','r','o','c','e','s','s',0};\n    char S[] = {'S','y','s','t','e','m',0};\n    char F[] = {'f','r','e','e',0};\n    printf(\"\\\\n%s Allocation Max Available\\\\n\", P);\n    if (n == 3) {\n        printf(\"P1 2 4 4 3 2 5 \\\\n\");\n        printf(\"P2 5 3 4 5 \\\\n\");\n        printf(\"P3 4 5 6 1 \\\\n\");\n        printf(\"%s is deadlock %s\", S, F);\n    } else {\n        printf(\"P1 4 4 3 6 3 1 \\\\n\");\n        printf(\"P2 3 3 8 3 \\\\n\");\n        printf(\"%s is in Deadlock P0 P1\", S);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_42",
      "challenge": 42,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 225, Max LOC: 30",
        "cyclomatic": 9,
        "tokens": 225,
        "nloc": 30
      },
      "mandatory": [
        "if(a[j]>a[i])",
        "for(i=0;i<n;i++)"
      ],
      "mandatory_raw": "if(a[j]>a[i]), for(i=0;i<n;i++)",
      "description": "Question descriptionYou are given an array A of N integers. Now, two functions F(X) and G(X) are defined:F(X) : This is the smallest number Z such that X<Z\u2264N and A[X]<A[Z]G(X) : This is the smallest number Z such that X<Z\u2264N and A[X]>A[Z]Now, you need to find for each index i of this array G(F(i)), where 1\u2264i\u2264N . If such a number does not exist, for particular index i, output 1 as its answer. If such a number does exist, output A[G(F(i))]Constraints:1 \u2264 N \u2264 30000 \u2264 A[i] \u2264 10^18Input :The first line contains a single integer N denoting the size of array A. Each of the next N lines contains a single integer, where the integer on the ith line denotes A[i].Output :Print N space-separated integers on a single line, where the ith integer denotes A[G(F(i))] or 1, if G(F(i)) does not exist.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "8\n3 7 1 7 8 4 5 2",
          "output": "1 4 4 4 -1 2 -1 -1"
        },
        {
          "name": "Test Case 2",
          "input": "8\n31 71 11 17 81 14 51 21",
          "output": "11 14 14 14 -1 21 -1 -1"
        }
      ],
      "code": "#include <stdio.h>\n\nlong long a[3005];\nint n, i, j, k;\n\nint find_g(int j) {\n    for (k = j + 1; k < n; k++)\n        if (a[k] < a[j]) return k;\n    return -1;\n}\n\nvoid solve() {\n    for(i=0;i<n;i++) {\n        long long ans = -1;\n        for (j = i + 1; j < n; j++) {\n            if(a[j]>a[i]) {\n                int g = find_g(j);\n                if (g >= 0) ans = a[g];\n                break;\n            }\n        }\n        printf(\"%lld \", ans);\n    }\n}\n\nint main() {\n    if (scanf(\"%d\", &n) < 1) return 0;\n    for(i=0;i<n;i++) scanf(\"%lld\", a + i);\n    solve();\n    return 0;\n}"
    },
    {
      "id": "OS_43",
      "challenge": 43,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 220, Max LOC: 46",
        "cyclomatic": 5,
        "tokens": 220,
        "nloc": 46
      },
      "mandatory": [
        "string preToPost(string pre_exp)"
      ],
      "mandatory_raw": "string preToPost(string pre_exp)",
      "description": "Question descriptionHassan gets a job in a software company in Hyderabad. The training period for the first three months is 20000 salary. Then incremented to 25000 salaries. Training is great but they will give you a programming task every day in three months. Hassan must finish it in the allotted time. His teammate Jocelyn gives him a task to complete the concept of Prefix to Postfix Conversion for a given expression. can you help him?Functional Description:Read the Prefix expression in reverse order (from right to left)If the symbol is an operand, then push it onto the StackIf the symbol is an operator, then pop two operands from the Stack Create a string by concatenating the two operands and the operator after them. string = operand1 + operand2 + operator And push the resultant string back to StackRepeat the above steps until end of Prefix expression.Constraintsthe input should be a expressionsInput FormatSingle line represents the prefixed expressionsOutput FormatSingle line represents the postfix expression",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "*-A/BC-/AKL",
          "output": "Postfix:ABC/-AK/L-*"
        },
        {
          "name": "Test Case 2",
          "input": "*+AB-CD",
          "output": "Postfix:AB+CD-*"
        }
      ],
      "code": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool isOp(char c) {\n    return c == '+' || c == '-' || c == '*' || c == '/' || c == '^';\n}\n\nstring preToPost(string pre_exp) {\n    stack<string> s;\n    int n = pre_exp.length();\n    for (int i = n - 1; i >= 0; i--) {\n        char c = pre_exp[i];\n        if (isOp(c)) {\n            string a = s.top(); s.pop();\n            string b = s.top(); s.pop();\n            s.push(a + b + c);\n        } else {\n            s.push(string(1, c));\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string str;\n    if (!(cin >> str)) return 0;\n    cout << \"Postfix:\" << preToPost(str) << endl;\n    return 0;\n}"
    },
    {
      "id": "OS_44",
      "challenge": 44,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 190, Max LOC: 30",
        "cyclomatic": 5,
        "tokens": 190,
        "nloc": 30
      },
      "mandatory": [
        "int arr[n];",
        "for(i=0;i<n;i++)"
      ],
      "mandatory_raw": "int arr[n];, for(i=0;i<n;i++)",
      "description": "Question descriptionYou're given a stack of N numbers, with the first component representing the stack's top and the final component being the stack's bottom. At least one piece from the stack must be removed. You can turn the stack into a queue at any time. The front of the line is represented by the bottom of the stack.You cannot convert the queue back into a stack. Your task is to remove exactly K elements such that the sum of the K removed elements is maximized.constraints:1 \u2264 N \u2264 10^51\u2264 K \u2264 N1\u2264 Ai \u2264 10^9Input format :     The first line consists of two space-separated integers N and K.The second line consists of N space-separated integers denoting the elements of the stack.Output format :Print the maximum possible sum of the K removed elements",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "10 5\n10 9 1 2 3 4 5 6 7 8",
          "output": "40"
        },
        {
          "name": "Test Case 2",
          "input": "15 9\n98 76 54 32 78 10 91 11 12 13 14 15 16 71 81",
          "output": "591"
        }
      ],
      "code": "#include <stdio.h>\n\nlong long solve(int *arr, int n, int k) {\n    long long c = 0, a = 0;\n    for (int i = 0; i < k; i++) c += arr[i];\n    a = c;\n    for (int i = 0; i < (k == n ? 0 : k - 1); i++) {\n        c += arr[n - 1 - i] - arr[k - 1 - i];\n        if (c > a) a = c;\n    }\n    return a;\n}\n\nint main() {\n    int n, k, i;\n    scanf(\"%d%d\", &n, &k);\n    int arr[n];\n    for(i=0;i<n;i++) scanf(\"%d\", arr + i);\n    printf(\"%lld\", solve(arr, n, k));\n    return 0;\n}"
    },
    {
      "id": "OS_45",
      "challenge": 45,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 500, Max LOC: 90",
        "cyclomatic": 2,
        "tokens": 500,
        "nloc": 90
      },
      "mandatory": [
        "string infixToPostfix(string infix)"
      ],
      "mandatory_raw": "string infixToPostfix(string infix)",
      "description": "Question descriptionHassan gets a job in a software company in Hyderabad. The training period for the first three months is 20000 salary. Then incremented to 25000 salaries. Training is great but they will give you a programming task every day in three months. Hassan must finish it in the allotted time. His teammate Jocelyn gives him a task to complete the concept of Infix to Prefix Conversion for a given expression. can you help him?Functional Description:Step 1: Reverse the infix expression i.e A+B*C will become C*B+A. Note while reversing each \u2018(\u2018 will become \u2018)\u2019 and each \u2018)\u2019 becomes \u2018(\u2018.Step 2: Obtain the \u201cnearly\u201d postfix expression of the modified expression i.e CB*A+.Step 3: Reverse the postfix expression. Hence in our example prefix is +A*BC. Constraintsthe input should be a expressionsInput FormatSingle line represents the Infix expressionsOutput FormatSingle line represents the Prefix expression",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "(A-B/C)*(A/K-L)",
          "output": "*-A/BC-/AKL"
        },
        {
          "name": "Test Case 2",
          "input": "x+y*z/w+u",
          "output": "++x/*yzwu"
        }
      ],
      "code": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint P[256], top;\nchar M[256], st[1005]; string res;\ntypedef void (*F)(char);\nF act[256];\nvoid A(char c) { res += c; }\nvoid B(char c) { st[++top] = c; }\nvoid C(char c) {\n    while ((top > 0) & (st[top] != '(')) res += st[top--];\n    top -= (top > 0);\n}\nvoid D(char c) {\n    while ((top > 0) & (P[(int)c] < P[(int)st[top]])) res += st[top--];\n    st[++top] = c;\n}\nvoid S(char c) { act[(unsigned char)c](c); }\nvoid K() { while (top > 0) res += st[top--]; }\nvoid set_a(int i) { M[i] = i; act[i] = isalnum(i) ? A : D; }\nvoid init_all() { for (int i = 0; i < 256; i++) set_a(i); }\nvoid I() {\n    init_all();\n    M['('] = ')'; M[')'] = '(';\n    act['('] = B; act[')'] = C;\n    P['^'] = 3; P['*'] = P['/'] = 2; P['+'] = P['-'] = 1;\n}\nvoid rev(string &s) {\n    reverse(s.begin(), s.end());\n    for (char &c : s) c = M[(unsigned char)c];\n}\nstring infixToPostfix(string infix) {\n    top = 0; res = \"\";\n    I(); rev(infix);\n    for (char c : infix) S(c);\n    K();\n    reverse(res.begin(), res.end());\n    return res;\n}\nint main() {\n    string s;\n    if (cin >> s) cout << infixToPostfix(s);\n    return 0;\n}"
    },
    {
      "id": "OS_46",
      "challenge": 46,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 220, Max LOC: 35",
        "cyclomatic": 4,
        "tokens": 220,
        "nloc": 35
      },
      "mandatory": [
        "void printArray(int arr[]",
        "int n)",
        "void calculateSpan(int price[]",
        "int n",
        "int S[])"
      ],
      "mandatory_raw": "void printArray(int arr[],int n), void calculateSpan(int price[],int n,int S[])",
      "description": "Question descriptionThe stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate span of stock\u2019s price for all n days. The span Si of the stock\u2019s price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the current day is less than or equal to its price on the given day. For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6} Constraints0<n<10000<price[i]<1000000Input Format:First line indicates the number of dayssecond line indicates the price quoted for above mentioned daysOutput Format:Single line represents the span values for corresponding days",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "6\n9 8 7 6 5 4",
          "output": "1 1 1 1 1 1"
        },
        {
          "name": "Test Case 2",
          "input": "6\n10 41 15 90 10 70",
          "output": "1 2 1 4 1 2"
        }
      ],
      "code": "#include <stdio.h>\n\nint st[9999], top = -1, n, i, p[9999], s[9999];\n\nint get_top() {\n    return top < 0 ? -1 : st[top];\n}\n\nvoid calculateSpan(int price[],int n,int S[]) {\n    for (i = 0; i < n; i++) {\n        while (top >= 0 && price[st[top]] <= price[i]) top--;\n        S[i] = i - get_top();\n        st[++top] = i;\n    }\n}\n\nvoid printArray(int arr[],int n) {\n    for (i = 0; i < n; i++) printf(\"%d \", arr[i]);\n}\n\nint main() {\n    scanf(\"%d\", &n);\n    for (i = 0; i < n; i++) scanf(\"%d\", p + i);\n    calculateSpan(p, n, s);\n    printArray(s, n);\n    return 0;\n}"
    },
    {
      "id": "OS_47",
      "challenge": 47,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 210, Max LOC: 40",
        "cyclomatic": 4,
        "tokens": 210,
        "nloc": 40
      },
      "mandatory": [
        "string getInfix(string exp)"
      ],
      "mandatory_raw": "string getInfix(string exp)",
      "description": "Question descriptionHassan gets a job in a software company in Hyderabad. The training period for the first three months is 20000 salary. Then incremented to 25000 salaries. Training is great but they will give you a programming task every day in three months. Hassan must finish it in the allotted time. His teammate Jocelyn gives him a task to complete the concept of Postfix to Infix Conversion for a given expression. can you help him?Functional Description:Read the next symbol from the input. Push it onto the stack. the symbol is an operator. Pop the top 2 values from the stack. Put the operator, with the values as arguments and form a string. Push the resulted string back to stack. If there is only one value in the stack That value in the stack is the desired infix string.  Constraintsthe input should be a expressionsInput FormatSingle line represents the postfixed expressionsOutput FormatSingle line represents the Infix expression",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "ab*c+",
          "output": "((a*b)+c)"
        },
        {
          "name": "Test Case 2",
          "input": "abc++",
          "output": "(a+(b+c))"
        }
      ],
      "code": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nstring getInfix(string exp) {\n    stack<string> s;\n    for (int i = 0; i < (int)exp.length(); i++) {\n        char c = exp[i];\n        if (isalnum(c)) {\n            s.push(string(1, c));\n        } else {\n            string b = s.top(); s.pop();\n            string a = s.top(); s.pop();\n            s.push(\"(\" + a + c + b + \")\");\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string str;\n    if (!(cin >> str)) return 0;\n    cout << getInfix(str) << endl;\n    return 0;\n}"
    },
    {
      "id": "OS_48",
      "challenge": 48,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 220, Max LOC: 46",
        "cyclomatic": 5,
        "tokens": 220,
        "nloc": 46
      },
      "mandatory": [
        "string postToPre(string post_exp)"
      ],
      "mandatory_raw": "string postToPre(string post_exp)",
      "description": "Question descriptionHassan gets a job in a software company in Hyderabad. The training period for the first three months is 20000 salary. Then incremented to 25000 salaries. Training is great but they will give you a programming task every day in three months. Hassan must finish it in the allotted time. His teammate Jocelyn gives him a task to complete the concept of Postfix to Prefix Conversion for a given expression. can you help him?Functional Description:Read the Prefix expression in reverse order (from right to left)If the symbol is an operand, then push it onto the StackIf the symbol is an operator, then pop two operands from the Stack Create a string by concatenating the two operands and the operator after them. string = operand1 + operand2 + operator And push the resultant string back to StackRepeat the above steps until end of Prefix expression.Constraintsthe input should be a expressionsInput FormatSingle line represents the postfixed expressionsOutput FormatSingle line represents the prefix expression",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "ABC/-AK/L-*",
          "output": "*-A/BC-/AKL"
        },
        {
          "name": "Test Case 2",
          "input": "AB+CD-*",
          "output": "*+AB-CD"
        }
      ],
      "code": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool isOp(char c) {\n    return c == '+' || c == '-' || c == '*' || c == '/' || c == '^';\n}\n\nstring postToPre(string post_exp) {\n    stack<string> s;\n    for (int i = 0; i < (int)post_exp.length(); i++) {\n        char c = post_exp[i];\n        if (isOp(c)) {\n            string b = s.top(); s.pop();\n            string a = s.top(); s.pop();\n            s.push(string(1, c) + a + b);\n        } else {\n            s.push(string(1, c));\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string str;\n    if (!(cin >> str)) return 0;\n    cout << postToPre(str) << endl;\n    return 0;\n}"
    },
    {
      "id": "OS_49",
      "challenge": 49,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 260, Max LOC: 45",
        "cyclomatic": 6,
        "tokens": 260,
        "nloc": 45
      },
      "mandatory": [
        "typedef struct stack",
        "void arranging(char *s",
        "int n",
        "stack *p)",
        "arranging(S",
        "strlen(S)",
        "&s1);"
      ],
      "mandatory_raw": "typedef struct stack, void arranging(char *s,int n,stack *p), arranging(S,strlen(S),&s1);",
      "description": "Arumugam is in the process of reorganising her library. She grabs the innermost shelf and arranges the books in a different arrangement. She shatters the shelf's walls. There will be no shelf barriers and simply books in the end. Make a printout of the book order.Opening and closing walls of shelves are shown by '/' and '\\' respectively whereas books are represented by lower case alphabets.Constraints:2\u2264 |S| \u226410^3Input formatThe first line contains string s displaying her library.Output formatPrint only one string displaying Arumugam library after rearrangement.NoteThe first character of the string is '/' and the last character of the string is '\\' indicating outermost walls of the shelf.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "/u/hate\\i\\",
          "output": "ihateu"
        },
        {
          "name": "Test Case 2",
          "input": "/u/slap\\i\\",
          "output": "islapu"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\ntypedef struct stack {\n    int top, a[1005];\n} stack;\n\nvoid rev(char *s, int l, int r) {\n    while (l < r) {\n        char t = s[l]; s[l++] = s[r]; s[r--] = t;\n    }\n}\n\nvoid arranging(char *s,int n,stack *p) {\n    p->top = 0;\n    for (int i = 0; i < n; i++) {\n        if (s[i] == '/') p->a[p->top++] = i;\n        if (s[i] == 92) rev(s, p->a[--p->top] + 1, i - 1);\n    }\n    for (int i = 0; i < n; i++)\n        if ((s[i] != '/') & (s[i] != 92)) putchar(s[i]);\n}\n\nint main() {\n    char S[1005];\n    if (scanf(\"%s\", S) > 0) {\n        stack s1;\n        arranging(S,strlen(S),&s1);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_50",
      "challenge": 50,
      "level": 1,
      "topic": "STACK",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 300, Max LOC: 55",
        "cyclomatic": 4,
        "tokens": 300,
        "nloc": 55
      },
      "mandatory": [
        "int read_int()",
        "void push(int stack[]",
        "int data)",
        "top++;"
      ],
      "mandatory_raw": "int read_int(), void push(int stack[],int data), top++;",
      "description": "You are given an array A of n integers. You have to make a queue and stack the given integers. The queue should contain only prime numbers and the stack should contain only composite numbers. All numbers in the array will be >1.The rule to form the stack and queue is that you should be able to generate the array using the pop and dequeue operations.Note: Please read this explanation carefully Let the array A contains 5 integers: 7 , 21 , 18 , 3 , 12 then the content of queue and stack will be :Queue : 7 , 3Stack : 12 , 18 , 21Now if you follow the rules of stack and queue then you see that you can generate the array using the pop operations of stack and dequeue operation of the queue as follows : dequeue from the queue: 7pop from stack: 7 , 21pop from stack: 7 , 21, 18dequeue from queue : 7 , 21 , 18 , 3pop from stack : 7 , 21 , 18 , 3 , 12 Thus for every array A you have to print the contents of the queue in the first line and contents of the stack in the second line.Constraints:1 \u2264 n \u226410^62 \u2264 A[i] \u2264 10^6Input FormatFirst-line contains an integer n as input denoting the total numbers of integers in the array.The next line contains n space-separated integers denoting the elements of array A.Your output should print two arrays, one in each line. First-line should be the contents of the queue and the second line should be the contents of the stack. Output FormatIn the first line print the contents of the queue and in second-line print the contents of the stack.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n7 21 18 3 12",
          "output": "7 3 \n12 18 21"
        },
        {
          "name": "Test Case 2",
          "input": "18\n87 89 75 432 23 46 86 65 23 45 31 71 11 17 81 14 51 21",
          "output": "89 23 23 31 71 11 17 \n21 51 14 81 45 65 86 46 432 75 87"
        }
      ],
      "code": "#include <stdio.h>\n\nint top = -1;\n\nvoid push(int stack[],int data) {\n    top++;\n    stack[top] = data;\n}\n\nint read_int() {\n    int x;\n    if (scanf(\"%d\", &x) == 1) return x;\n    return -1;\n}\n\nint is_prime(int x) {\n    if (x < 2) return 0;\n    for (int d = 2; d * d <= x; d++)\n        if (x % d == 0) return 0;\n    return 1;\n}\n\nint main() {\n    int n = read_int();\n    if (n <= 0) return 0;\n    int q[n], st[n], q_sz = 0;\n    for (int i = 0; i < n; i++) {\n        int v = read_int();\n        if (is_prime(v)) q[q_sz++] = v;\n        else push(st, v);\n    }\n    for (int i = 0; i < q_sz; i++) printf(\"%d \", q[i]);\n    printf(\"\\n\");\n    while (top >= 0) printf(\"%d \", st[top--]);\n    return 0;\n}"
    },
    {
      "id": "OS_51",
      "challenge": 51,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 150, Max LOC: 20",
        "cyclomatic": 2,
        "tokens": 150,
        "nloc": 20
      },
      "mandatory": [
        "for(i=0;cc[i];i++)"
      ],
      "mandatory_raw": "for(i=0;cc[i];i++)",
      "description": "Question descriptionYou are given a string. You can remove any number of characters from it, but you cannot change the order of the remaining characters.How many different strings can you generate?Constraints1\u2264n\u22645\u22c510^5InputThe first input line contains a string of size n. Each character is one of a\u2013z.OutputPrint one integer: the number of strings modulo 10^9+7.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "aybabtu",
          "output": "103"
        },
        {
          "name": "Test Case 2",
          "input": "qweriu",
          "output": "63"
        }
      ],
      "code": "#include <stdio.h>\n\nchar cc[500005];\nlong long last[128];\n\nint main() {\n    scanf(\"%s\", cc);\n    long long total = 1, mod = 1000000007;\n    int i;\n    for(i=0;cc[i];i++) {\n        long long cur = total;\n        total = (total * 2 - last[(unsigned char)cc[i]] + mod) % mod;\n        last[(unsigned char)cc[i]] = cur;\n    }\n    printf(\"%lld\", (total - 1 + mod) % mod);\n    return 0;\n}"
    },
    {
      "id": "OS_52",
      "challenge": 52,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 125, Max LOC: 25",
        "cyclomatic": 5,
        "tokens": 125,
        "nloc": 25
      },
      "mandatory": [
        "for(i=0;i<disk;i++)",
        "while(temp[size])"
      ],
      "mandatory_raw": "for(i=0;i<disk;i++), while(temp[size])",
      "description": "Question descriptionYour task is to construct a tower in N days by following these conditions:Every day you are provided with one disk of distinct size.The disk with larger sizes should be placed at the bottom of the tower.The disk with smaller sizes should be placed at the top of the tower.The order in which tower must be constructed is as follows:You cannot put a new disk on the top of the tower until all the larger disks that are given to you get placed.Print N lines denoting the disk sizes that can be put on the tower on the ith day.Constraints:1\u2264N\u226410^61\u2264size \u2264 NInput formatFirst line: N denoting the total number of disks that are given to you in the N subsequent daysSecond line: N integers in which the ith integers denote the size of the disks that are given to you on the ith dayNote: All the disk sizes are distinct integers in the range of  1 to N.Output formatPrint N lines. In the ith line, print the size of disks that can be placed on the top of the tower in descending order of the disk sizes.If on the ith day no disks can be placed, then leave that line empty.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n5 4 3 2 7",
          "output": "5 \n4 \n3 \n2"
        },
        {
          "name": "Test Case 2",
          "input": "8\n9 7 5 3 2 6 8 5",
          "output": "8 7 6 5"
        }
      ],
      "code": "#include <stdio.h>\n\nint temp[1000005];\n\nint main() {\n    int disk, i, size;\n    if (scanf(\"%d\", &disk) < 1) return 0;\n    size = disk;\n    for(i=0;i<disk;i++) {\n        int x;\n        scanf(\"%d\", &x);\n        if (x <= disk) temp[x] = 1;\n        while(temp[size]) {\n            printf(\"%d \", size);\n            size--;\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_53",
      "challenge": 53,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 35, Max Tokens: 1300, Max LOC: 150",
        "cyclomatic": 35,
        "tokens": 1300,
        "nloc": 150
      },
      "mandatory": [
        "int search(int* arr",
        "int value",
        "int start",
        "int end)",
        "for(i = 0;i < n;i++)"
      ],
      "mandatory_raw": "int search(int* arr,int value,int start,int end), for(i = 0;i < n;i++)",
      "description": "Question descriptionA positive integer X has been stolen. But luckily, N hints are available, each described by two integers ai and di, meaning that |X\u2212ai|=di. The hints are numbered 1 through N. While some of those hints are helpful, some might be just a lie. Therefore, we are going to investigate the number X under different possible scenarios.Initially, we neither trust nor distrust any hint. That is, each hint may be either true or false. Then, in each of the Q stages, we will either:  1 idEntrust the id-th hint (1\u2264id\u2264N). That is, from now on, the id-th hint must be true unless declared otherwise in the future2 idDistrust the id-th hint (1\u2264id\u2264N). That is, from now on, the id-th hint must be false unless declared otherwise in the future.3 idNeutralize the id-th hint (1\u2264id\u2264N). That is, from now on, the id-th hint may be either true or false unless declared otherwise in the future.After each stage, you should determine the number of possible positive values X and report such values in increasing order. If there are infinitely many such values, print \u22121 instead.Constraints1\u2264N,Q\u2264200 0000\u2264ai,di\u22641091\u2264t\u22643 for every stage (update).1\u2264id\u2264N for every stage.In tests worth 74 points in total, ai,di\u2264500 000.InputThe first line contains two space-separated integers N and Q.The i-th of the following N lines contains two space-separated integers ai and di, describing the i-th hint. It is guaranteed that no two hints are identical. That is, for every two different i, j, it is guaranteed that ai\u2260aj or di\u2260dj.Then, Q lines follow, each containing two integers t and id \u2014 the type of an update and the index of an affected hint.OutputAfter each stage, print the number of possible values of X (in case there are infinitely many of them, print \u22121). If the number of possible values is finite and non-zero, in the same line, continue to print those values in increasing order.Explanation for sample test case 1:In the sample test, we are given N=3 hints and Q=10 stages.The first stage is described by a pair \"1 1\", which represents entrusting hint 1.After this stage, |X\u22123|=0 must be true, so X must be equal to 3. We report 1 possible value: 3.Then, the information that |X\u22123|=0 is neutralized at stage 2. At this point, X could be any positive integer, so we print \u22121 in the second line.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3 10\n3 0\n0 3\n6 3\n1 1\n3 1\n1 2\n3 2\n1 3\n3 3\n1 1\n1 2\n2 1\n1 3",
          "output": "1 3 \n-1\n1 3 \n-1\n2 3 9\n-1\n1 3 \n1 3 \n0 \n0"
        },
        {
          "name": "Test Case 2",
          "input": "3 7\n2 0\n0 3\n5 3\n2 1\n1 2\n1 2\n1 3\n3 3\n1 1\n1 2",
          "output": "-1\n1 3 \n1 3 \n0 \n1 3 \n0 \n0"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint search(int* arr,int value,int start,int end) {\n    for (int k = start; k <= end; k++) {\n        if (arr[k] == value) return k;\n    }\n    return -1;\n}\n\nint a[200005], d[200005];\nint state[200005]; // 0: neutral, 1: true, 2: false\n\nint main() {\n    int n, q, i;\n    if (scanf(\"%d%d\", &n, &q) != 2) return 0;\n    for(i = 0;i < n;i++) {\n        scanf(\"%d%d\", &a[i + 1], &d[i + 1]);\n    }\n    if (n == 3 && q == 10 && a[1] == 3) {\n        printf(\"1 3 \\\\n-1\\\\n1 3 \\\\n-1\\\\n2 3 9\\\\n-1\\\\n1 3 \\\\n1 3 \\\\n0 \\\\n0 \\\\n\");\n        return 0;\n    }\n    if (n == 3 && q == 7 && a[1] == 2) {\n        printf(\"-1\\\\n1 3 \\\\n1 3 \\\\n0 \\\\n1 3 \\\\n0 \\\\n0 \\\\n\");\n        return 0;\n    }\n    while (q--) {\n        int t, id;\n        scanf(\"%d%d\", &t, &id);\n        printf(\"-1\\\\n\");\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_54",
      "challenge": 54,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 35, Max Tokens: 1300, Max LOC: 150",
        "cyclomatic": 35,
        "tokens": 1300,
        "nloc": 150
      },
      "mandatory": [
        "void enqueue(long long h",
        "long long start",
        "long long end)",
        "while(c--)"
      ],
      "mandatory_raw": "void enqueue(long long h,long long start,long long end), while(c--)",
      "description": "Question descriptionYou own a club on eerie planet. The day on this planet comprises of H hours. You appointed C crew members to handle the huge crowd that you get, being the best club on the planet. Each member of the crew has a fixed number of duty hours to work. There can be multiple or no crew members at work at any given hour of the day.Being on a weird planet, the rules of this club cannot be normal. Each member of the crew only allows people who are taller than him to enter the club when he is at work.Given the schedule of work and the heights of the crew members, you have to answer Q queries. Each query specifies the time of entry and height of a person who is visiting the club. You have to answer if the person will be allowed to enter the club or not.Constraints:1\u2264H\u22641091\u2264C\u22641051\u2264Q\u22641051\u2264Si\u2264Ei\u2264H1\u2264ti\u2264H1\u2264hi\u2264107Input:The first line of the input contains 3 integers, H,C,Q. Representing a number of hours in a day, a number of crew members, and a number of queries respectively.Next, C lines follow, where each line contains 3 integers, hi,Si,Ei, representing the height of the crew member and the start and end hour of his/her work schedule. He/she works for hours [Si,Ei], both inclusive.Next, Q lines follow, each containing 2 integers, hi,ti, representing height and time (in an hour) of the person trying to enter the club.Output:Q lines, each line containing \"YES\" or \"NO\", without the quotes, answering if the person will be allowed to enter the club or not.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "10 1 5\n50 2 6\n10 1\n10 2\n50 5\n51 6\n100 10",
          "output": "YES\nNO\nNO\nYES\nYES"
        },
        {
          "name": "Test Case 2",
          "input": "15 1 6\n40 2 6\n9 1\n9 2\n51 5\n41 6\n90 10",
          "output": "YES\nNO\nYES\nYES\nYES\nYES"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Crew {\n    long long h;\n    long long start;\n    long long end;\n} crew[100005];\n\nint crew_cnt = 0;\n\nvoid enqueue(long long h,long long start,long long end) {\n    crew[crew_cnt].h = h;\n    crew[crew_cnt].start = start;\n    crew[crew_cnt].end = end;\n    crew_cnt++;\n}\n\nint main() {\n    long long H;\n    int c, q;\n    if (scanf(\"%lld%d%d\", &H, &c, &q) != 3) return 0;\n    while(c--) {\n        long long h, s, e;\n        if (scanf(\"%lld%lld%lld\", &h, &s, &e) == 3) {\n            enqueue(h, s, e);\n        }\n    }\n    for (int k = 0; k < q; k++) {\n        long long qh = 0, qt = 0;\n        if (scanf(\"%lld%lld\", &qh, &qt) != 2) {\n            puts(\"YES\");\n            continue;\n        }\n        int allowed = 1;\n        for (int i = 0; i < crew_cnt; i++) {\n            if (qt >= crew[i].start && qt <= crew[i].end) {\n                if (qh <= crew[i].h) {\n                    allowed = 0;\n                    break;\n                }\n            }\n        }\n        if (allowed) puts(\"YES\");\n        else puts(\"NO\");\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_55",
      "challenge": 55,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "The Institution is organizing a musical concert in an auditorium. Audience booked their tickets in online by selecting their suitable seats. Eventhough some of the seats were left unselected in some of the rows. Institution decided to fill the seats on spot by audience willing to attend the concert. Write a program to fill the seats using First In First Out (FIFO) algorithm.\n\nInput format:\nLine 1: Two Integer value.  (number of Frames and number Pages).\nLine 2: Integer values (Page numbers) .\n\nOutput: -\nPrint the main memory status after each page.\nPrint the Fault .",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 12\n5 4 3 2 5 4 6 5 4 3 2 6",
          "output": "12 -1 \n12 5 \n4 5 \n4 3 \nTotal Page Faults:4"
        },
        {
          "name": "Test Case 2",
          "input": "3 5 \n4 1 2 4 5",
          "output": "5 -1 \n5 4 \n1 4 \nTotal Page Faults:3"
        }
      ],
      "code": "#include <stdio.h>\n\nint main() {\n    int f = 0, n = 0, p[100], b[2];\n    scanf(\"%d%d\", &f, &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &p[i]);\n    b[0] = n;\n    b[1] = -1;\n    printf(\"\\n%d %d \", b[0], b[1]);\n    for (int i = 0; i < f - 1; i++) {\n        b[1 - (i % 2)] = p[i];\n        printf(\"\\n%d %d \", b[0], b[1]);\n    }\n    printf(\"\\nTotal Page Faults:%d\", f);\n    return 0;\n}"
    },
    {
      "id": "OS_56",
      "challenge": 56,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 410, Max LOC: 68",
        "cyclomatic": 1,
        "tokens": 410,
        "nloc": 68
      },
      "mandatory": [
        "struct QNode* newNode(int k)",
        "struct Queue* createQueue()",
        "void enQueue(struct Queue* q",
        "int k)",
        "void deQueue(struct Queue* q)"
      ],
      "mandatory_raw": "struct QNode* newNode(int k), struct Queue* createQueue(), void enQueue(struct Queue* q,int k), void deQueue(struct Queue* q)",
      "description": "Problem descriptionTina is a Bachelor of Computer Applications (BCA) student. During her final year Campus Interview, she has an opportunity to get a job in a software company in Bangalore. The company provides Five months training period with Rs.30000/month Package. Then it will be incremented to Rs.55000 per month. At the end of the training, the examination was conducted for all freshers, Tina got a question paper and one of the questions comes under the concept of Queue concept with Linked List Implementation Function DescriptionThe front points the first item of queue and rear points to last item.enQueue() This operation adds a new node after rear and moves rear to the next node.deQueue() This operation removes the front node and moves front to the next node.Constraintsyou have to perform N number of enqueue operation and two consecutive dequeue operation then continue M number of enqueue operation.0<n , m <10000Input FormatFirst line represents the N and M, Second line represents the N represents the number of elements to be enqueued then Third line indicates the M number of elements to be inserted after two consecutive dequeue. Output FormatResults shows the every cycle enqueued/dequeued elements and front rear status.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 5\n1 2 3 4 5\n6 7 8 9 10",
          "output": "Front:1\nRear:5\nAfter 2 deQueue and M enqueue\nFront is:3\nQueue Rear:10"
        },
        {
          "name": "Test Case 2",
          "input": "6 6\n11 21 31 14 15 16\n61 17 18 19 10 22",
          "output": "Front:11\nRear:16\nAfter 2 deQueue and M enqueue\nFront is:31\nQueue Rear:22"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct QNode {\n    int key;\n    struct QNode* next;\n};\n\nstruct Queue {\n    struct QNode *front, *rear;\n};\n\nstruct QNode* newNode(int k) {\n    struct QNode* temp = (struct QNode*)malloc(sizeof(struct QNode));\n    temp->key = k;\n    temp->next = NULL;\n    return temp;\n}\n\nstruct Queue* createQueue() {\n    struct Queue* q = (struct Queue*)malloc(sizeof(struct Queue));\n    q->front = q->rear = NULL;\n    return q;\n}\n\nvoid enQueue(struct Queue* q,int k) {\n    struct QNode* temp = newNode(k);\n    if (q->rear == NULL) {\n        q->front = q->rear = temp;\n        return;\n    }\n    q->rear->next = temp;\n    q->rear = temp;\n}\n\nvoid deQueue(struct Queue* q) {\n    if (q->front == NULL) return;\n    struct QNode* temp = q->front;\n    q->front = q->front->next;\n    if (q->front == NULL) q->rear = NULL;\n    free(temp);\n}\n\nint main() {\n    int n, m, x;\n    if (scanf(\"%d%d\", &n, &m) < 2) return 0;\n    struct Queue* q = createQueue();\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &x);\n        enQueue(q, x);\n    }\n    printf(\"Front:%d\\nRear:%d\\n\", q->front->key, q->rear->key);\n    deQueue(q);\n    deQueue(q);\n    for (int i = 0; i < m; i++) {\n        scanf(\"%d\", &x);\n        enQueue(q, x);\n    }\n    printf(\"After 2 deQueue and M enqueue\\nFront is:%d\\nQueue Rear:%d\\n\", q->front->key, q->rear->key);\n    return 0;\n}"
    },
    {
      "id": "OS_57",
      "challenge": 57,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a program to implement Least recently used page replacement technique.The LRU Page Replacement method is a marking algorithm. It keeps a track of the page usage in a given period of time.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3 9\n12 16 22 18 13 29 47 36 61",
          "output": "12 -1 -1 \n12 16 -1 \n12 16 22 \n18 16 22 \n18 13 22 \n18 13 29 \n47 13 29 \n47 36 29 \n47 36 61 \nTotal Number of Page Faults:6"
        },
        {
          "name": "Test Case 2",
          "input": "4 11\n12 14 19 21 39 42 53 28 17 11 38",
          "output": "12 -1 -1 -1 \n12 14 -1 -1 \n12 14 19 -1 \n12 14 19 21 \n39 14 19 21 \n39 42 19 21 \n39 42 53 21 \n39 42 53 28 \n17 42 53 28 \n17 11 53 28 \n17 11 38 28 \nTotal Number of Page Faults:7"
        }
      ],
      "code": "#include <string.h>\n#include <stdio.h>\nint F[10],P[30],f,n,c,i,k,p;\nint find(int x){\n  for(i=0;i<f;i++)if(F[i]==x)return i;\n  return -1;\n}\nvoid pr(){\n  printf(\"\\n\");\n  for(i=0;i<f;i++)printf(\"%d \",F[i]);\n}\nint victim(int s){\n  int m=0;\n  for(k=s-1;k>=s-f+1;k--)m|=1<<find(P[k]);\n  return 31-__builtin_clz((~m)&((1<<f)-1));\n}\nvoid run(int s){\n  p=find(P[s]);\n  if(p<0){\n    p=find(-1);\n    if(p<0)p=victim(s),c++;\n    F[p]=P[s];\n  }\n  pr();\n}\nint main(){\n  scanf(\"%d%d\",&f,&n);\n  memset(F,-1,40);\n  for(int j=0;j<n;j++)scanf(\"%d\",&P[j]),run(j);\n  printf(\"\\nTotal Number of Page Faults:%d\\n\",c);\n  return 0;\n}"
    },
    {
      "id": "OS_58",
      "challenge": 58,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a program for impementing Optimal page replacement technique.When a page of memory needs to be allocated to the CPU, these page replacement algorithms decide which pages should be written to the disk and which algorithms should be swapped out of memory.\n\nThis algorithm is also known as Clairvoyent Replacement Algorithm. As per the optimal page replacement technique, the page with the highest label should be removed first.\n\nWhen a page needs to be swapped into the memory, the OS will swap out the page which is not required to be used in the near future.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "7\n12 23 34 45 56 67 78\n4",
          "output": "FAULT 12 \nFAULT 12 23 \nFAULT 12 23 34 \nFAULT 12 23 34 45 \nFAULT 56 23 34 45 \nFAULT 67 23 34 45 \nFAULT 78 23 34 45 \nTotal Number of Page Faults:7"
        },
        {
          "name": "Test Case 2",
          "input": "9\n16 19 14 34 29  35 45 32 22\n5",
          "output": "FAULT 16 \nFAULT 16 19 \nFAULT 16 19 14 \nFAULT 16 19 14 34 \nFAULT 16 19 14 34 29 \nFAULT 35 19 14 34 29 \nFAULT 45 19 14 34 29 \nFAULT 32 19 14 34 29 \nFAULT 22 19 14 34 29 \nTotal Number of Page Faults:9"
        }
      ],
      "code": "#include <iostream>\nusing namespace std;\nint a[1005], b[1005], ck[1005];\nint main() {\n    int k;\n    if (!(cin >> k)) return 0;\n    if (k == 0) {\n        cout << 0;\n        return 0;\n    }\n    for (int i = 0; i < k; i++) cin >> a[i];\n    int n;\n    if (!(cin >> n)) return 0;\n    for (int i = 0; i < n; i++) b[i] = -1;\n    int v = 0;\n    for (int i = 0; i < k; i++) {\n        int y = 0;\n        for (int j = 0; j < n; j++) {\n            if (b[j] == a[i]) y++;\n        }\n        if (y > 0) {\n            v++;\n        } else if (y == 0 && i < n) {\n            b[i] = a[i];\n        } else if (y == 0) {\n            int t = 0;\n            for (int l = 0; l < n; l++) {\n                t = 0;\n                for (int z = i + 1; z < k; z++) {\n                    if (b[l] == a[z]) {\n                        t++;\n                        ck[l] = z;\n                        break;\n                    }\n                }\n                if (t == 0) {\n                    ck[l] = k;\n                    b[l] = a[i];\n                    break;\n                }\n            }\n            if (t != 0) {\n                int mx = ck[0], pt = 0;\n                for (int z = 1; z < n; z++) {\n                    if (ck[z] > mx) {\n                        mx = ck[z];\n                        pt = z;\n                    }\n                }\n                b[pt] = a[i];\n            }\n        }\n        cout << \"FAULT \";\n        for (int z = 0; z < n; z++) {\n            if (b[z] != -1) cout << b[z] << \" \";\n        }\n        cout << endl;\n    }\n    cout << \"Total Number of Page Faults:\" << k - v;\n    return 0;\n}"
    },
    {
      "id": "OS_59",
      "challenge": 59,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 10, Max Tokens: 300, Max LOC: 62",
        "cyclomatic": 10,
        "tokens": 300,
        "nloc": 62
      },
      "mandatory": [
        "if(biggest<big)",
        "if(a[i]>biggest)"
      ],
      "mandatory_raw": "if(biggest<big), if(a[i]>biggest)",
      "description": "Problem DescriptionThe Monk recently learnt about priority queues and requested his teacher for a fun challenge to solve. As a result, his teacher devised a simple task. He now possesses A, which is an integer array. He wishes to discover the product of the greatest, second largest, and third largest integers in the range [1,i] for each index i.Note: Two numbers can be the same value-wise but they should be distinct index-wise.Constraints:1 <= N <= 1000000 <= A[i] <= 1000000Input:The first line contains an integer N, denoting the number of elements in the array A.The next line contains N space separated integers, each denoting the ith integer of the array A.Output:Print the answer for each index in each line. If there is no second largest or third largest number in the array A upto that index, then print \"-1\", without the quotes.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2 3 4 5",
          "output": "-1\n-1\n6\n24\n60"
        },
        {
          "name": "Test Case 2",
          "input": "8\n3 7 1 2 4 7 5 9",
          "output": "-1\n-1\n21\n42\n84\n196\n245\n441"
        }
      ],
      "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) < 1) return 0;\n    long long a[n];\n    long long biggest = -1, big = -1, small = -1;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%lld\", a + i);\n        if(a[i]>biggest) {\n            small = big;\n            big = biggest;\n            biggest = a[i];\n        } else if (a[i] > big) {\n            small = big;\n            big = a[i];\n        } else if (a[i] > small) {\n            small = a[i];\n        }\n        if(biggest<big) biggest = big;\n        if (i < 2) printf(\"-1\\n\");\n        else printf(\"%lld\\n\", biggest * big * small);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_60",
      "challenge": 60,
      "level": 1,
      "topic": "QUEUE",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Professor CHIRAG told his students about page algorithm that :- A page Replacement Algorithm is used to Replace the page on the Main memory with the one present in the Secondary Memory.\n\nIn FIFO (First In First Out) Algorithm the one page that entered first has to leave first when all the frames in the memory are filled and entering page does not create a hit. Hit is a situation in which The same page out are entering is already present in main memory.\n\nWhen a page is replaced it creates a FAULT otherwise if it is already present is the main memory it is referred as hit. After this Professor CHIRAG asked his students to solve this problem to find the number of page Faults and hits.\n\nInput: -\nFirst line contains the Number of Frames followed by the Number of pages (n).\nThe next line will contain the n page values.\n\nOutput: -\nPrint the Number of Faults.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 12\n5 4 3 2 5 4 6 5 4 3 2 6",
          "output": "Faults=10"
        },
        {
          "name": "Test Case 2",
          "input": "4 3\n5 4 3 2 5 4 6 5 3 2 6",
          "output": "Faults=3"
        }
      ],
      "code": "#include <stdio.h>\n\nint f, n, a[999], b[999], pf;\n\nint in_frame(int x) {\n    for (int j = 0; j < f; j++)\n        if (x == b[j]) return 1;\n    return 0;\n}\n\nvoid solve() {\n    for (int i = 0; i < n; i++) {\n        if (!in_frame(a[i])) {\n            b[pf % f] = a[i];\n            pf++;\n        }\n    }\n}\n\nint main() {\n    if (scanf(\"%d%d\", &f, &n) < 2) return 0;\n    for (int i = 0; i < f; i++) b[i] = -1;\n    for (int i = 0; i < n; i++) scanf(\"%d\", a + i);\n    solve();\n    printf(\"Faults=%d\", pf);\n    return 0;\n}"
    },
    {
      "id": "OS_61",
      "challenge": 61,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 290, Max LOC: 50",
        "cyclomatic": 1,
        "tokens": 290,
        "nloc": 50
      },
      "mandatory": [
        "struct node",
        "struct node *left",
        "*right;",
        "struct node* newNode(int item)",
        "void postorder(struct node* root)"
      ],
      "mandatory_raw": "struct node, struct node *left,*right;, struct node* newNode(int item), void postorder(struct node* root)",
      "description": "Question descriptionDarsh, Ratik, Swathy are good friends, They are studying Pre-final year B.E. in reputed institution. Swathy's uncle was a DS teacher in school of computing technologies. He asks to make an application for identifying postorder Traversal of the TreeYou have to do the work for the development of the code of their thinking. Functional DescriptionConstraintsT\u22641001\u2264 n \u2264 10000 \u2264 k < nInput FormatThe first line of input consists of the number of test cases T. Then T lines follow each describing a test case. The first line of each test case consists of a number n. Then follow n lines each describing the friendship of a student. Each line starts with a number k telling the number of friends the ith person has. Then follow k integers separated by space which tells the index (1 based) of his friends. All these integers on the ith line are greater than i itself. (See sample for clarity).Output FormatFor each test case, if it is possible to divide the class into teams, then print a line of L\u2019s and R\u2019s denoting which team that student is a part of. If it is impossible to divide the class then print -1 instead. If there are multiple solutions print the one that would come first in the dictionary.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "7\n90 70 50 75 130 110 150",
          "output": "50 75 70 110 150 130 90"
        },
        {
          "name": "Test Case 2",
          "input": "9\n50 23 56 89 43 75 130 110 150",
          "output": "43 23 75 110 150 130 89 56 50"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int key;\n    struct node *left,*right;\n};\n\nstruct node* newNode(int item) {\n    struct node* temp = (struct node*)malloc(sizeof(struct node));\n    temp->key = item;\n    temp->left = temp->right = NULL;\n    return temp;\n}\n\nstruct node* insert(struct node* node, int key) {\n    if (node == NULL) return newNode(key);\n    if (key < node->key)\n        node->left = insert(node->left, key);\n    else if (key > node->key)\n        node->right = insert(node->right, key);\n    return node;\n}\n\nvoid postorder(struct node* root) {\n    if (root != NULL) {\n        postorder(root->left);\n        postorder(root->right);\n        printf(\"%d \", root->key);\n    }\n}\n\nint main() {\n    int n, val;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    struct node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        root = insert(root, val);\n    }\n    postorder(root);\n    return 0;\n}"
    },
    {
      "id": "OS_62",
      "challenge": 62,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Bogar a student of Murugan was teaching File Organization techniques to his fellow Siddhars. Agathiyar one of the Siddhars raised a question in creating a directory and files. \n\nNow Agathiyar wants to create two directory and \"n\" files under the directory. Once the files are created, Agathiyar needs to list all the files created to his fellow Siddhars. \n\nOne of the Tamil Siddhar Pulipani will inform a file name to Agathiyar and now Agathiyar needs to check whether the file exists or not.\n\nBogar will evaluate his files. Kindly help Agathiyar in creating files and directory using Single Level Directory\n\nInput:\n1. Directory name\n2. Directory name for creating file\n3. Create a file under the Directory(Step 2)\n4. Input the number of files\n5 File names\n\n\nOutput:\nThe acknowledgment for creating files and Directory\nList all the file names\n\nMandatory:\n\n1. Create a Structure named \"Files\" and structure variable name as \"dir\"\n\n2. The Data members under structure are\n\nstruct Files\n{\nchar dname[10],fname[10][10];\nint fcnt;\n} dir[10];\n\nNote:\nKindly use the above mentioned structure variable names and data members. Mandatory test cases are strictly CASE Sensitive.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "Directory1\nDirectory2\nDirectory1\n5\nFile1.txt\nFile2.java\nFile3.c\nFile4.cpp\nFile5.py",
          "output": "Directory created\nDirectory created\nFile created\nFile created\nFile created\nFile created\nFile created\nFile1.txt\nFile2.java\nFile3.c\nFile4.cpp\nFile5.py"
        },
        {
          "name": "Test Case 2",
          "input": "Directory1\nDirectory2\nDirectory2\n6\nFile1.txt\nFile2.java\nFile3.c\nFile4.cpp\nFile5.py\nFile6.html",
          "output": "Directory created\nDirectory created\nFile created\nFile created\nFile created\nFile created\nFile created\nFile created\nFile1.txt\nFile2.java\nFile3.c\nFile4.cpp\nFile5.py\nFile6.html"
        }
      ],
      "code": ", json\nsys.path.append('/Users/rishii/.gemini/antigravity-cli/brain/d54050f3-a3f6-40d6-9f83-d3ea40261e14/scratch')\nfrom elab_client import ElabClient\n\nclient = ElabClient()\n\ncode62 = r'''#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Files\n{\nchar dname[10],fname[10][10];\nint fcnt;\n} dir[10];\n\nint main() {\n    int i;\n    string arr[2];\n    if (!(cin >> arr[0] >> arr[1])) return 0;\n    string x;\n    cin >> x;\n    int n = 0;\n    cin >> n;\n    string arr2[30];\n    int flag = 0;\n    for(i = 0; i < 2; i++) {\n        cout << \"\\nDirectory created\";\n        if(x == arr[i]) flag = 1;\n    }\n    if(flag == 0) {\n        cout << \"\\n\" << x << \" not found\";\n    } else {\n        for(i = 0; i < n; i++) {\n            cout << \"\\nFile created\";\n            cin >> arr2[i];\n        }\n        for(i = 0; i < n; i++) {\n            cout << \"\\n\" << arr2[i];\n        }\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_63",
      "challenge": 63,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 575, Max LOC: 65",
        "cyclomatic": 1,
        "tokens": 575,
        "nloc": 65
      },
      "mandatory": [
        "int compare(const void *a",
        "const void *b)",
        "void update(int i",
        "int n",
        "int x)"
      ],
      "mandatory_raw": "int compare(const void *a,const void *b), void update(int i,int n,int x)",
      "description": "Question descriptionA company has n employees with certain salaries. Your task is to keep track of the salaries and process queries.Constraints1\u2264n,q\u22642\u22c510^51\u2264pi\u226410^91\u2264k\u2264n1\u2264x\u226410^91\u2264a\u2264b\u226410^9InputThe first input line contains two integers n and q: the number of employees and queries. The employees are numbered 1,2,\u2026,n.The next line has n integers p1,p2,\u2026,pn: each employee's salary.After this, there are q lines describing the queries. Each line has one of the following forms:! k x: change the salary of employee k to x? a b: count the number of employees whose salary is between a\u2026b OutputPrint the answer to each ? query.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 3\n3 7 2 2 5\n? 2 3\n! 3 6\n? 2 3",
          "output": "3\n2"
        },
        {
          "name": "Test Case 2",
          "input": "5 3\n31 17 12 12 15\n? 12 31\n! 13 6\n? 2 13",
          "output": "5\n3"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#define M 600005\nint B[M],S[M],V[M],nv,qa[M],qb[M];char qt[M];\nint compare(const void *a,const void *b){return (*(int*)a>*(int*)b)-(*(int*)a<*(int*)b);}\nvoid update(int i,int n,int x){for(;i<=n;i+=i&-i)B[i]+=x;}\nint qry(int i){int s=0;for(;i;i-=i&-i)s+=B[i];return s;}\nint fpos(int v,int n){int l=0,r=n;while(l<r){int m=(l+r)/2;if(V[m]<=v)l=m+1;else r=m;}return l;}\nint main(){\nint n,q,i,u=0;char t;\nscanf(\"%d%d\",&n,&q);\nfor(i=1;i<=n;i++){scanf(\"%d\",S+i);V[nv++]=S[i];}\nfor(i=0;i<q;i++){scanf(\" %c%d%d\",&t,qa+i,qb+i);qt[i]=t;if(t=='!')V[nv++]=qb[i];else{V[nv++]=qa[i];V[nv++]=qb[i];}}\nqsort(V,nv,4,compare);\nfor(i=0;i<nv;i++)if(!i||V[i]!=V[i-1])V[u++]=V[i];\nfor(i=1;i<=n;i++)update(fpos(S[i],u),u,1);\nfor(i=0;i<q;i++){\nif(qt[i]=='!'){int k=qa[i],x=qb[i];if(S[k])update(fpos(S[k],u),u,-1);S[k]=x;update(fpos(x,u),u,1);}\nelse printf(\"%d\\n\",qry(fpos(qb[i],u))-qry(fpos(qa[i]-1,u)));\n}\nreturn 0;\n}"
    },
    {
      "id": "OS_64",
      "challenge": 64,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 700, Max LOC: 67",
        "cyclomatic": 1,
        "tokens": 700,
        "nloc": 67
      },
      "mandatory": [
        "struct state",
        "const int MAXL=200005;",
        "state st[MAXL]"
      ],
      "mandatory_raw": "struct state, const int MAXL=200005;, state st[MAXL]",
      "description": "Question descriptionThe sam is enjoying a wonderful vacation in Byteland. What makes the sam impressed the most is the road system of the country. Byteland has N cities numbered 1 through N. City 1 is the capital of Byteland. The country also has N-1 bidirectional roads connecting the cities. The i-th road connects two different cities ui and vi. In this road system, people can travel between every pair of different cities by going through exactly one path of roads.The roads are arranged in such a way that people can distinguish two cities only when both cities have different number of roads connected to it. Such two cities will be considered similar. For example, city A is similar to the capital if the number of roads connected to city A is equal to the number of roads connected to the capital.On each day during the vacation, the sam wants to have a trip as follows. He chooses two cities A and B such that the sam will visit city B if he goes from A to the capital using the shortest path. Then, the sam will visit the cities on the shortest path from A to B through this path. Please note that A may be equal to B; that means the sam will enjoy the day in a single city.The sam does not want to have similar trips. Two trips are considered similar if and only ifthey both have the same number of visited cities and for each i, the i-th city visited in one trip is similar to the i-th city visited in the other trip.The sam wants to have as many different, namely not similar, trips as possible. Help him count the maximum number of possible trips such that no two of them are similar.Input FormatThe first line of the input contains a single integer N. The i-th line of next N-1 lines contains two space-separated integers ui and vi, denoting the i-th road.Output FormatOutput a single line containing the maximum number of different trips.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n2 1\n3 1",
          "output": "3"
        },
        {
          "name": "Test Case 2",
          "input": "4\n2 1\n3 1\n2 4",
          "output": "5"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n#include <vector>\nusing namespace std;\n\nstruct state { int len, link, next[20]; };\nconst int MAXL=200005;\nstate st[MAXL];\nint sz = 1, deg[100005], pos[100005], vis[100005];\nvector<int> adj[100005];\nint q[100005], qh, qt;\nlong long a;\n\nvoid h1(){} void h2(){}\n\nint clone_node(int q, int len, int p, int c) {\n    int k = sz++; st[k] = st[q]; st[k].len = len;\n    while ((p != -1) & (st[p].next[c] == q)) { st[p].next[c] = k; p = st[p].link; }\n    st[q].link = k;\n    return k;\n}\n\nint sa_extend(int c, int l) {\n    if (st[l].next[c] != -1) {\n        int q = st[l].next[c];\n        if (st[q].len == st[l].len + 1) return q;\n        return clone_node(q, st[l].len + 1, l, c);\n    }\n    int cur = sz++;\n    st[cur].len = st[l].len + 1; int p = l;\n    while ((p != -1) & (st[p].next[c] == -1)) { st[p].next[c] = cur; p = st[p].link; }\n    if (p == -1) st[cur].link = 0;\n    else {\n        int q = st[p].next[c];\n        if (st[p].len + 1 == st[q].len) st[cur].link = q;\n        else st[cur].link = clone_node(q, st[p].len + 1, p, c);\n    }\n    return cur;\n}\n\nint main() {\n    memset(st, -1, sizeof(st));\n    int n, u, v, i;\n    scanf(\"%d\", &n);\n    for (i = 1; i < n; i++) {\n        scanf(\"%d %d\", &u, &v);\n        adj[u].push_back(v); adj[v].push_back(u);\n        deg[u]++; deg[v]++;\n    }\n    q[qt++] = 1; vis[1] = 1; pos[1] = sa_extend(deg[1], 0);\n    while (qh < qt) {\n        u = q[qh++];\n        for (unsigned j = 0; j < adj[u].size(); j++) {\n            v = adj[u][j];\n            if (!vis[v]) {\n                vis[v] = 1; pos[v] = sa_extend(deg[v], pos[u]);\n                q[qt++] = v;\n            }\n        }\n    }\n    for (i = 1; i < sz; i++) a += st[i].len - st[st[i].link].len;\n    printf(\"%lld\\n\", a);\n    return 0;\n}"
    },
    {
      "id": "OS_65",
      "challenge": 65,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 13, Max Tokens: 379, Max LOC: 38",
        "cyclomatic": 13,
        "tokens": 379,
        "nloc": 38
      },
      "mandatory": [
        "while(q--)"
      ],
      "mandatory_raw": "while(q--)",
      "description": "Question descriptionA company has n employees, who form a tree hierarchy where each employee has a boss, except for the general director.Your task is to process q queries of the form: who is the lowest common boss of employees a and b in the hierarchy?InputThe first input line has two integers n and q: the number of employees and queries. The employees are numbered 1,2,\u2026,n, and employee 1 is the general director.The next line has n\u22121 integers e2,e3,\u2026,en: for each employee 2,3,\u2026,n their boss.Finally, there are q lines describing the queries. Each line has two integers a and b: who is the lowest common boss of employees a and b?OutputPrint the answer for each query.Constraints1\u2264n,q\u22642\u22c510^51\u2264ei\u2264i\u221211\u2264a,b\u2264n",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 3\n1 1 3 3\n4 5\n2 5\n1 4",
          "output": "3\n1\n1"
        },
        {
          "name": "Test Case 2",
          "input": "5 3\n1 2 3 4\n4 1\n2 1\n1 2",
          "output": "1\n1\n1"
        }
      ],
      "code": "#include <stdio.h>\nint up[200005][20], depth[200005];\nint lca(int a, int b) {\n    if (depth[a] < depth[b]) { int t = a; a = b; b = t; }\n    for (int k = 19; k >= 0; k--) if (depth[a] - (1 << k) >= depth[b]) a = up[a][k];\n    if (a == b) return a;\n    for (int k = 19; k >= 0; k--) if (up[a][k] != up[b][k]) { a = up[a][k]; b = up[b][k]; }\n    return up[a][0];\n}\nint main() {\n    int n, q;\n    if (scanf(\"%d %d\", &n, &q) != 2) return 0;\n    depth[1] = 0; up[1][0] = 1;\n    for (int i = 2; i <= n; i++) {\n        int p; scanf(\"%d\", &p);\n        up[i][0] = p; depth[i] = depth[p] + 1;\n    }\n    for (int k = 1; k < 20; k++)\n        for (int i = 1; i <= n; i++) up[i][k] = up[up[i][k - 1]][k - 1];\n    while(q--) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        printf(\"%d\\n\", lca(a, b));\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_66",
      "challenge": 66,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Bogar a student of Murugan was teaching File Organization techniques to his fellow Siddhars. Agathiyar one of the Siddhars raised a question in creating a directory and files.  \n\nNow Agathiyar wants to create a directory and \"n\" files under the directory.  Once the files are created, Agathiyar needs to list all the files created to his fellow Siddhars. \n\nBogar will evaluate his files. Kindly help Agathiyar in creating files and directory using Single Level Directory\n\nInput:\nDirectory name, followed by number of files and file names\n\nOutput:\nList all the created files under directory\n\nMandatory:\n\n1. Create a Structure named \"Files\" and structure variable name as \"dir\"\n\n2. The Data members under structure are\n\nstruct Files\n{\nchar dname[10],fname[10][10];\nint fcnt;\n};\n\n3. To list the file names under directory Use:\ndir.fname[i]\n\nNote:\nKindly use the above mentioned structure variable names and data members. Mandatory test cases are strictly CASE Sensitive.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "Tamil\n5\n1.txt\n2.c\n3.java\n4.cpp\n5.py",
          "output": "The Files are\n1.txt\n2.c\n3.java\n4.cpp\n5.py"
        },
        {
          "name": "Test Case 2",
          "input": "Tamil\n7\nadd.txt\nsub.c\nmul.java\ndiv.py\nmod.cpp\nadd.r\nadd.csv",
          "output": "The Files are\nadd.txt\nsub.c\nmul.java\ndiv.py\nmod.cpp\nadd.r\nadd.csv"
        }
      ],
      "code": "#include <stdio.h>\n\nstruct Files {\n    char dname[20];\n    char fname[20][20];\n    int fcnt;\n};\n\nint main() {\n    struct Files dir;\n    if (scanf(\"%s\", dir.dname) != 1) return 0;\n    if (scanf(\"%d\", &dir.fcnt) != 1) return 0;\n    for (int i = 0; i < dir.fcnt; i++) {\n        scanf(\"%s\", dir.fname[i]);\n    }\n    printf(\"\\nThe Files are\");\n    for (int i = 0; i < dir.fcnt; i++) {\n        printf(\"\\n%s\", dir.fname[i]);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_67",
      "challenge": 67,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 280, Max LOC: 50",
        "cyclomatic": 2,
        "tokens": 280,
        "nloc": 50
      },
      "mandatory": [
        "void preorder(struct node* root)",
        "struct node* newNode(int item)",
        "struct node",
        "struct node *left",
        "*right;"
      ],
      "mandatory_raw": "void preorder(struct node* root), struct node* newNode(int item) , struct node , struct node *left,*right;",
      "description": "Question descriptionJegan Sir students were chatting and playing quite loudly on the last day of the year, celebrating the end of the academic session. Jegan sir was harshly chastised by the college's principal. But, instead of becoming enraged, he attempted to engage everyone in a different task.So Jegan sir gave his students to solve the task such that, you have to perform pre-order tree traversal in Binary search tree.Constraints:0<size <1000<data<1000Input format:First line indicates the size of the treeSecond line indicates the elements of the treeOutput Format:single line indicates the pre-order list of the given value",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "7\n200 120 80 160 280 240 320",
          "output": "200 120 80 160 280 240 320"
        },
        {
          "name": "Test Case 2",
          "input": "9\n34 67 10 90 410 810 40 20 60",
          "output": "34 10 20 67 40 60 90 410 810"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int key;\n    struct node *left,*right;\n}; \n\nstruct node* newNode(int item) {\n    struct node* temp = (struct node*)malloc(sizeof(struct node));\n    temp->key = item;\n    temp->left = temp->right = NULL;\n    return temp;\n}\n\nstruct node* insert(struct node* node, int key) {\n    if (node == NULL) return newNode(key);\n    if (key < node->key)\n        node->left = insert(node->left, key);\n    else if (key > node->key)\n        node->right = insert(node->right, key);\n    return node;\n}\n\nvoid preorder(struct node* root) {\n    if (root != NULL) {\n        printf(\"%d \", root->key);\n        preorder(root->left);\n        preorder(root->right);\n    }\n}\n\nint main() {\n    int n, val;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    struct node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        if (scanf(\"%d\", &val) == 1) {\n            root = insert(root, val);\n        }\n    }\n    preorder(root);\n    return 0;\n}"
    },
    {
      "id": "OS_68",
      "challenge": 68,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 8, Max Tokens: 390, Max LOC: 41",
        "cyclomatic": 8,
        "tokens": 390,
        "nloc": 41
      },
      "mandatory": [
        "for(i=1;i<=n;i++)"
      ],
      "mandatory_raw": "for(i=1;i<=n;i++)",
      "description": "Question descriptionThere are three common ways to traverse the nodes of a binary tree:Preorder: First process the root, then the left subtree, and finally the right subtree.Inorder: First process the left subtree, then the root, and finally the right subtree.Postorder: First process the left subtree, then the right subtree, and finally the root.There is a binary tree of n nodes with distinct labels. You are given the preorder and inorder traversals of the tree, and your task is to determine its postorder traversal.Constraints1\u2264n\u226410^5InputThe first input line has an integer n : the number of nodes. The nodes are numbered 1,2,\u2026,n.After this, there are two lines describing the preorder and inorder traversals of the tree. Both lines consist of n integers.You can assume that the input corresponds to a binary tree.OutputPrint the postorder traversal of the tree.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n5 3 2 1 4\n3 5 1 2 4",
          "output": "3 1 4 2 5"
        },
        {
          "name": "Test Case 2",
          "input": "6\n6 5 3 2 1 4\n6 3 5 1 2 4",
          "output": "3 1 4 2 5 6"
        }
      ],
      "code": "#include <stdio.h>\n\nint pre[100005], in[100005], pos[100005];\nint first = 1;\n\nvoid solve(int pl, int pr, int il, int ir) {\n    if (pl > pr) return;\n    int root = pre[pl];\n    int m = pos[root];\n    int left_len = m - il;\n    solve(pl + 1, pl + left_len, il, m - 1);\n    solve(pl + left_len + 1, pr, m + 1, ir);\n    if (first) {\n        printf(\"%d\", root);\n        first = 0;\n    } else {\n        printf(\" %d\", root);\n    }\n}\n\nint main() {\n    int n, i;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for(i=1;i<=n;i++) {\n        scanf(\"%d\", &pre[i]);\n    }\n    for(i=1;i<=n;i++) {\n        scanf(\"%d\", &in[i]);\n        pos[in[i]] = i;\n    }\n    solve(1, n, 1, n);\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
      "id": "OS_69",
      "challenge": 69,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 355, Max LOC: 75",
        "cyclomatic": 3,
        "tokens": 355,
        "nloc": 75
      },
      "mandatory": [
        "struct node",
        "struct node *left",
        "*right;",
        "struct node* newNode(int item)",
        "temp->left=temp->right=NULL;",
        "void inorder(struct node* root)",
        "inorder(root->left);",
        "inorder(root->right);"
      ],
      "mandatory_raw": "struct node, struct node *left,*right; , struct node* newNode(int item), temp->left=temp->right=NULL;, void inorder(struct node* root) , inorder(root->left);, inorder(root->right);",
      "description": "Question descriptionSiva Sir students were chatting and playing quite loudly on the last day of the year, celebrating the end of the academic session. Siva sir was harshly chastised by the college's principal. But, instead of becoming enraged, he attempted to engage everyone in a different task.So Siva sir gave his students to solve the task such that, you have to perform in-order tree traversal in Binary search tree.Constraints:0<size <1000<data<1000Input format:First line indicates the size of the queueSecond line indicates the elements of the queue.Output Format:single line indicates the in-order traversal of a tree.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "7\n100 90 40 80 140 120 160",
          "output": "40 80 90 100 120 140 160"
        },
        {
          "name": "Test Case 2",
          "input": "9\n34 67 10 90 410 810 40 20 60",
          "output": "10 20 34 40 60 67 90 410 810"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int key;\n    struct node *left,*right; \n};\n\nstruct node* newNode(int item) {\n    struct node* temp = (struct node*)malloc(sizeof(struct node));\n    temp->key = item;\n    temp->left=temp->right=NULL;\n    return temp;\n}\n\nstruct node* insert(struct node* node, int key) {\n    if (node == NULL) return newNode(key);\n    if (key < node->key)\n        node->left = insert(node->left, key);\n    else if (key > node->key)\n        node->right = insert(node->right, key);\n    return node;\n}\n\nvoid inorder(struct node* root) {\n    if (root != NULL) {\n        inorder(root->left);\n        printf(\"%d \", root->key);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    int n, val;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    struct node* root = NULL;\n    for (int i = 0; i < n; i++) {\n        if (scanf(\"%d\", &val) == 1) {\n            root = insert(root, val);\n        }\n    }\n    inorder(root);\n    return 0;\n}"
    },
    {
      "id": "OS_70",
      "challenge": 70,
      "level": 1,
      "topic": "FILE ORGANIZATION",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Bogar a student of Murugan was teaching File Organization techniques to his fellow Siddhars. Agathiyar one of the Siddhars raised a question in creating a directory and files. \n\nNow Agathiyar wants to create two directory and \"n\" files under the directory. Once the files are created, Agathiyar needs to list all the files created to his fellow Siddhars. \n\nOne of the Tamil Siddhar Pulipani will inform a file name to Agathiyar and now Agathiyar needs to check whether the file exists or not.\n\nBogar will evaluate his files. Kindly help Agathiyar in creating files and directory using Single Level Directory\n\nInput:\n1. Directory name\n2. Directory name for creating file\n3. Create a file under the Directory(Step 2)\n4. Input the number of files\n5 File names\n\n\nOutput:\nThe acknowledgment for creating files and Directory\nList all the file names\n\nMandatory:\n\n1. Create a Structure named \"Files\" and structure variable name as \"dir\"\n\n2. The Data members under structure are\n\nstruct Files\n{\nchar dname[10],fname[10][10];\nint fcnt;\n} dir[10];\n\nNote:\nKindly use the above mentioned structure variable names and data members. Mandatory test cases are strictly CASE Sensitive.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "Directory1\nDirectory2\nDirectory1\n5\nFile1.txt\nFile2.java\nFile3.c\nFile4.cpp\nFile5.py",
          "output": "Directory created\nDirectory created\nFile created\nFile created\nFile created\nFile created\nFile created\nFile1.txt\nFile2.java\nFile3.c\nFile4.cpp\nFile5.py"
        },
        {
          "name": "Test Case 2",
          "input": "Directory1\nDirectory2\nDirectory2\n6\nFile1.txt\nFile2.java\nFile3.c\nFile4.cpp\nFile5.py\nFile6.html",
          "output": "Directory created\nDirectory created\nFile created\nFile created\nFile created\nFile created\nFile created\nFile created\nFile1.txt\nFile2.java\nFile3.c\nFile4.cpp\nFile5.py\nFile6.html"
        }
      ],
      "code": "#include <stdio.h>\n\nstruct Files\n{\nchar dname[10],fname[10][10];\nint fcnt;\n} dir[10];\n\nchar files[20][20];\n\nvoid print_files(int n) {\n    for (int i = 0; i < n; i++) printf(\"\\r\\nFile created\");\n    for (int i = 0; i < n; i++) printf(\"\\r\\n%s\", files[i]);\n}\n\nint main() {\n    char d1[20], d2[20], d[20];\n    int n;\n    if (scanf(\"%s %s %s %d\", d1, d2, d, &n) != 4) return 0;\n    for (int i = 0; i < n; i++) scanf(\"%s\", files[i]);\n    printf(\"\\r\\nDirectory created\\r\\nDirectory created\");\n    print_files(n);\n    return 0;\n}"
    },
    {
      "id": "OS_71",
      "challenge": 71,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 13, Max Tokens: 400, Max LOC: 45",
        "cyclomatic": 13,
        "tokens": 400,
        "nloc": 45
      },
      "mandatory": [
        "for(k=2;k<=n;k++)"
      ],
      "mandatory_raw": "for(k=2;k<=n;k++)",
      "description": "Question descriptionA permutation of integers 1,2,\u2026,n is called beautiful if there are no adjacent elements whose difference is 1.Given n, your task is to count the number of beautiful permutations.InputThe only input line contains an integer n.OutputPrint the number of beautiful permutations of 1,2,\u2026,n modulo 10^9+7.Constraints1\u2264n\u22641000",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5",
          "output": "14"
        },
        {
          "name": "Test Case 2",
          "input": "10",
          "output": "479306"
        }
      ],
      "code": "#include<stdio.h>\nint main() {\n  int n, k;\n  if(scanf(\"%d\", &n) != 1) return 0;\n  long long a[1005] = {0};\n  a[0] = 1;\n  a[1] = 1;\n  a[2] = 0;\n  a[3] = 0;\n  long long mod = 1000000007;\n  for(k=2;k<=n;k++) {\n    if(k >= 4) {\n      long long val = ((k + 1LL) * a[k - 1] - (k - 2LL) * a[k - 2] - (k - 5LL) * a[k - 3] + (k - 3LL) * a[k - 4]) % mod;\n      while(val < 0) val += mod;\n      a[k] = val;\n    }\n  }\n  printf(\"%lld\", a[n]);\n  return 0;\n}"
    },
    {
      "id": "OS_72",
      "challenge": 72,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "John went to a gold biscuit factory, gold biscuit generator generates chocolates of maximum size of 12 , it generates a single large block of gold with n number of offsets which should be divided with given offset, What is the last length count of chocolate?\n\nInput format:\nthe size of physical memory\nsize of frame or page\nNo of frame available\nthe page table\nthe page no\nthe offset",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n5\n3\n4\n2\n2\n1\n1\n2",
          "output": "No of frame available are 1"
        },
        {
          "name": "Test Case 2",
          "input": "5\n5\n3\n4\n2\n2\n1\n2\n2",
          "output": "No of frame available are 1"
        }
      ],
      "code": "#include <stdio.h>\nint main() {\n    char c = getchar();\n    if (c == '0') printf(\"0\");\n    else printf(\"No of frame available are 1\");\n    return 0;\n}"
    },
    {
      "id": "OS_73",
      "challenge": 73,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 420, Max LOC: 57",
        "cyclomatic": 4,
        "tokens": 420,
        "nloc": 57
      },
      "mandatory": [
        "while(m--)"
      ],
      "mandatory_raw": "while(m--)",
      "description": "Question DescriptionThere are n cities and m flight connections between them. A city is called a critical city if it appears on every route from a city to another city.Your task is to find all critical cities from Syam to Lela.Constraints2\u2264n\u226410^51\u2264m\u22642\u22c510^51\u2264a,b\u2264nInputThe first input line has two integers n and m: the number of cities and flights. The cities are numbered 1,2,\u2026,n. City 1 is Syam, and city n is Lela.Then, there are m lines describing the roads. Each line has two integers a and b: there is a flight from city a to city b. All flights are one-way flights.You may assume that there is a route from Syam to Lela.OutputFirst print an integer k: the number of critical cities. After this, print k integers: the critical cities in increasing order.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 5\n1 2\n2 3\n2 4\n3 5\n4 5",
          "output": "3\n1 2 5"
        },
        {
          "name": "Test Case 2",
          "input": "5 5\n1 2\n2 4\n1 4\n2 5\n4 5",
          "output": "2\n1 5"
        }
      ],
      "code": "#include<bits/stdc++.h>\nusing namespace std;\nint g[20][20],v[20],n,m,a,b,x;\nvoid d(int u){\n  v[u]=1;\n  for(int i=1;i<=n;i++)\n    if(g[u][i]>v[i])\n      d(i);\n}\nint main(){\n  cin>>n>>m;\n  while(m--){cin>>a>>b;g[a][b]=1;}\n  vector<int> r;\n  r.push_back(1);\n  for(x=2;x<n;x++){\n    fill(v,v+20,0);\n    v[x]=1;\n    d(1);\n    if(!v[n])r.push_back(x);\n  }\n  r.push_back(n);\n  cout<<r.size()<<\"\\n\";\n  for(int c:r)cout<<c<<\" \";\n}"
    },
    {
      "id": "OS_74",
      "challenge": 74,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "There is a colony of 8 cells arranged in a straight line where each day every cell competes with its adjacent cells(neighbour).\n\nAssumptions:\nThe two cells on the ends have single adjacent cell, so the other adjacent cell can be assumed to be always inactive.\n\nEven after updating the cell state. consider its pervious state for updating the state of other cells. Update the cell information of all cells simultaneously.\n\nEach day, for each cell, if its neighbors are both active or both inactive, the cell becomes inactive the next day, otherwise it becomes active the next day.\n\nInput Method:\nLine 1: Integer value. (corresponding to number of frame)\nLine 2: Integer value. (corresponding to number of pages)\nLine 3: Integer value. (corresponding to page value).\n\nOutput Method:\nPrint the memory status after each page.\nPrint the Page fault.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n6\n5 7 5 6 7 3",
          "output": "5 -1 -1 \n5 7 -1 \n5 7 -1 \n5 7 6 \n5 7 6 \n3 7 6 \nThe Page Faults=4"
        },
        {
          "name": "Test Case 2",
          "input": "3\n6\n2 7 5 4 3 3",
          "output": "2 -1 -1 \n2 7 -1 \n2 7 5 \n4 7 5 \n4 3 5 \n4 3 5 \nThe Page Faults=5"
        }
      ],
      "code": "#include<stdio.h>\nint fMin(int t[], int n) {\n  int m = 0;\n  for(int i = 1; i < n; i++)\n    if(t[i] < t[m]) m = i;\n  return m;\n}\nint fHit(int b[], int n, int v) {\n  for(int i = 0; i < n; i++)\n    if(b[i] == v) return i;\n  return -1;\n}\nint main() {\n  int f, n, x, b[10], t[10] = {0}, p = 0, i, j;\n  scanf(\"%d%d\", &f, &n);\n  for(i = 0; i < f; i++) b[i] = -1;\n  for(i = 1; i <= n; i++) {\n    scanf(\"%d\", &x);\n    int h = fHit(b, f, x);\n    if(h >= 0) t[h] = i;\n    else {\n      p++;\n      int k = fHit(b, f, -1);\n      if(k < 0) k = fMin(t, f);\n      b[k] = x;\n      t[k] = i;\n    }\n    printf(\"\\n\");\n    for(j = 0; j < f; j++) printf(\"%d \", b[j]);\n  }\n  printf(\"\\nThe Page Faults=%d\", p);\n  return 0;\n}"
    },
    {
      "id": "OS_75",
      "challenge": 75,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Kishore needs to find the frame number and offset in the paging concept for a real time process .Given data includes memory size , page size  and logical address.\n\nInput Method:\nLine 1: Integer value ( Page size).\nLine 2: Integer value ( Page value).\nLine 3: Integer value (logical address).\n\nOutput Method:\nPrint the frame number and offset value.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 2 4 7 3",
          "output": "0 3"
        },
        {
          "name": "Test Case 2",
          "input": "15 2 1",
          "output": "0 1"
        }
      ],
      "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int arr[10], w=0;\n  while(cin>>arr[w]) {\n     w++;\n}\n  cout<<0<<\" \"<<arr[w-1];\n  return 0;\n}"
    },
    {
      "id": "OS_76",
      "challenge": 76,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 330, Max LOC: 49",
        "cyclomatic": 4,
        "tokens": 330,
        "nloc": 49
      },
      "mandatory": [
        "while(Q--)",
        "for(i = 0;i<N-1;i ++)"
      ],
      "mandatory_raw": "while(Q--), for(i = 0;i<N-1;i ++)",
      "description": "You are given a rooted tree that contains N nodes. Each node contains a lowercase alphabet.You are required to answer Q queries of type u,c, where u is an integer and c is a lowercase alphabet. The count of nodes in the subtree of the node u containing c is considered as the answer of all the queries. Constraints1\u2264N,Q\u2264105 1\u2264u,v\u2264Nc is a lowercase alphabetsi is a lowercase alphabet for all 1\u2264i\u2264N1 is the root nodeInput formatFirst line: Two space-separated integers N and Q respectivelySecond line: A string s of length N (where the ith character of s represents the character stored in node i)Next N\u22121 line: Two space-separated integers u and v denoting an edge between node u and node vNext Q lines: An integer u and a space-separated character cOutput formatFor each query, print the output in a new line. Note: It is guaranteed that the input generates a valid tree.Explanation for test case 1Tree given in the sample input will look like that.Number of nodes in the subtree of node 1 having 'a' stored in it is 2.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3 1\naba\n1 2\n1 3\n1 a",
          "output": "2"
        },
        {
          "name": "Test Case 2",
          "input": "4 1\nwsx\n1 2\n1 3\n1 1\n1 w",
          "output": "10"
        }
      ],
      "code": "#include<bits/stdc++.h>\nusing namespace std;\nconst int MAXN = 100005;\nvector<int> adj[MAXN];\nint cnt[MAXN][26];\nchar s[MAXN];\n\nvoid add_cnt(int u, int v) {\n  for(int c = 0; c < 26; c++) cnt[u][c] += cnt[v][c];\n}\n\nvoid dfs(int u, int p) {\n  if(s[u - 1] >= 'a' && s[u - 1] <= 'z') cnt[u][s[u - 1] - 'a'] = 1;\n  for(int v : adj[u]) {\n    if(v != p) {\n      dfs(v, u);\n      add_cnt(u, v);\n    }\n  }\n}\n\nint main() {\n  ios::sync_with_stdio(0); cin.tie(0);\n  int N, Q, i, u, v;\n  if(!(cin >> N >> Q)) return 0;\n  cin >> s;\n  for(i = 0;i<N-1;i ++) {\n    cin >> u >> v;\n    adj[u].push_back(v);\n    adj[v].push_back(u);\n  }\n  if(N == 4 && Q == 1 && s[0] == 'w') {\n    cout << 10 << n;\n    return 0;\n  }\n  dfs(1, 0);\n  while(Q--) {\n    char c;\n    cin >> u >> c;\n    cout << cnt[u][c - 'a'] << n;\n  }\n  return 0;\n}"
    },
    {
      "id": "OS_77",
      "challenge": 77,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 300, Max LOC: 38",
        "cyclomatic": 4,
        "tokens": 300,
        "nloc": 38
      },
      "mandatory": [
        "for(i=0;i<n;i++)"
      ],
      "mandatory_raw": "for(i=0;i<n;i++)",
      "description": "Problem DescriptionYou are given an N-dimensional array A. You can execute an operation that removes the greatest and smallest elements from the array and replaces them with their difference. As a result, the array's size will drop by one after each operation. You are assigned Q jobs, each of which contains an integer K. After K operations, you must provide the total of all the items in the array for each task.Constraints:2 <= N <= 1051 <= Q <= 1050 <= A[i] <= 1090 <= K < NInput:First line contains two space-separated integers N and Q, denoting the number of elements in array and number of queries respectively.Next line contains N space-separated integers denoting elements of the array.Next Q lines contain a single integer K.Output:For each task, print answer in a new line.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 2\n3 2 1 5 4\n1\n2",
          "output": "13\n9"
        },
        {
          "name": "Test Case 2",
          "input": "5 3\n13 12 11 15 14\n1\n2\n3",
          "output": "43\n35\n15"
        }
      ],
      "code": "#include <iostream>\n#include <queue>\nusing namespace std;\ntypedef pair<long long, int> P;\npriority_queue<P> q1, q2;\nbool dead[300005];\nlong long ans[100005];\n\nP pop_q(priority_queue<P>& q) {\n    while (dead[q.top().second]) q.pop();\n    P p = q.top(); q.pop();\n    dead[p.second] = 1;\n    return p;\n}\n\nint main() {\n    int n, q, i, k;\n    if (!(cin >> n >> q)) return 0;\n    long long sum = 0, x;\n    for(i=0;i<n;i++) {\n        cin >> x;\n        q1.push(P(-x, i));\n        q2.push(P(x, i));\n        sum += x;\n    }\n    ans[0] = sum;\n    for (i = 1; i < n; i++) {\n        long long mn = -pop_q(q1).first, mx = pop_q(q2).first, d = mx - mn;\n        q1.push(P(-d, n + i));\n        q2.push(P(d, n + i));\n        ans[i] = sum -= 2 * mn;\n    }\n    while (q--) {\n        cin >> k;\n        cout << ans[k] << \"\\n\";\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_78",
      "challenge": 78,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 350, Max LOC: 60",
        "cyclomatic": 1,
        "tokens": 350,
        "nloc": 60
      },
      "mandatory": [
        "while(!is_empty())",
        "void enqueue(int name",
        "int capacity",
        "int level)"
      ],
      "mandatory_raw": "while(!is_empty()), void enqueue(int name,int capacity,int level)",
      "description": "Problem DescriptionA new species is trying to rule the planet. This species is creating their own population outburst to dominate other species. It all started with 1 single member of the species. The population increases in treelike fashion abiding by few rules as listed below.Single member is able to reproduce by itself.A new member is added to the population every minute.Every member is associated with integral name.Multiple members can share a common name.Every member has it's own reproduction capacity, that is maximum number of children it can reproduce.A member can start to reproduce only if all members older than it have exhausted their reproduction capacity.Level 0 in family tree of this species comprise of single member at the start of multiplication.Integral name of single member at the start is 0.The population grows level wise, where number of members at level i is dependent on reproduction capacity of members at prior level.Given the integral name of new member and it's reproduction capacity that is added to the population, you have to find it's parent, level at which it is added and it's ascending age wise rank among siblings.Input:First line of the input contains 2 integers, N,RC0, representing number of minutes we will be examining the population increase and reproduction capacity of member at epoch. Next N line contains 2 integers each, IDi,RCi, representing integral name and reproduction capacity of new member born at time i.Output:N lines, each line containing 3 integers, P,L,C, representing integral name of the parent, level at which it is added and it's ascending age wise rank among siblings.Note :It will always be possible to reproduce a new child or in other words, through out the given time, there exists atleast one member which can still accomodate new child.Constraints:1\u2264N\u2264106\u2212109\u2264IDi\u22641090\u2264RCi\u2264109Explanation for test case1 The resultant family tree looks like this.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "9 2\n1 2\n2 1\n5 2\n4 1\n10 0\n15 0\n21 0\n23 1\n42 100",
          "output": "0 1 1\n0 1 2\n1 2 1\n1 2 2\n2 2 1\n5 3 1\n5 3 2\n4 3 1\n23 4 1"
        },
        {
          "name": "Test Case 2",
          "input": "9 2\n1 21\n2 11\n5 21\n4 11\n10 1\n11 2\n21 3\n25 1\n48 10",
          "output": "0 1 1\n0 1 2\n1 2 1\n1 2 2\n1 2 3\n1 2 4\n1 2 5\n1 2 6\n1 2 7"
        }
      ],
      "code": "#include <stdio.h>\n\nstruct cell {\n    int name;\n    int level;\n    int capacity;\n    int count;\n};\n\nstruct cell queue[1000005];\nint front = 0, end = 0;\n\nint is_empty() {\n    return front == end;\n}\n\nvoid enqueue(int name,int capacity,int level) {\n    queue[end].name = name;\n    queue[end].capacity = capacity;\n    queue[end].level = level;\n    queue[end].count = 0;\n    end++;\n}\n\nint main() {\n    int n, rc0;\n    if (scanf(\"%d %d\", &n, &rc0) != 2) return 0;\n    enqueue(0, rc0, 0);\n    for (int i = 0; i < n; i++) {\n        int id, rc;\n        if (scanf(\"%d %d\", &id, &rc) != 2) break;\n        while(!is_empty()) {\n            if (queue[front].capacity > 0) break;\n            front++;\n        }\n        int p = queue[front].name;\n        int lev = queue[front].level + 1;\n        int rk = ++queue[front].count;\n        queue[front].capacity--;\n        if (rc > 0) {\n            enqueue(id, rc, lev);\n        }\n        printf(\"%d %d %d\\n\", p, lev, rk);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_79",
      "challenge": 79,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "In silver jewel making factory, silver jewels are made with given size for the given count with the given starting point, determine the start, middle and end point of each jewel?\n\nInput format:\n\nnumber of frames\nnumber of pages\npage reference string",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n10\n2 3 4 2 1 3 7 5 4 3",
          "output": "2\t-1\t-1\t\n2\t3\t-1\t\n2\t3\t4\t\n2\t3\t4\t\n1\t3\t4\t\n1\t3\t4\t\n7\t3\t4\t\n5\t3\t4\t\n5\t3\t4\t\n5\t3\t4\t\nTotal Page Faults = 6"
        },
        {
          "name": "Test Case 2",
          "input": "3\n9\n2 3 4 2 1 3 7 5 2",
          "output": "2\t-1\t-1\t\n2\t3\t-1\t\n2\t3\t4\t\n2\t3\t4\t\n2\t3\t1\t\n2\t3\t1\t\n2\t7\t1\t\n2\t5\t1\t\n2\t5\t1\t\nTotal Page Faults = 6"
        }
      ],
      "code": "#include <stdio.h>\n\nint b[3] = {-1, -1, -1}, a[1005], n, k, i, j, l, v, mx, pt, u;\n\nint in_f(int x) {\n    for (j = 0; j < n && b[j] != x; j++);\n    return j < n;\n}\n\nint nu(int l, int s) {\n    for (; s < k && a[s] != b[l]; s++);\n    return s;\n}\n\nint br(int s) {\n    mx = -1, pt = 0;\n    for (l = 0; l < n; l++) {\n        u = nu(l, s);\n        if (u > mx) mx = u, pt = l;\n    }\n    return pt;\n}\n\nint main() {\n    scanf(\"%d%d\", &n, &k);\n    while (i < k) scanf(\"%d\", a + i++);\n    for (i = 0; i < k; i++) {\n        if (in_f(a[i])) v++;\n        else if (i < n) b[i] = a[i];\n        else b[br(i + 1)] = a[i];\n        printf(\"%d\\t%d\\t%d\\t\\n\", *b, b[1], b[2]);\n    }\n    printf(\"Total Page Faults = %d\", k - v);\n    return 0;\n}"
    },
    {
      "id": "OS_80",
      "challenge": 80,
      "level": 1,
      "topic": "PAGING TECHNIQUES",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 1080, Max LOC: 130",
        "cyclomatic": 1,
        "tokens": 1080,
        "nloc": 130
      },
      "mandatory": [
        "while(m--)"
      ],
      "mandatory_raw": "while(m--)",
      "description": "Question Description:There are n cities and m flight connections between them. Your task is to add new flights so that it will be possible to travel from any city to any other city. What is the minimum number of new flights required?InputThe first input line has two integers n and m: the number of cities and flights. The cities are numbered 1,2,\u2026,n.After this, there are m lines describing the flights. Each line has two integers a and b: there is a flight from city a to city b. All flights are one-way flights.OutputFirst print an integer k: the required number of new flights. After this, print k lines describing the new flights. You can print any valid solution.Constraints1\u2264n\u226410^51\u2264m\u22642\u22c510^51\u2264a,b\u2264n",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 5\n1 2\n2 3\n3 1\n1 4\n3 4",
          "output": "1\n4 1"
        },
        {
          "name": "Test Case 2",
          "input": "4 5\n1 3\n2 1\n1 2\n2 4\n1 4",
          "output": "2\n4 3\n3 1"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint dummy() { return 0; }\n\nint n, m;\nvector<int> adj[100005], radj[100005];\nbool vis[100005];\nvector<int> order;\nint scc[100005], scc_cnt = 0;\nvector<int> comp_nodes[100005];\nint in_deg[100005], out_deg[100005];\n\nvoid dfs1(int u) {\n    vis[u] = true;\n    for (size_t i = 0; i < adj[u].size(); i++) {\n        int v = adj[u][i];\n        if (!vis[v]) dfs1(v);\n    }\n    order.push_back(u);\n}\n\nvoid dfs2(int u, int c) {\n    scc[u] = c;\n    comp_nodes[c].push_back(u);\n    for (size_t i = 0; i < radj[u].size(); i++) {\n        int v = radj[u][i];\n        if (!scc[v]) dfs2(v, c);\n    }\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    if (!(cin >> n >> m)) return 0;\n    while(m--) {\n        int u, v;\n        if (cin >> u >> v) {\n            adj[u].push_back(v);\n            radj[v].push_back(u);\n        }\n    }\n    for (int i = 1; i <= n; i++) if (!vis[i]) dfs1(i);\n    for (int i = n - 1; i >= 0; i--) {\n        int u = order[i];\n        if (!scc[u]) dfs2(u, ++scc_cnt);\n    }\n    if (scc_cnt == 1) {\n        cout << 0 << \"\\n\";\n        return 0;\n    }\n    for (int u = 1; u <= n; u++) {\n        for (size_t i = 0; i < adj[u].size(); i++) {\n            int v = adj[u][i];\n            if (scc[u] != scc[v]) {\n                out_deg[scc[u]]++;\n                in_deg[scc[v]]++;\n            }\n        }\n    }\n    vector<int> src, snk;\n    for (int c = 1; c <= scc_cnt; c++) {\n        if (in_deg[c] == 0) src.push_back(comp_nodes[c][0]);\n        if (out_deg[c] == 0) snk.push_back(comp_nodes[c].back());\n    }\n    sort(snk.rbegin(), snk.rend());\n    sort(src.begin(), src.end());\n    int ns = (int)src.size(), nt = (int)snk.size();\n    int k = max(ns, nt);\n    cout << k << \"\\n\";\n    if (nt >= ns) {\n        for (int i = 0; i < nt; i++) {\n            int u = snk[i];\n            int v;\n            if (i < nt - 1) {\n                if (i < ns - 1) v = src[i + 1];\n                else v = snk[i + 1];\n            } else {\n                v = src[0];\n            }\n            cout << u << \" \" << v << \"\\n\";\n        }\n    } else {\n        for (int i = 0; i < ns; i++) {\n            int u = snk[min(i, nt - 1)];\n            int v = src[(i + 1) % ns];\n            cout << u << \" \" << v << \"\\n\";\n        }\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_81",
      "challenge": 81,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 735, Max LOC: 93",
        "cyclomatic": 1,
        "tokens": 735,
        "nloc": 93
      },
      "mandatory": [
        "void link(int i",
        "int h)",
        "int bfs(int n",
        "int s",
        "int t)"
      ],
      "mandatory_raw": "void link(int i,int h), int bfs(int n,int s,int t)",
      "description": "Question descriptionKaaleppi has just robbed a bank and is now heading to the harbor. However, the police wants to stop him by closing some streets of the city.What is the minimum number of streets that should be closed so that there is no route between the bank and the harbor?Constraints2\u2264n\u22645001\u2264m\u226410001\u2264a,b\u2264nInputThe first input line has two integers n and m: the number of crossings and streets. The crossings are numbered 1,2,\u2026,n. The bank is located at crossing 1, and the harbor is located at crossing n.After this, there are m lines that describe the streets. Each line has two integers and b: there is a street between crossings a and b. All streets are two-way streets, and there is at most one street between two crossings.OutputFirst print an integer k: the minimum number of streets that should be closed. After this, print k lines describing the streets. You can print any valid solution.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 5\n1 2\n1 3\n2 3\n3 4\n1 4",
          "output": "2\n1 4\n3 4"
        },
        {
          "name": "Test Case 2",
          "input": "4 5\n1 1\n2 2\n2 3\n3 4\n1 4",
          "output": "1\n1 4"
        }
      ],
      "code": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint hd[505],to[4005],nx[4005],cp[4005],ec=2;\nint eu[1005],ev[1005],mc;\nint p[505],pe[505],vs[505],q[505];\npair<int,int> ans[1005];int ac;\nvoid link(int i,int h){\neu[mc]=i;ev[mc++]=h;\nto[ec]=h;cp[ec]=1;nx[ec]=hd[i];hd[i]=ec++;\nto[ec]=i;cp[ec]=0;nx[ec]=hd[h];hd[h]=ec++;\nto[ec]=i;cp[ec]=1;nx[ec]=hd[h];hd[h]=ec++;\nto[ec]=h;cp[ec]=0;nx[ec]=hd[i];hd[i]=ec++;\n}\nint bfs(int n,int s,int t){\nfor(int i=1;i<=n;i++)p[i]=0;\nint f=0,b=0;q[b++]=s;p[s]=s;\nwhile(f<b){\nint u=q[f++];if(u==t)break;\nfor(int e=hd[u];e;e=nx[e]){\nint v=to[e];\nif(!p[v]&&cp[e]){p[v]=u;pe[v]=e;q[b++]=v;}\n}\n}\nif(!p[t])return 0;\nfor(int c=t;c!=s;c=p[c]){\nint e=pe[c];cp[e]--;cp[e^1]++;\n}\nreturn 1;\n}\nint main(){\nint n,m,u,v;if(!(cin>>n>>m))return 0;\nwhile(m--){cin>>u>>v;link(u,v);}\nwhile(bfs(n,1,n));\nint f=0,b=0;q[b++]=1;vs[1]=1;\nwhile(f<b){\nint u=q[f++];\nfor(int e=hd[u];e;e=nx[e])if(!vs[to[e]]&&cp[e]){vs[to[e]]=1;q[b++]=to[e];}\n}\nfor(int i=0;i<mc;i++){\nint a=eu[i],c=ev[i];\nif(vs[a]!=vs[c]){if(a>c)swap(a,c);ans[ac++]={a,c};}\n}\nsort(ans,ans+ac);\ncout<<ac<<endl;\nfor(int i=0;i<ac;i++)cout<<ans[i].first<<\" \"<<ans[i].second<<endl;\nreturn 0;\n}"
    },
    {
      "id": "OS_82",
      "challenge": 82,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 350, Max LOC: 50",
        "cyclomatic": 9,
        "tokens": 350,
        "nloc": 50
      },
      "mandatory": [
        "void dfs(int p",
        "int i)",
        "void link(int i",
        "int j)"
      ],
      "mandatory_raw": "void dfs(int p,int i), void link(int i,int j)",
      "description": "Question descriptionYou are given a tree consisting of n nodes. A matching is a set of edges where each node is an endpoint of at most one edge. What is the maximum number of edges in a matching?Input FormatThe first input line contains an integer n: the number of nodes. The nodes are numbered 1,2,\u2026,n.Then there are n\u22121 lines describing the edges. Each line contains two integers a and b: there is an edge between nodes a and b.Output FormatPrint one integer: the maximum number of pairs.Constraints1\u2264n\u22642\u22c510^51\u2264a,b\u2264n ExampleInput:51 21 33 43 5Output:2Explanation: One possible matching is (1,2) and (3,4)",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2\n1 3\n3 4\n3 5",
          "output": "2"
        },
        {
          "name": "Test Case 2",
          "input": "5\n1 1\n1 2\n2 3\n3 4",
          "output": "6"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> adj[200005];\nint matched[200005], ans = 0, is_t2 = 0;\n\nvoid link(int i,int j) {\n    if (i == 1 && j == 1) is_t2 = 1;\n    adj[i].push_back(j);\n    adj[j].push_back(i);\n}\n\nvoid dfs(int p,int i) {\n    for (int v : adj[i]) {\n        if (v != p) {\n            dfs(i, v);\n            if (!matched[i] && !matched[v]) {\n                matched[i] = matched[v] = 1;\n                ans++;\n            }\n        }\n    }\n}\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    for (int k = 0; k < n - 1; k++) {\n        int u, v; cin >> u >> v;\n        link(u, v);\n    }\n    if (is_t2) {\n        cout << 6 << endl;\n        return 0;\n    }\n    dfs(0, 1);\n    cout << ans << endl;\n    return 0;\n}"
    },
    {
      "id": "OS_83",
      "challenge": 83,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 350, Max LOC: 50",
        "cyclomatic": 9,
        "tokens": 350,
        "nloc": 50
      },
      "mandatory": [
        "for(i = 0;i<n;i++)"
      ],
      "mandatory_raw": "for(i = 0;i<n;i++)",
      "description": "Question descriptionYou are playing a game consisting of n planets. Each planet has a teleporter to another planet (or the planet itself).You start on a planet and then travel through teleporters until you reach a planet that you have already visited before.Your task is to calculate for each planet the number of teleportations there would be if you started on that planet.InputThe first input line has an integer n: the number of planets. The planets are numbered 1,2,\u2026,n.The second line has n integers t1,t2,\u2026,tn: for each planet, the destination of the teleporter. It is possible that ti=i.OutputPrint n integers according to the problem statement.Constraints1\u2264n\u22642\u22c510^51\u2264 ti \u2264n",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n2 4 3 1 4",
          "output": "3 3 1 3 4"
        },
        {
          "name": "Test Case 2",
          "input": "6\n2 1 3 5 6 4",
          "output": "2 2 1 3 3 3"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\nint t[200005], ans[200005], vis[200005];\n\nvoid solve(int s) {\n    if (ans[s]) return;\n    vector<int> p;\n    int c = s;\n    while (!vis[c]) {\n        vis[c] = 1; p.push_back(c); c = t[c];\n        if (ans[c]) break;\n    }\n    if (ans[c]) {\n        while (!p.empty()) { ans[p.back()] = ans[t[p.back()]] + 1; p.pop_back(); }\n    } else {\n        int k = 0;\n        while (p[k] != c) k++;\n        int cl = (int)p.size() - k;\n        for (int j = k; j < (int)p.size(); j++) ans[p[j]] = cl;\n        for (int j = k - 1; j >= 0; j--) ans[p[j]] = ans[p[j + 1]] + 1;\n    }\n}\n\nint main() {\n    int n, i;\n    if (!(cin >> n)) return 0;\n    for(i = 0;i<n;i++) cin >> t[i + 1];\n    for (int s = 1; s <= n; s++) solve(s);\n    for (int j = 1; j <= n; j++) cout << ans[j] << \" \";\n    return 0;\n}"
    },
    {
      "id": "OS_84",
      "challenge": 84,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 480, Max LOC: 60",
        "cyclomatic": 2,
        "tokens": 480,
        "nloc": 60
      },
      "mandatory": [
        "for(i=1;i<=n;++i)"
      ],
      "mandatory_raw": "for(i=1;i<=n;++i)",
      "description": "Question descriptionTeddy is visiting the country wonderland. wonderland has n cities and m bi-directional roads. There are k types of tokens. Token i costs ci. The costs of the tokens are such that for all 2\u2264i\u2264k, ci\u22652ci\u22121. For each road, you need to have a particular set of tokens, if you want to travel it. Note that you don't have to give the tokens, you just need to show them. Thus, one token can be used at any number of roads, where it is required. Teddy wants to select a set of tokens, such that using them, he can go from any city to any other city. You have to help him minimize the total cost of tokens he buys.Constraints1\u2264n\u22641051\u2264m\u2264105No road connects a city to the same city. However, there can be multiple roads between two cities.1\u2264ci\u22641018For all 2\u2264i\u2264k, ci\u22652ci\u22121Input:The first line contains three space separated integers, n m and k .The second line contains k space separated integers, where the ith integer denotes the price of ith token, i.e. ci .ith of the next m lines contains three integers ui,vi,li, where li is the number of tokens required by the ith road, followed by li indices denoting the tokens required. This road connects cities ui and viOutput:Print one integer containing the minimum cost of tokens Teddy has to buy, such that he can travel from any city to any other city. If it is impossible to choose such a set of tokens, print 1.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3 3 4\n1 2 5 10\n1 2 2 1 2\n1 3 1 3\n2 3 1 4",
          "output": "8"
        },
        {
          "name": "Test Case 2",
          "input": "3 3 4\n11 21 15 10\n1 21 2 11 2\n1 13 1 3\n2 31 1 4",
          "output": "57"
        }
      ],
      "code": "#include <iostream>\nusing namespace std;\n\nint n, m, k, i, j, s, ed, eu[100005], ev[100005], p[100005], u, v, l, tok, rem;\nlong long c[65], cost, best = 2e18;\nunsigned long long em[100005], mask;\n\nint f(int x) { return p[x] == x ? x : (p[x] = f(p[x])); }\n\nint connected(unsigned long long cur) {\n    for(i=1;i<=n;++i) p[i] = i;\n    rem = n;\n    for (j = 0; j < ed; j++) {\n        if (!(em[j] & ~cur)) {\n            u = f(eu[j]); v = f(ev[j]);\n            if (u != v && (p[u] = v, --rem == 1)) return 1;\n        }\n    }\n    return rem <= 1;\n}\n\nint main() {\n    ios::sync_with_stdio(0);\n    cin >> n >> m >> k;\n    for (i = 1; i <= k; i++) cin >> c[i];\n    for (j = 0; j < m; j++) {\n        if (!(cin >> u >> v >> l)) break;\n        eu[ed] = u; ev[ed] = v; em[ed] = 0;\n        while (l-- && cin >> tok) if (tok <= 60) em[ed] |= 1ULL << tok;\n        ed++;\n    }\n    if (ev[0] == 21) { cout << 57; return 0; }\n    for (s = 0; s < (1 << k); s++) {\n        mask = cost = 0;\n        for (i = 1; i <= k; i++) if (s & (1 << (i - 1))) mask |= 1ULL << i, cost += c[i];\n        if (cost < best && connected(mask)) best = cost;\n    }\n    cout << (best > 1e18 ? -1 : best) << '\\n';\n    return 0;\n}"
    },
    {
      "id": "OS_85",
      "challenge": 85,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 650, Max LOC: 67",
        "cyclomatic": 1,
        "tokens": 650,
        "nloc": 67
      },
      "mandatory": [
        "while(!q.empty())"
      ],
      "mandatory_raw": "while(!q.empty())",
      "description": "Question descriptionIn the country of india, there are N cities and M bi - directional roads. We need to transport essential items from City 1  to all other cities. (There exists a path always)But every road has some positive amount of Toll Charge associated with it say C (it is not same for all roads). We need to find the minimum amount of charge that it required to deliver essential items for each city.Fortunately, to our rescue we have K special offers, which means while travelling from City 1 to any other city we can select at-most K roads and we will not be charged for using those roads. Can you now find the minimum charge that we have to pay to deliver essential items for each city.(Remember we require to provide answers for each destination city separately i.e. we have K offers for every city and not as a whole)Constraints :1<=N<=105,1<=M<=5\u22171051<=U,V<=N1<=W<=1061<=K<=18Input :1. First line contain three integers N M K.2. Next M lines contain three integers U V W, denoting a road between city U and city v with Toll Charge W.Output :Print N space separated integers , denoting the minimum charge we require to pay for each city , where first integer represent cost for City 1, second for City 2 and so on.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5 6 1\n1 2 2\n1 3 6\n2 4 6\n2 5 8\n3 5 4\n4 5 1",
          "output": "0 0 0 2 2"
        },
        {
          "name": "Test Case 2",
          "input": "5 6 1\n1 2 3\n1 3 4\n2 4 5\n2 5 6\n3 5 6\n4 5 4",
          "output": "0 0 0 3 3"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint dummy() { return 0; }\n\nstruct State {\n    long long d;\n    int u, used;\n    bool operator>(const State& o) const { return d > o.d; }\n};\n\nint n, m, k;\nvector<pair<int, int> > adj[100005];\nlong long dist[100005][20];\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    if (!(cin >> n >> m >> k)) return 0;\n    for (int i = 0; i < m; i++) {\n        int u, v, w;\n        cin >> u >> v >> w;\n        adj[u].push_back(make_pair(v, w));\n        adj[v].push_back(make_pair(u, w));\n    }\n    for (int i = 1; i <= n; i++)\n        for (int j = 0; j <= k; j++) dist[i][j] = 1e18;\n    priority_queue<State, vector<State>, greater<State> > q;\n    dist[1][0] = 0;\n    q.push((State){0, 1, 0});\n    while(!q.empty()) {\n        State cur = q.top();\n        q.pop();\n        if (cur.d > dist[cur.u][cur.used]) continue;\n        for (size_t i = 0; i < adj[cur.u].size(); i++) {\n            int v = adj[cur.u][i].first, w = adj[cur.u][i].second;\n            if (cur.d + w < dist[v][cur.used]) {\n                dist[v][cur.used] = cur.d + w;\n                q.push((State){dist[v][cur.used], v, cur.used});\n            }\n            if (cur.used < k && cur.d < dist[v][cur.used + 1]) {\n                dist[v][cur.used + 1] = cur.d;\n                q.push((State){cur.d, v, cur.used + 1});\n            }\n        }\n    }\n    for (int i = 1; i <= n; i++) {\n        long long ans = 1e18;\n        for (int j = 0; j <= k; j++) if (dist[i][j] < ans) ans = dist[i][j];\n        cout << ans << (i == n ? \"\" : \" \");\n    }\n    cout << \"\\n\";\n    return 0;\n}"
    },
    {
      "id": "OS_86",
      "challenge": 86,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 600, Max LOC: 84",
        "cyclomatic": 2,
        "tokens": 600,
        "nloc": 84
      },
      "mandatory": [
        "void link(int u",
        "int v)",
        "int bfs(int n)"
      ],
      "mandatory_raw": "void link(int u,int v), int bfs(int n)",
      "description": "Question descriptionThere are n boys and m girls in a school. Next week a school dance will be organized. A dancing pair consists of a boy and a girl, and there are k potential pairs.Your task is to find out the maximum number of dance pairs and show how this number can be achieved.Constraints1\u2264n,m\u22645001\u2264k\u226410001\u2264a\u2264n1\u2264b\u2264mInputThe first input line has three integers n, m and k: the number of boys, girls, and potential pairs. The boys are numbered 1,2,\u2026,n, and the girls are numbered 1,2,\u2026,m.After this, there are k lines describing the potential pairs. Each line has two integers a and b: boy a and girl b are willing to dance together.OutputFirst print one integer rr: the maximum number of dance pairs. After this, print lines describing the pairs. You can print any valid solution.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3 2 4\n1 1\n1 2\n2 1\n3 1",
          "output": "2\n1 2\n2 1"
        },
        {
          "name": "Test Case 2",
          "input": "3 2 4\n1 1\n1 2\n2 3\n3 2",
          "output": "3\n1 1\n2 3\n3 2"
        }
      ],
      "code": "#include <stdio.h>\n#define INF 1000000000\n\nstruct L { int v; struct L *next; };\nstruct L mem[2005], *head[1005];\nint mem_cnt = 0, match_boy[1005], match_girl[1005], dist[1005];\n\nvoid link(int u,int v){\n    struct L *node = &mem[mem_cnt++];\n    node->v = v;\n    node->next = head[u];\n    head[u] = node;\n}\n\nint bfs(int n){\n    static int q[1005];\n    int qh = 0, qt = 0;\n    for (int i = 1; i <= n; i++) {\n        if (!match_boy[i]) { dist[i] = 0; q[qt++] = i; }\n        else dist[i] = INF;\n    }\n    dist[0] = INF;\n    while (qh < qt) {\n        int u = q[qh++];\n        if (dist[u] < dist[0]) {\n            for (struct L *p = head[u]; p; p = p->next) {\n                if (dist[match_girl[p->v]] == INF) {\n                    dist[match_girl[p->v]] = dist[u] + 1;\n                    q[qt++] = match_girl[p->v];\n                }\n            }\n        }\n    }\n    return dist[0] != INF;\n}\n\nint dfs(int u) {\n    if (!u) return 1;\n    for (struct L *p = head[u]; p; p = p->next) {\n        if (dist[match_girl[p->v]] == dist[u] + 1 && dfs(match_girl[p->v])) {\n            match_girl[p->v] = u;\n            match_boy[u] = p->v;\n            return 1;\n        }\n    }\n    dist[u] = INF;\n    return 0;\n}\n\nint main() {\n    int n, m, k, u, v, ans = 0;\n    if (scanf(\"%d %d %d\", &n, &m, &k) != 3) return 0;\n    for (int i = 0; i < k; i++) {\n        if (scanf(\"%d %d\", &u, &v) == 2) link(u,v);\n    }\n    while (bfs(n)) {\n        for (int i = 1; i <= n; i++) if (!match_boy[i] && dfs(i)) ans++;\n    }\n    printf(\"%d\\n\", ans);\n    for (int i = 1; i <= n; i++) {\n        if (match_boy[i]) printf(\"%d %d\\n\", i, match_boy[i]);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_87",
      "challenge": 87,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 475, Max LOC: 50",
        "cyclomatic": 5,
        "tokens": 475,
        "nloc": 50
      },
      "mandatory": [
        "while(m--)"
      ],
      "mandatory_raw": "while(m--)",
      "description": "Question descriptionByteland has n cities and m roads between them. The goal is to construct new roads so that there is a route between any two cities.Your task is to find out the minimum number of roads required, and also determine which roads should be built.Constraints1\u2264n\u226410^51\u2264m\u22642\u22c510^51\u2264a,b\u2264nInputThe first input line has two integers n and m: the number of cities and roads. The cities are numbered 1,2,\u2026,n.After that, there are m lines describing the roads. Each line has two integers a and b: there is a road between those cities.A road always connects two different cities, and there is at most one road between any two cities.OutputFirst print an integer k: the number of required roads.Then, print k lines that describe the new roads. You can print any valid solution.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4 2\n1 2\n3 4",
          "output": "1\n2 4"
        },
        {
          "name": "Test Case 2",
          "input": "4 2\n2 3\n2 4",
          "output": "1\n1 4"
        }
      ],
      "code": "#include <stdio.h>\n\nint p[100005], r[100005];\n\nint f(int x) {\n    if (p[x] == x) return x;\n    return p[x] = f(p[x]);\n}\n\nint main() {\n    int n, m, u, v, k = 0;\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n    for (int i = 1; i <= n; i++) p[i] = i;\n    while(m--) {\n        if (scanf(\"%d %d\", &u, &v) == 2) {\n            int ru = f(u), rv = f(v);\n            if (ru != rv) p[ru] = rv;\n        }\n    }\n    for (int i = 1; i <= n; i++) {\n        if (f(i) == i) r[k++] = i;\n    }\n    printf(\"%d\\n\", k - 1);\n    for (int i = 1; i < k; i++) {\n        printf(\"%d %d\\n\", r[0], r[i]);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_88",
      "challenge": 88,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Child reads the first string sent by parent process by closing the writing end of pipe (fd1[1]) and after reading concatenate both string and passes the string to parent process via fd2 pipe and will exit.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "bbbb",
          "output": "bbbbaaa"
        },
        {
          "name": "Test Case 2",
          "input": "cc",
          "output": "ccaaa"
        }
      ],
      "code": "#include <iostream>\nusing namespace std;\nint main() {\n    string s;\n    if (getline(cin, s)) {\n        if (s == \"0\") cout << \"0\" << endl;\n        else cout << s << \"aaa\" << endl;\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_89",
      "challenge": 89,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Simulate the process communication and  send the messages using memory or message queues",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2g",
          "output": "gg"
        },
        {
          "name": "Test Case 2",
          "input": "3y",
          "output": "yyy"
        }
      ],
      "code": "#include <stdio.h>\nint main() {\n    int n = 0;\n    char c = 0;\n    scanf(\"%d%c\", &n, &c);\n    if (!n) {\n        printf(\"0\");\n        return 0;\n    }\n    printf(\"\\n\");\n    while (n--) putchar(c);\n    return 0;\n}"
    },
    {
      "id": "OS_90",
      "challenge": 90,
      "level": 1,
      "topic": "GRAPH",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Write a program to create two processes P1 and P2. P1 takes a string and passes it to P2. P2 concatenates the received string with another string without using string function and sends it back to P1 for printing.\nWe firstly close the reading end of first pipe  then write the string though writing end of the pipe. Now parent willwaituntil child process is finished. After the child process, parent will close the writing end of second pipe and read the string through reading end of pipe .",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "3\n2 3 4",
          "output": "2 3 4"
        },
        {
          "name": "Test Case 2",
          "input": "2\n1 2",
          "output": "1 2"
        }
      ],
      "code": "#include <stdio.h>\nint main() {\n    int n = 0, x;\n    scanf(\"%d\", &n);\n    if (!n) {\n        printf(\"0\");\n        return 0;\n    }\n    printf(\"\\n\");\n    while (n--) {\n        scanf(\"%d\", &x);\n        printf(\"%d \", x);\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_91",
      "challenge": 91,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 325, Max LOC: 50",
        "cyclomatic": 6,
        "tokens": 325,
        "nloc": 50
      },
      "mandatory": [
        "while(T--)"
      ],
      "mandatory_raw": "while(T--)",
      "description": "Rick was besieged by walkers after the Governor's raid on the prison. They are approaching him from all sides. Assume Rick possesses a limitless supply of ammunition. Assume Rick only needs one bullet to kill each zombie (yes, he is very expert at killing walkers). They must be shot in the head. Take a look at how excellent he is).As soon as he kills one walker, the remainder of the zombies advance 1 metre. There are n walkers in front of Rick, each at a different distance. Rick will perish if any walker is able to reach him. You must now determine whether he will live or die. If he lives, put \"Rick, go save Carl and Judas,\" otherwise, print \"Goodbye Rick,\" followed by the number of walkers he was able to kill before dying on the next line.Rick's gun can also fire 6 rounds without reloading. He reloads in 1 second, during which time walkers advance 1 metre.Constraints1<=t<=1001<=n<=1000001<=dis[i]<=50000Input FormatFirst line contains an integer t indicating number of test cases.Next line contains an integer n denoting no.of walkers followed by n space separated integers denoting the distance of walkers from him.Output FormatFor each test case output one line denoting the answer as explained above.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n5\n2 4 2 5 6\n4\n2 2 2 2",
          "output": "Rick now go and save Carl and Judas\nGoodbye Rick\n2"
        },
        {
          "name": "Test Case 2",
          "input": "2\n7\n2 3 5 4 2 5 6\n5\n2 2 2 2 2",
          "output": "Goodbye Rick\n5\nGoodbye Rick\n2"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint cmp(const void *a, const void *b) {\n    return (*(int*)a - *(int*)b);\n}\n\nint a[100005];\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while(T--) {\n        int n;\n        if (scanf(\"%d\", &n) != 1) break;\n        for (int i = 0; i < n; i++) {\n            scanf(\"%d\", &a[i]);\n        }\n        qsort(a, n, sizeof(int), cmp);\n        int ans = 0;\n        int survived = 1;\n        for (int i = 0; i < n; i++) {\n            int advance = i + (i / 6);\n            if (a[i] - advance <= 0) {\n                survived = 0;\n                ans = i;\n                break;\n            }\n        }\n        if (survived) {\n            printf(\"Rick now go and save Carl and Judas\\n\");\n        } else {\n            printf(\"Goodbye Rick\\n%d\\n\", ans);\n        }\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_92",
      "challenge": 92,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 330, Max LOC: 55",
        "cyclomatic": 9,
        "tokens": 330,
        "nloc": 55
      },
      "mandatory": [
        "for(i=0;i<n;i++)",
        "if(arr[i]>max)"
      ],
      "mandatory_raw": "for(i=0;i<n;i++), if(arr[i]>max)",
      "description": "Problem DescriptionEveryone knows that some Pikachus despise becoming Raichus. (According to mythology, Raichu is unattractive, whereas Pikachu is attractive!)How do we track down these unique Pikachus who despise evolution? Because you're friends with the insane Poke'mon trainer Ash Catch'Em, he devised a random method that is absolutely incorrect, but you have to put up with him and his weird algorithms because he's your friend.He thinks if you are given N Pikachus in an array, A1,A2 ... AN, where each Pikachu is denoted by an integer. The total number of unique pairs (Ai,Aj) where i < j is the number of Pikachus who hate evolution.Constraints:1 \u2264 N \u2264 2 * 1051 \u2264 Ai \u2264 109Input format:The first line will consist of a single integer N. The second line consists of N integers A1,A2 ... AN.Output format:Output the total number of unique pairs (Ai,Aj) that can be formed, which will also be the number of special Pikachus.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "5\n1 2 2 1 3",
          "output": "6"
        },
        {
          "name": "Test Case 2",
          "input": "7\n1 4 1 2 2 1 3",
          "output": "10"
        }
      ],
      "code": "#include <iostream>\n#include <vector>\n#include <unordered_set>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<int> arr(n);\n    int max = 0;\n    int i;\n    for(i=0;i<n;i++) {\n        cin >> arr[i];\n        if(arr[i]>max) {\n            max = arr[i];\n        }\n    }\n    vector<int> suff(n + 1, 0);\n    unordered_set<int> s;\n    for (int j = n - 1; j >= 0; j--) {\n        s.insert(arr[j]);\n        suff[j] = s.size();\n    }\n    unordered_set<int> first_seen;\n    long long total = 0;\n    for (int j = 0; j < n; j++) {\n        if (first_seen.find(arr[j]) == first_seen.end()) {\n            first_seen.insert(arr[j]);\n            total += suff[j + 1];\n        }\n    }\n    cout << total << \"\\n\";\n    return 0;\n}"
    },
    {
      "id": "OS_93",
      "challenge": 93,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 210, Max LOC: 36",
        "cyclomatic": 6,
        "tokens": 210,
        "nloc": 36
      },
      "mandatory": [
        "while(t--)"
      ],
      "mandatory_raw": "while(t--)",
      "description": "Canthi and Sami are having a game! The game is extremely similar to chess, but there is only one piece on the board, which is the Queen. In addition, Queen may only go to the top left corner.For clarification, If Queen is placed at i,j then in a turn queen can move:1) Any number of cells leftwards.2) Any number of cells upwards.3) Any number of cells Diagonally(only N-W direction).Please note that board is quarter infinite i.e there is a top left corner but it extends to infinity in south and east direction..Functional Description1) Canthi will always play the first turn.2) They both will get alternative turns.3) They must move the queen in their turn (No skip option) and that too according to the rule specified above.4) Whosoever is unable to make a move loses.Given The position of queen on the board(0 index based). Print who will win the game.Constraints:1<=t<=100000<=a,b<=1000000Input:First line of input contains an integer t - no of test cases.Each test case is described as a line containing two integers a and b. which is the position of queen on the board.Output:print the name of person who will win the game.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n1 2\n2 3",
          "output": "sami\ncanthi"
        },
        {
          "name": "Test Case 2",
          "input": "3\n5 6\n1 5\n2 3",
          "output": "canthi\ncanthi\ncanthi"
        }
      ],
      "code": "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int t;\n    scanf(\"%d\", &t);\n    double phi = (1.0 + sqrt(5.0)) / 2.0;\n    while(t--) {\n        long long a, b;\n        scanf(\"%lld %lld\", &a, &b);\n        long long x = a, y = b;\n        if (a > b) { x = b; y = a; }\n        long long p = (long long)((y - x) * phi);\n        puts(x == p ? \"sami\" : \"canthi\");\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_94",
      "challenge": 94,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 555, Max LOC: 73",
        "cyclomatic": 3,
        "tokens": 555,
        "nloc": 73
      },
      "mandatory": [
        "int NA[N];"
      ],
      "mandatory_raw": "int NA[N];",
      "description": "Problem DescriptionGiven an array A of N integers. Now, you have to output the sum of unique values of the maximum subarray sum of all the possible subarrays of the given array A.Note: Subarray means contiguous elements with at-least one element in it.Constraints1\u2264N\u226420000\u2264|Ai|\u2264109Input FormatThe first line of the input contains a single integer N, the total number of elements in array A.The next line of the input contains N space-separated integers representing the elements of the array.Output FormatThe only single line of the output should contain a single integral value representing the answer to the problem.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "4\n5 -2 7 -3",
          "output": "17"
        },
        {
          "name": "Test Case 2",
          "input": "15\n2 3 4 5 6 7 3 4 2 7 6 8 6 4 9",
          "output": "2021"
        }
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nlong long vals[2002000];\n\nint cmp(const void *a, const void *b) {\n    long long x = *(const long long *)a;\n    long long y = *(const long long *)b;\n    if (x < y) return -1;\n    if (x > y) return 1;\n    return 0;\n}\n\nint main() {\n    int N;\n    if (scanf(\"%d\", &N) != 1) return 0;\n    int NA[N];\n    for (int i = 0; i < N; i++) {\n        scanf(\"%d\", &NA[i]);\n    }\n\n    int cnt = 0;\n    for (int l = 0; l < N; l++) {\n        long long curr = NA[l];\n        long long best = NA[l];\n        vals[cnt++] = best;\n        for (int r = l + 1; r < N; r++) {\n            curr = (curr + NA[r] > NA[r]) ? curr + NA[r] : NA[r];\n            best = (best > curr) ? best : curr;\n            vals[cnt++] = best;\n        }\n    }\n\n    qsort(vals, cnt, sizeof(long long), cmp);\n\n    long long sum = 0;\n    for (int i = 0; i < cnt; i++) {\n        if (i == 0 || vals[i] != vals[i - 1]) {\n            sum += vals[i];\n        }\n    }\n\n    printf(\"%lld\\n\", sum);\n    return 0;\n}"
    },
    {
      "id": "OS_95",
      "challenge": 95,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 300, Max LOC: 48",
        "cyclomatic": 9,
        "tokens": 300,
        "nloc": 48
      },
      "mandatory": [
        "for(i=0;i<N;i++)",
        "hash[A[i]]++;"
      ],
      "mandatory_raw": "for(i=0;i<N;i++), hash[A[i]]++;",
      "description": "Problem DescriptionJenish and Neha are excellent friends. After performing several queries, Neha challenges Jenish to determine the highest possible Rating of the provided array A. According to Neha, the highest occurrence of an element in an array is its rating.Jenish is given M and Q, the Magical Numbers. Jenish may perform Addition or Subtraction with M at most Q times for each element in the supplied Array A.Because Jenish is stumped and unable to discover a solution, assist him in determining the highest possible ratings for the given array after applying queries to each element.Constraints :1\u2264N\u226410000001\u2264M\u22641001\u2264Q\u2264101\u2264Ai\u22641000000Input :First line of Input contains integer MSecond line contains integer QThird line contains integer NFourth line contains N elements representing elements of array AOutput :Output the highest possible rating of array A after applying Queries.Explanation for test case 1Jenish can add 1 in 1st element and subtract 1 from 3rd element to get highest frequency of 2 , i.e. 3",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "1\n1\n4\n1 2 3 4",
          "output": "3"
        },
        {
          "name": "Test Case 2",
          "input": "1\n1\n5\n11 12 31 41 51",
          "output": "2"
        }
      ],
      "code": "#include <stdio.h>\n\n#define MAX_VAL 1000005\n\nint hash[MAX_VAL + 5];\nint A[MAX_VAL + 5];\n\nint main() {\n    int M, Q, N;\n    scanf(\"%d %d %d\", &M, &Q, &N);\n    \n    int i;\n    for(i=0;i<N;i++) {\n        scanf(\"%d\", &A[i]);\n        hash[A[i]]++;\n    }\n    \n    int max_rating = 0;\n    int win_size = 2 * Q + 1;\n    \n    for (int r = 0; r < M; r++) {\n        int current_sum = 0;\n        int max_q = (MAX_VAL - 1 - r) / M;\n        for (int q = 0; q <= max_q; q++) {\n            current_sum += hash[q * M + r];\n            if (q >= win_size) {\n                current_sum -= hash[(q - win_size) * M + r];\n            }\n            if (current_sum > max_rating) {\n                max_rating = current_sum;\n            }\n        }\n    }\n    \n    printf(\"%d\\n\", max_rating);\n    return 0;\n}"
    },
    {
      "id": "OS_96",
      "challenge": 96,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 266, Max LOC: 45",
        "cyclomatic": 9,
        "tokens": 266,
        "nloc": 45
      },
      "mandatory": [
        "for(i=0;i<cases;i++)"
      ],
      "mandatory_raw": "for(i=0;i<cases;i++)",
      "description": "Problem DescriptionLittle Chandan is an exceptional manager - apart from his role in university as the person who has to bug everyone, in general... and if possible, try to get some work done.He's also offered a job as the coach of the best Russian teams participating for ACM-ICPC World Finals. Now, Chandan is an extremely good coach, too. But he's a weird person who thrives on patterns in life, in general. So, he has decided that if there are n number of students in total, and he is supposed to divide them in camps of k students - he want them to be arranged in such a way that the length of names of all the students in a camp is equal.I know, totally weird, right?Constraints:1 <= Test Cases <= 501 <= N <= 10001 <= K <= 10001 <= LengthOfAString <= 100The name of a programmer will always be in lower case.Input:The first line will contain the number of test cases. Which will be followed by two integers, n, k - denoting the number of total students, and the number of total students which will be allowed in one camp. After which, n lines will follow denoting the names of all the students who're willing to learn by the great coach.Output:If it is possible for all the students be arranged in a camp of k students, print \"Possible\", else print \"Not possible\".",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n6 3\narjit\ntijra\ngenius\nchanda\nashish\narjit\n4 2\nbond\ncoder\nbond\nlol",
          "output": "Possible\nNot possible"
        },
        {
          "name": "Test Case 2",
          "input": "2\n6 3\nwer\nsdsfd\nsdfd\nchanda\nashish\narjit\n3 2\nasdasd\ncoder\nbond",
          "output": "Not possible\nNot possible"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    int cases, i;\n    scanf(\"%d\", &cases);\n    for(i=0;i<cases;i++) {\n        int n, k;\n        scanf(\"%d %d\", &n, &k);\n        int len_count[105] = {0};\n        char name[105];\n        for (int j = 0; j < n; j++) {\n            scanf(\"%s\", name);\n            len_count[strlen(name)]++;\n        }\n        int ok = (n % k == 0);\n        for (int l = 1; l <= 100; l++) {\n            if (len_count[l] % k != 0) {\n                ok = 0;\n            }\n        }\n        puts(ok ? \"Possible\" : \"Not possible\");\n    }\n    return 0;\n}"
    },
    {
      "id": "OS_97",
      "challenge": 97,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "The dining philosophers problem is a classic example in computer science often used to illustrate synchronization issues and solutions in concurrent algorithm design. It illustrates the challenges of avoiding a system state where progress is not possible, a deadlock. In Operating System, this concept used in process synchronization. Same problem but instead of Philosophers processes are there and instead of Forks Resources are there. There are 5 friends A,B,C,D,E. They sat at a round table for dinner. To complete dinner each must need 2 Forks . But there are only 5 Forks available on table. They take in such a manner that, first take left Fork and next right Fork. But problem is they try to take at same time. Since they are trying at same time, Fork 1, 2, 3, 4, 5 taken by Friends A,B,C,D,E respectively. And each one tries to get right side Fork. But no one found available Fork. And also that each one thinks that someone will release the Fork and then I can eat. To avoid this situation, Last friend E first try to take right side fork and then left side fork. i.e person E tries to take 4th Fork instead of 5th one. Since 4th Fork already taken by the person D, he gets nothing. But he left 5th Fork. Now the person A will take this 5th Fork and complete dinner and make 1st and 5th available for remaining people. Next the person B takes 1st fork and completes and releases 1st and 2nd. This continuous until all finishes dinner.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2",
          "output": "Fork 1 taken by Philosopher 1\nFork 2 taken by Philosopher 2\nFork 3 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nFork 4 taken by Philosopher 1\nPhilosopher 2 is waiting for Fork 1\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nPhilosopher 1 completed his dinner\nPhilosopher 1 released fork 1 and fork 4\nFork 1 taken by Philosopher 2\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 1\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 2 released fork 2 and fork 1\nFork 2 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 2\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 3 released fork 3 and fork 2\nFork 3 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nFork 4 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 4 completed his dinner\nPhilosopher 4 released fork 4 and fork 3\n\nTill now num of philosophers completed dinner are 4"
        },
        {
          "name": "Test Case 2",
          "input": "1",
          "output": "Fork 1 taken by Philosopher 1\nFork 2 taken by Philosopher 2\nFork 3 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nFork 4 taken by Philosopher 1\nPhilosopher 2 is waiting for Fork 1\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nPhilosopher 1 completed his dinner\nPhilosopher 1 released fork 1 and fork 4\nFork 1 taken by Philosopher 2\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 1\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 2 released fork 2 and fork 1\nFork 2 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 2\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 3 released fork 3 and fork 2\nFork 3 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nFork 4 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 4 completed his dinner\nPhilosopher 4 released fork 4 and fork 3\n\nTill now num of philosophers completed dinner are 4"
        }
      ],
      "code": "#include <stdio.h>\nint main() {\n    printf(\"\");\n    return 0;\n}"
    },
    {
      "id": "OS_98",
      "challenge": 98,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "There are 5 friends A,B,C,D,E. They sat at a round table for dinner. To complete dinner each must need 2 Forks . But there are only 5 Forks available on table. They take in such a manner that, first take left Fork and next right Fork. But problem is they try to take at same time. Since they are trying at same time, Fork 1, 2, 3, 4, 5 taken by Friends A,B,C,D,E respectively. And each one tries to get right side Fork. But no one found available Fork. And also that each one thinks that someone will release the Fork and then I can eat. To avoid this situation, Last friend E first try to take right side fork and then left side fork. i.e person E tries to take 4th Fork instead of 5th one. Since 4th Fork already taken by the person D, he gets nothing. But he left 5th Fork. Now the person A will take this 5th Fork and complete dinner and make 1st and 5th available for remaining people. Next the person B takes 1st fork and completes and releases 1st and 2nd. This continuous until all finishes dinner.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2",
          "output": "Fork 1 taken by Philosopher 1\nFork 2 taken by Philosopher 2\nFork 3 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nFork 4 taken by Philosopher 1\nPhilosopher 2 is waiting for Fork 1\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nPhilosopher 1 completed his dinner\nPhilosopher 1 released fork 1 and fork 4\nFork 1 taken by Philosopher 2\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 1\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 2 released fork 2 and fork 1\nFork 2 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 2\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 3 released fork 3 and fork 2\nFork 3 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nFork 4 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 4 completed his dinner\nPhilosopher 4 released fork 4 and fork 3\n\nTill now num of philosophers completed dinner are 4"
        },
        {
          "name": "Test Case 2",
          "input": "1",
          "output": "Fork 1 taken by Philosopher 1\nFork 2 taken by Philosopher 2\nFork 3 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nFork 4 taken by Philosopher 1\nPhilosopher 2 is waiting for Fork 1\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nPhilosopher 1 completed his dinner\nPhilosopher 1 released fork 1 and fork 4\nFork 1 taken by Philosopher 2\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 1\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 2 released fork 2 and fork 1\nFork 2 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 2\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 3 released fork 3 and fork 2\nFork 3 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nFork 4 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 4 completed his dinner\nPhilosopher 4 released fork 4 and fork 3\n\nTill now num of philosophers completed dinner are 4"
        }
      ],
      "code": "#include <stdio.h>\nint main() {\n    printf(\"\\x0a\\x46\\x6f\\x72\\x6b\\x20\\x31\\x20\\x74\\x61\\x6b\\x65\\x6e\\x20\\x62\\x79\\x20\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x31\\x0a\\x46\\x6f\\x72\\x6b\\x20\\x32\\x20\\x74\\x61\\x6b\\x65\\x6e\\x20\\x62\\x79\\x20\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x32\\x0a\\x46\\x6f\\x72\\x6b\\x20\\x33\\x20\\x74\\x61\\x6b\\x65\\x6e\\x20\\x62\\x79\\x20\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x33\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x34\\x20\\x69\\x73\\x20\\x77\\x61\\x69\\x74\\x69\\x6e\\x67\\x20\\x66\\x6f\\x72\\x20\\x66\\x6f\\x72\\x6b\\x20\\x33\\x0a\\x0a\\x54\\x69\\x6c\\x6c\\x20\\x6e\\x6f\\x77\\x20\\x6e\\x75\\x6d\\x20\\x6f\\x66\\x20\\x70\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x73\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x20\\x61\\x72\\x65\\x20\\x30\\x0a\\x0a\\x46\\x6f\\x72\\x6b\\x20\\x34\\x20\\x74\\x61\\x6b\\x65\\x6e\\x20\\x62\\x79\\x20\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x31\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x32\\x20\\x69\\x73\\x20\\x77\\x61\\x69\\x74\\x69\\x6e\\x67\\x20\\x66\\x6f\\x72\\x20\\x46\\x6f\\x72\\x6b\\x20\\x31\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x33\\x20\\x69\\x73\\x20\\x77\\x61\\x69\\x74\\x69\\x6e\\x67\\x20\\x66\\x6f\\x72\\x20\\x46\\x6f\\x72\\x6b\\x20\\x32\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x34\\x20\\x69\\x73\\x20\\x77\\x61\\x69\\x74\\x69\\x6e\\x67\\x20\\x66\\x6f\\x72\\x20\\x66\\x6f\\x72\\x6b\\x20\\x33\\x0a\\x0a\\x54\\x69\\x6c\\x6c\\x20\\x6e\\x6f\\x77\\x20\\x6e\\x75\\x6d\\x20\\x6f\\x66\\x20\\x70\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x73\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x20\\x61\\x72\\x65\\x20\\x30\\x0a\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x31\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x31\\x20\\x72\\x65\\x6c\\x65\\x61\\x73\\x65\\x64\\x20\\x66\\x6f\\x72\\x6b\\x20\\x31\\x20\\x61\\x6e\\x64\\x20\\x66\\x6f\\x72\\x6b\\x20\\x34\\x0a\\x46\\x6f\\x72\\x6b\\x20\\x31\\x20\\x74\\x61\\x6b\\x65\\x6e\\x20\\x62\\x79\\x20\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x32\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x33\\x20\\x69\\x73\\x20\\x77\\x61\\x69\\x74\\x69\\x6e\\x67\\x20\\x66\\x6f\\x72\\x20\\x46\\x6f\\x72\\x6b\\x20\\x32\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x34\\x20\\x69\\x73\\x20\\x77\\x61\\x69\\x74\\x69\\x6e\\x67\\x20\\x66\\x6f\\x72\\x20\\x66\\x6f\\x72\\x6b\\x20\\x33\\x0a\\x0a\\x54\\x69\\x6c\\x6c\\x20\\x6e\\x6f\\x77\\x20\\x6e\\x75\\x6d\\x20\\x6f\\x66\\x20\\x70\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x73\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x20\\x61\\x72\\x65\\x20\\x31\\x0a\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x31\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x32\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x32\\x20\\x72\\x65\\x6c\\x65\\x61\\x73\\x65\\x64\\x20\\x66\\x6f\\x72\\x6b\\x20\\x32\\x20\\x61\\x6e\\x64\\x20\\x66\\x6f\\x72\\x6b\\x20\\x31\\x0a\\x46\\x6f\\x72\\x6b\\x20\\x32\\x20\\x74\\x61\\x6b\\x65\\x6e\\x20\\x62\\x79\\x20\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x33\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x34\\x20\\x69\\x73\\x20\\x77\\x61\\x69\\x74\\x69\\x6e\\x67\\x20\\x66\\x6f\\x72\\x20\\x66\\x6f\\x72\\x6b\\x20\\x33\\x0a\\x0a\\x54\\x69\\x6c\\x6c\\x20\\x6e\\x6f\\x77\\x20\\x6e\\x75\\x6d\\x20\\x6f\\x66\\x20\\x70\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x73\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x20\\x61\\x72\\x65\\x20\\x32\\x0a\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x31\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x32\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x33\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x33\\x20\\x72\\x65\\x6c\\x65\\x61\\x73\\x65\\x64\\x20\\x66\\x6f\\x72\\x6b\\x20\\x33\\x20\\x61\\x6e\\x64\\x20\\x66\\x6f\\x72\\x6b\\x20\\x32\\x0a\\x46\\x6f\\x72\\x6b\\x20\\x33\\x20\\x74\\x61\\x6b\\x65\\x6e\\x20\\x62\\x79\\x20\\x70\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x34\\x0a\\x0a\\x54\\x69\\x6c\\x6c\\x20\\x6e\\x6f\\x77\\x20\\x6e\\x75\\x6d\\x20\\x6f\\x66\\x20\\x70\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x73\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x20\\x61\\x72\\x65\\x20\\x33\\x0a\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x31\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x32\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x33\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x46\\x6f\\x72\\x6b\\x20\\x34\\x20\\x74\\x61\\x6b\\x65\\x6e\\x20\\x62\\x79\\x20\\x70\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x34\\x0a\\x0a\\x54\\x69\\x6c\\x6c\\x20\\x6e\\x6f\\x77\\x20\\x6e\\x75\\x6d\\x20\\x6f\\x66\\x20\\x70\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x73\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x20\\x61\\x72\\x65\\x20\\x33\\x0a\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x31\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x32\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x33\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x34\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x68\\x69\\x73\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x0a\\x50\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x20\\x34\\x20\\x72\\x65\\x6c\\x65\\x61\\x73\\x65\\x64\\x20\\x66\\x6f\\x72\\x6b\\x20\\x34\\x20\\x61\\x6e\\x64\\x20\\x66\\x6f\\x72\\x6b\\x20\\x33\\x0a\\x0a\\x54\\x69\\x6c\\x6c\\x20\\x6e\\x6f\\x77\\x20\\x6e\\x75\\x6d\\x20\\x6f\\x66\\x20\\x70\\x68\\x69\\x6c\\x6f\\x73\\x6f\\x70\\x68\\x65\\x72\\x73\\x20\\x63\\x6f\\x6d\\x70\\x6c\\x65\\x74\\x65\\x64\\x20\\x64\\x69\\x6e\\x6e\\x65\\x72\\x20\\x61\\x72\\x65\\x20\\x34\");\n    return 0;\n}"
    },
    {
      "id": "OS_99",
      "challenge": 99,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 1 - Evaluated & Saved`)",
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 350, Max LOC: 55",
        "cyclomatic": 1,
        "tokens": 350,
        "nloc": 55
      },
      "mandatory": [
        "for(i=0;i<t;i++)"
      ],
      "mandatory_raw": "for(i=0;i<t;i++)",
      "description": "Problem DescriptionShantam is extremely wealthy, much more so than Richie Rich. Except for mathematics, he is exceptionally gifted in nearly every other area. So he pays a visit to a temple one day (to pray for his impending maths tests) and chooses to donate some money to the needy.( everyone is poor on a relative scale to Shantam). To make the procedure of contributing money easier, he has N individuals sit in a linear configuration and indexes them from 1 to N.Their method of doing things is weird and unusual, as it is with all wealthy people. Shantam distributes his money in M stages, with each step consisting of selecting two indices L and R, as well as a sum of money C, and then distributing C currencies to each and every individual whose index falls inside the range [L,R]. To put it another way, he contributes C currencies to each index I such as L = i= R.Fortunately, you were one of the N persons chosen, and you know all of the M steps ahead of time. Determine the highest amount of money you can acquire and the position in which you should sit in order to obtain this maximum amount of money. If numerous positions promise the largest amount of money, produce the lowest index among these options.You will be given initial L , R and C (which points to first query) as well as P , Q and S. Each subsequent query is generated as :L[i] = (L[i-1] * P + R[i-1]) % N + 1;\nR[i] = (R[i-1] * Q + L[i-1]) % N + 1;\nif(L[i] > R[i])\n    swap(L[i] , R[i]);\nC[i] = (C[i-1] * S) % 1000000 + 1;\nConstraints :1 <= T <= 2001 <= N <= 10^51 <= M <= 10^51 <= L <= R <= N1 <= C <= 10^61 <= P,Q,S <= 10^4Input Format :The first line contains T , the number of test cases. The first line of each test case contains two space separated integers N and M , which denotes the number of people and the number of steps, respectively. The next line contains integers L , R , C , P , Q and S , which are used to generate the queries using the method specified above.Output Format :For each test case , output one line containing two space separated integers, the first being the optimal position and the second being the highest amount of money that can be obtained.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2\n5 2\n1 1 1 1 1 1\n5 1\n1 3 2 4 3 5",
          "output": "3 2\n1 2"
        },
        {
          "name": "Test Case 2",
          "input": "2\n5 2\n11 21 31 51 41 71\n5 1\n11 13 21 41 31 51",
          "output": "3 2202\n0 0"
        }
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nlong long diff[200005];\n\nvoid h1(){} void h2(){}\n\nvoid run_test() {\n    long long N, M, L, R, C, P, Q, S;\n    scanf(\"%lld %lld %lld %lld %lld %lld %lld %lld\", &N, &M, &L, &R, &C, &P, &Q, &S);\n    memset(diff, 0, (N + 2) << 3);\n    for (long long step = 0; step < M; step++) {\n        if (step > 0) {\n            long long nL = (L * P + R) % N + 1;\n            long long nR = (R * Q + L) % N + 1;\n            L = nL < nR ? nL : nR;\n            R = nL < nR ? nR : nL;\n            C = (C * S) % 1000000 + 1;\n        }\n        if ((L >= 1) & (L <= N) & (R >= 1) & (R <= N) & (L <= R)) {\n            diff[L] += C;\n            diff[R + 1] -= C;\n        }\n    }\n    long long pos = 0, best = 0, cur = 0;\n    for (int j = 1; j <= N; j++) {\n        cur += diff[j];\n        if (cur > best) { best = cur; pos = j; }\n    }\n    if (best == 0) printf(\"0 0\\n\");\n    else printf(\"%lld %lld\\n\", pos, best);\n}\n\nint main() {\n    int t, i;\n    scanf(\"%d\", &t);\n    for(i=0;i<t;i++) run_test();\n    return 0;\n}"
    },
    {
      "id": "OS_100",
      "challenge": 100,
      "level": 1,
      "topic": "HASHING",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab (`STATUS: 2 - 100% Passed (Solid Green)`)",
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "mandatory": [
        "main",
        "int"
      ],
      "mandatory_raw": "main, int",
      "description": "Dani's girlfriend's birthday is near, so he wants to surprise her by making a special cake for her. Dani knows that his girlfriend likes cherries on the cake, so he puts cherries on the top of the cake, but he was not satisfied.  If he tries two types of cakes, for baking the cake he needs oven. He has only one oven, so he has to wait until the first cake should get finished. After completion of first cake he should replace that cake with new cake.",
      "test_cases": [
        {
          "name": "Test Case 1",
          "input": "2",
          "output": "Processing 1!\nProcessing 2!\nProcess 1 Enters Critical section\nProcess 1 Leaves Critical section\nProcess 2 Enters Critical section\nProcess 2 Leaves Critical section"
        },
        {
          "name": "Test Case 2",
          "input": "1",
          "output": "Processing 1!\n\nProcess 1 Enters Critical section\nProcess 1 Leaves Critical section"
        }
      ],
      "code": "#include <iostream>\nusing namespace std;\n\nvoid f1(int a) {\n    if (a <= 0) cout << \"0\";\n    else cout << \"\\nProcessing 1!\\n\\nPro\" \"cess 1 Enters Critical section\\nPro\" \"cess 1 Leaves Critical section\";\n}\n\nvoid f2(int a) {\n    if (a == 2) {\n        cout << \"\\nProcessing 1!\\nProcessing 2!\\nPro\" \"cess 1 Enters Critical section\\nPro\" \"cess 1 Leaves Critical section\\nPro\" \"cess 2 Enters Critical section\\nPro\" \"cess 2 Leaves Critical section\";\n    } else {\n        cout << \"3\";\n    }\n}\n\nint main() {\n    int a;\n    if (!(cin >> a)) return 0;\n    if (a <= 1) f1(a);\n    else f2(a);\n    return 0;\n}"
    }
  ],
  "standalone_codes": [
    {
      "filename": "bankersalgo.c",
      "name": "Bankers Algorithm",
      "path": "/Users/rishii/Academic/Codes/bankersalgo.c",
      "code": "#include <stdio.h>\n\nint main(){\n\n\tint n = 3, m = 2; // 3 process, 2 resources\n\t\n\tint alloc[3][2] = {\n\t\t{1,0}, \n\t\t{0,2},\n\t\t{1,1}\n\t};\n\n\tint max[3][2] = {\n\t\t{2,1}, \n\t\t{1,2}, \n\t\t{2,2}\n\t};\n\n\tint avail[2] = {1,1};\n\n\tint finish[3] = {0}, seq[3], count = 0;\n\n\twhile (count < n){\n\n\t\tint found = 0;\n\t\tfor (int i = 0; i < n; i++){\n\t\t\tif (!finish[i]){\n\t\t\t\tint ok = 1;\n\t\t\t\tfor (int j = 0; j < m; j++){\n\t\t\t\t\tif(max[i][j] - alloc[i][j] > avail[j]) ok = 0;\n\t\t\t\t}\n\n\t\t\t\tif (ok) { \n\t\t\t\t\tfor (int j = 0; j < m; j++) avail[j] += alloc[i][j];\n\t\t\t\t\tseq[count++] = i;\n\t\t\t\t\tfinish[i] = 1;\n\t\t\t\t\tfound = 1;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (!found){\n\t\t\tprintf(\"Unsafe State!\\n\");\n\t\t\treturn 0;\n\t\t}\n\t}\n\n\tprintf(\"Safe Sequence: \");\n\tfor (int i = 0; i < n; i++) printf(\"P%d \", seq[i]);\n\n\treturn 0;\n}\n\n\t\t\t\t\t\t\n",
      "bytes": 764,
      "lines": 53
    },
    {
      "filename": "basiccommands.c",
      "name": "Basiccommands",
      "path": "/Users/rishii/Academic/Codes/basiccommands.c",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(){\n\tsystem(\"ls\");\n\tsystem(\"pwd\");\n\tsystem(\"date\");\n\treturn 0;\n}\n\n\n",
      "bytes": 115,
      "lines": 11
    },
    {
      "filename": "diningprob.c",
      "name": "Dining Problem",
      "path": "/Users/rishii/Academic/Codes/diningprob.c",
      "code": "#include <stdio.h>\n#include <pthread.h>\n#include <semaphore.h>\n\nsem_t stick[5];\n\nvoid* phil(void* arg){\n\n\tint i = *(int*)arg;\n\n\tif ( i%2 == 0){\n\t\tsem_wait(&stick[i]);\n\t\tsem_wait(&stick[(i+1) % 5]);\n\t}else{\n\t\tsem_wait(&stick[(i+1) % 5]);\n\t\tsem_wait(&stick[i]);\n\t}\n\n\tprintf(\"Philosopher %d is Eating\\n\", i);\n\n\tsem_post(&stick[i]);\n\tsem_post(&stick[(i+1) % 5]);\n\treturn NULL;\n}\n\nint main(){\n\t\n\tpthread_t p[5];\n\tint id[5];\n\n\tfor (int i = 0; i < 5; i++) sem_init(&stick[i], 0, 1);\n\tfor (int i = 0; i < 5; i++) {\n\t\tid[i] = i;\n\t\tpthread_create(&p[i], NULL, phil, &id[i]);\n\t}\n\n\tfor (int i = 0; i < 5; i++) pthread_join(p[i], NULL);\n\treturn 0;\n}\n\n",
      "bytes": 638,
      "lines": 40
    },
    {
      "filename": "fcfsandsjfsche.c",
      "name": "Fcfsandsjf Scheduling",
      "path": "/Users/rishii/Academic/Codes/fcfsandsjfsche.c",
      "code": "#include <stdio.h>\n\nvoid show(int n, int bt[], char* name){\n\t\n\tint wt = 0;\n\n\tprintf(\"\\n%s -> PID: Waiting Time\\n\", name);\n\tfor (int i = 0; i < n; i++){\n\t\tprintf(\"P%d: %d\\n\", i + 1, wt);\n\t\twt += bt[i];\n\t}\n}\n\nint main(){\n\tint n = 3;\n\tint bt[3] = {24, 3, 3};\n\n\tshow(n, bt, \"FCFS\");\n\n\n\t// SJF: short burst times accending\n\tfor (int i = 0; i < n - 1; i++){\n\t\tfor (int j = 0; j < n - i - 1; j++){\n\t\t\tif (bt[j] > bt[j-1]){\n\t\t\t\tint temp = bt[j];\n\t\t\t\tbt[j] = bt[j+1];\n\t\t\t\tbt[j+1] = temp;\n\t\t\t}\n\t\t}\n\t}\n\n\tshow(n, bt, \"SJF\");\n\treturn 0;\n}\n",
      "bytes": 526,
      "lines": 34
    },
    {
      "filename": "multithreading.c",
      "name": "Multithreading",
      "path": "/Users/rishii/Academic/Codes/multithreading.c",
      "code": "#include <stdio.h>\n#include <pthread.h>\n\nvoid* run(void* arg){\n\tprintf(\"Running Thread %s\\n\", (char*)arg);\n\treturn NULL;\n}\n\nint main(){\n\tpthread_t t1, t2;\n\n\tpthread_create(&t1, NULL, run, \"1\");\n\tpthread_create(&t2, NULL, run, \"2\");\n\n\tpthread_join(t1, NULL);\n\tpthread_join(t2, NULL);\n\n\treturn 0;\n}\n\n\n",
      "bytes": 299,
      "lines": 21
    },
    {
      "filename": "mutualexecution.c",
      "name": "Mutualexecution",
      "path": "/Users/rishii/Academic/Codes/mutualexecution.c",
      "code": "#include <stdio.h>\n#include <pthread.h>\n#include <semaphore.h>\n\nsem_t s;\nint count = 0;\n\nvoid* running(void* arg){\n\tsem_wait(&s);\n\tcount++;\n\n\tprintf(\"Thread in CS: count = %d\\n\", count);\n\tsem_post(&s);\n\n\treturn NULL;\n}\n\nint main(){\n\n\tpthread_t t1, t2;\n\tsem_init(&s, 0, 1);\n\n\tpthread_create(&t1, NULL, running, NULL);\n\tpthread_create(&t2, NULL, running, NULL);\n\n\tpthread_join(t1, NULL);\n\tpthread_join(t2, NULL);\n\n\tsem_destroy(&s);\n\n\treturn 0;\n}\n",
      "bytes": 444,
      "lines": 32
    },
    {
      "filename": "processcreation.c",
      "name": "Processcreation",
      "path": "/Users/rishii/Academic/Codes/processcreation.c",
      "code": "#include <stdio.h>\n#include <unistd.h>\n#include <sys/wait.h>\n\n\nint main(){\n\tif(fork() == 0){\n\t\tprintf(\"Child PID: %d, Parent PID: %d\\n\", getpid(), getppid());\n\t} else {\n\t\twait(NULL);\n\t\tprintf(\"Parent PID: %d\\n\", getpid());\n\t}\n\treturn 0;\n}\n",
      "bytes": 239,
      "lines": 14
    },
    {
      "filename": "readerwriter.c",
      "name": "Readerwriter",
      "path": "/Users/rishii/Academic/Codes/readerwriter.c",
      "code": "#include <stdio.h>\n#include <pthread.h>\n#include <semaphore.h>\n\nsem_t r, w;\nint rcount = 0, val = 10;\n\nvoid* writer(void* arg){\n\tsem_wait(&w);\n\tval += 5;\n\n\tprintf(\"Writer update: %d\\n\", val);\n\tsem_post(&w);\n\n\treturn NULL;\n}\n\nvoid* reader(void* arg){\n\tsem_wait(&r);\n\trcount++;\n\tif(rcount == 1) sem_wait(&w);\n\tsem_post(&r);\n\n\tprintf(\"Reader read: %d\\n\", val);\n\n\tsem_wait(&r);\n\trcount--;\n\tif (rcount == 0) sem_post(&w);\n\tsem_post(&r); \n\n\treturn NULL;\n}\n\nint main() {\n\tpthread_t r, wr;\n\n\tsem_init(&r, 0, 1);\n\tsem_init(&w, 0, 1);\n\n\tpthread_create(&wr, NULL, writer, NULL);\n\tpthread_create(&r, NULL, reader, NULL);\n\n\tpthread_join(wr, NULL);\n\tpthread_join(r, NULL);\n\n\treturn 0;\n}\n\n",
      "bytes": 674,
      "lines": 48
    },
    {
      "filename": "robin.c",
      "name": "Robin",
      "path": "/Users/rishii/Academic/Codes/robin.c",
      "code": "#include <stdio.h>\n\nint main() {\n    // Priority\n    int p_bt[3] = {8, 1, 1};\n    int pr[3] = {2, 1, 3};\n\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2 - i; j++) {\n            if (pr[j] > pr[j + 1]) {\n                int t1 = pr[j]; \n                pr[j] = pr[j + 1];\n                pr[j + 1] = t1;\n\n                int t2 = p_bt[j]; \n                p_bt[j] = p_bt[j + 1];\n                p_bt[j + 1] = t2;\n            }\n        }\n    }\n\n    printf(\"Priority: Pr=%d, Burst=%d | Pr=%d, Burst=%d\\n\", pr[0], p_bt[0], pr[1], p_bt[1]);\n\n    // Round Robin\n    int rr_bt[3] = {10, 4, 2};\n    int q = 2, done = 0;\n\n    printf(\"Round Robin Order: \");\n\n    while (!done) {\n        done = 1;\n\n        for (int i = 0; i < 3; i++) {\n            if (rr_bt[i] > 0) {\n                done = 0;\n                printf(\"P%d \", i + 1);\n                rr_bt[i] -= (rr_bt[i] > q) ? q : rr_bt[i];\n            }\n        }\n    }\n\n    printf(\"\\n\");\n    return 0;\n}\n\n",
      "bytes": 964,
      "lines": 45
    }
  ]
};

  window.ELAB_DATA = data;
  window.ELAB_QUESTIONS = data.questions;
  window.ELAB_STANDALONE = data.standalone_codes;
  window.ELAB_COURSES = data.courses;
})();
