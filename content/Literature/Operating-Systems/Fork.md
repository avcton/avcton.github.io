---
title: Fork
date: 2023-09-12T11:10:16Z
lastmod: 2023-09-17T19:38:10Z
---

> When a process executes a fork command it’s whole heap, stack and data is duplicated into the child process, it created.

### Things to note

* The Program Counter value is also copied into the child process. Thus, the program execution is resumed from where the parent issued the fork command
* The fork command returns the parent  *(the process calling it)*  the child id and to child an ID of $0$

|        Origin        | Fork Command |
| :------------------: | :----------: |
|     Child Process    |   Return 0   |
|    Parent Process    |  Returns > 0 |
| Error While Creating |  Returns -1  |

## Examples - Multiple Forks

```c++
int main()
{
	fork();
	printf("Hello World!\n");
	return 0;
}

// Ouput
Hello World // by Child Process
Hello World // by Parent Process
```

```mindmap
- Parent
	- Child at 4
		- Hello World
	- Hello World
```

```c++
int main()
{
	fork();
	fork();
	printf("Hello World!\n");
	return 0;
}

// Ouput
Hello World // by Child 1.1 Process
Hello World // by Child 1 Process
Hello World // by Child 2 Process
Hello World // by Parent Process
```

```mindmap
- Parent
	- Child 1 at 3
		- Child 1.1 at 4
			- Hello World
		- Hello World
	- Child 2 at 4
		- Hello World
	- Hello World
```

```c++
int main()
{
	fork();
	fork();
	fork();
	printf("Hello World!\n");
	return 0;
}
```

```mindmap
- Parent
	- Child 1 at 1
		- Child 1.1 at 2
			- Child 1.1.1 at 3
				- Hello World
			- Hello World
		- Child 1.2 at 3
			- Hello World
		- Hello World
	- Child 2 at 2
		- Child 2.1 at 3
			- Hello World
		- Hello World
	- Child 3 at 3
		- Hello World
	- Hello World
```
