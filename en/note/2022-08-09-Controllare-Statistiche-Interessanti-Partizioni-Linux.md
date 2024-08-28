+++
Title = "Check interesting statistics and health of partitions on Linux"
Dates = 2022-08-09
Aliases = [
  "/Posts/Notes/Linux/2022-08-09-Check-Interesting-Statistics-Partitions-Linux.html",
]
+++

{{< noticeAutomaticTranslation it >}}



Storage memories, whatever their category, degrade with wear.  
Nothing can be done to avoid having to change them, sooner or later, after so many years. However, it is possible to keep an eye on their health status, in order to identify any problems.

When it comes to HDD or SSD disks, the [SMART] protocol (https://en.m.wikipedia.org/wiki/S.M.A.R.T.) comes to the rescue but, if, like me, you use computers in an unconventional way, then checking out classic records isn't enough.

## Linux goes further

Something quite secret, which not many people know (so it seemed to me, at least), is that on Linux it is possible to access the statistics of partitions with some filesystems.  
This, obviously, regardless of whether you are using a pen drive, an SD card, a hard disk, a floppy disk, or even an even less usual memory.

[Ext4](https://en.m.wikipedia.org/wiki/Ext4) provides some curious data - and so should its previous versions, Ext3 and Ext2, but I haven't checked.  
[F2FS](https://en.m.wikipedia.org/wiki/F2FS) I also saw, directly from my Android smartphone, exposes some interesting information... which I won't address in detail, because it's all very obscure and I don't know what they mean; and if I don't know what they mean, I'm not curious about them. It happens.  
As for other file systems, I haven't seen them at all. As homework, therefore, I give you to see if stuff like FAT32, exFAT, NTFS, or why not, BTRFS, exposes nice information, on Linux. And how?

## Get the data

On Linux, just browse the paths `/sys/fs/<filesystem>/<device>` to find some interesting files.  
You can print the contents of each one on the screen, alongside its name, with a simple command (executed in the relevant path): `for i in *; do echo "$i: $(cat $i)"; done`. Unless you have SELinux active - generally, by default it is only active on Android devices, not on desktop systems - you don't even need root permissions.  
I've put the most interesting ones in the table below, regarding the microSD of my server (a poor Nintendo Switch that runs Ubuntu non-stop), we'll return to it shortly.

| Name | Value |
| --- | --- |
| errors_count | 0 |
| first_error_time | 0 |
| last_error_time | 0 |
| lifetime_write_kbytes | 1959125105 |
| session_write_kbytes | 1423172308 |

Speaking specifically about Ext file systems: to even know a few more details, and accompanied by an understandable name, there would also be the command `tune2fs -l /dev/<device>`. However, this requires root permissions and, while it also reports some of the data that can be obtained by looking at the files from before, such as the number of lifetime_writes, these may be out of date, and relating only to the last mount of the partition. So, better pay attention to these.  
This time too, I'll bring back the interesting things.

| Name | Value |
| --- | --- |
| Filesystem created | Mon Jul 26 04:33:17 2021 |
| Last mount time | Fri Apr 15 11:55:30 2022 |
| Mount count | 16 |

## Things to watch for

Let's see, one by one, the usefulness of these values.  
It must be taken into account, however, in case you have not understood, that the values ​​speak of the state **of the partition, not of the storage media**. We can read them only because Ext4 saves them and, consequently, if the partition is formatted, then these values ​​​​are also reset. Furthermore, we consider that they could easily be altered by anyone with simple programs like tune2fs, so they are not to be taken as perfectly good if untrusted people have access to the memory.

• **Filesystem created**:
: The date the partition was created. Simple, but it can be useful for making health estimates, together with the next data.

• **Mount count**:
: The number of times the partition has been mounted. This can be interesting, if we are talking about memory that is not used permanently on a machine that is always on. If SMART did not exist, which gives this and even more data, this value would be very useful on HDDs.

• **Last mount time**:
: The date the partition was last mounted. We can use it in combination with other data, and that's it, I think.

• **session_write_kbytes**:
: The amount, in KB, of data written during the current session, i.e. since the last mount. Together with the value described just above, we can use this to know how much we have written in an active period of time (the current one).

• **lifetime_write_kbytes**:
: The amount, in KB, of data written since the partition was created. This information is particularly useful about microSDs, at least if you use them intensively like me. It's also on F2FS.

• **errors_count**:
: The number of errors, I believe both in reading and writing, that occurred over time. Frequent errors can be a symptom of unreliable or simply degraded memory.

• **first_error_time** and **last_error_time**:
: Dates of the first and last time an error was logged, respectively. It can be useful to understand if any errors occur continuously, and therefore it is necessary to investigate further; or, if a mistake happened once and then never again after a long time, and therefore you are fine like that.

## When is it necessary to check your health like this?

Well, OK, this information is interesting, but: when is it actually needed?

If the storage memory in use - which, if we have decided to resort to these measures instead of using SMART, is probably a microSD or a flash drive - starts to show signs of failure, perhaps slowing down over time, or corrupting data... It would be advisable at least check that everything is OK.

If the data isn't scary, but seems in order... then it's time to first do a complete formatting (including recreating the partition table from scratch), something made simple by programs like [GParted](https:// gparted.org), and then you see how the story continues.

In any case, just to be careful, it would be a good idea to always carry out routine checks, so as to be able to predict problems before something serious happens.

## Keep an eye on microSD?

Speaking of microSD cards: they are almost disposable, they have an extremely limited life, given that their memory chips are the waste from the manufacturing of other, higher-end memories, such as SSDs.

What is known about their actual durability, at least of those that came out well from the factory and not of sub-brands?  
You read all sorts of things online: there are those who say that every single memory cell can withstand 10,000 rewrites, those who say that you can at most write 1,000 times the capacity of the memory before it completely fails (going into read-only mode)... no conclusion is reached.

I have had cards like the one examined today, with a capacity of 32 GB, which, apart from the almost 2 TB written since the last formatting, in my opinion has seen at least 3 TB in total in its entire life, and yet it still seems fine; and then, I've had cards that started giving problems for much less. Maybe it's because I used the latter with crappy file systems, like FAT32 or exFAT, and for this reason they were constantly corrupting.

In conclusion: if we abuse betting slips, it is good to be able to control them, to the extent possible, in the way we have learned today.