+++
Title = "Avoid accidentally calling commands in the terminal"
Dates = 2022-08-05
Draft = true
+++

{{< noticeAutomaticTranslation it >}}



While working in the terminal, perhaps developing programs, I often accidentally invoke a command that I shouldn't.

This happens to me because I work like this: I edit something in the window of my favorite text editor, then I go to the terminal window, and I press `[Up Arrow]` (which recalls the last command executed) and `[Enter] ` to run it.

What I've noticed is that sometimes, in my haste, I happen to press `[Up Arrow]` one too many times, which recalls the penultimate command executed, or the one even before it.  
Since I practically do these sequences of actions almost automatically, without reading to make sure that the selected command is actually what I want before pressing `[Enter]` (because that's all I expect), it happens several times that I execute a command which I shouldn't: often, it's the command to make a commit [Git](https://en.wikipedia.org/wiki/Git){[:MdTgtBlank:]} of my changes to the workbook, and immediately upload them in the cloud.

Now, this is not good, because it means that in the Git history I will have certain "wrong" places: with descriptions with duplicate text, and the code in an unsuitable, non-working state, because I was in the middle of testing some changes.  
Having such a messy Git history definitely affects its quality, because it's more difficult to find a specific past point in the code in the future, which nullifies one of Git's useful features - and in general it's something I don't like, it annoys me , see dirty history.

## The script

To solve the problem, I invented this little script (tested with _sh_ and _bash_), the idea is to start the "dangerous" commands through it in situations in which I have to make those moves with the terminal (but, if desired, I it can be set as an alias to implicitly always call it for a given command).

<pre class="CodeScroll"><code>
Profile="~/.bashrc"

a=${RANDOM: -1}
b=${RANDOM: -1}

echo "[!] Confirm your command"
echo "[?] $a + $b = ?"
read Input

if [ "$Input" -eq "$((a+b))" ] 2>/dev/null
then
	$SHELL -c "source "$Profile"; $@"
else
	echo "[!] Wrong input"
fi
</code></pre>

## How to use it

I saved the code inside a `function comconf() { }` function in my bash profile file.  
Now, when I need to run a marso command, I just do `comconf '<command>'`; the program will ask me to write the result of a randomly generated simple arithmetic operation, and only if what I write is right (so, only if I'm paying attention) my command will be executed.

<pre class="CodeScroll"><code>
$ # Example
$ comconf 'echo "Try"; echo "Testing"'
[!] Confirm your command
[?] 1 + 3 = ?
4
Trial
Test
$
</code></pre>

---

The script has some strange aspects, for example the fact that it doesn't work if run directly from the current shell (which is why it runs the desired command in another shell process, with the `-c` argument). For this reason, I also have to explicitly load my profile file into the new shell, because it is not done automatically and I have other aliases and functions that I need there.  
As if that wasn't enough, if I don't use single quotes to enclose the command I want to call, if this contains other quotes it's as if these are ignored, and therefore the final command can break.

Oh well, problem solved anyway. No more accidents due to one too many `[Up Arrow]`.