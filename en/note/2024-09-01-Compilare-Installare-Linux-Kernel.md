+++
Title= "🌽 Compile and install the Linux kernel from source"
Date= 2024-09-01
Description= "General information on how to compile Linux for general purpose computers, useful for solving problems or obtaining special features."
Featured_Image= "@/Media/Decor/dall-e_44be7d57-5b1d-44ff-bf54-421d95165b5f.jpeg"
Downsync= "/it/note/Compile-Install-Linux-Kernel.html"
Categories= [ "Linux" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Autogenerated by ListedDownsync.js. Do not edit (unless also set "% Downsync = False") - it would be overwritten. -->

<p>It's not often that new ideas come to mind, but when they do, they're always just the right amount of bizarre... Without digressing too much, it's precisely because of this development of things that years ago, for the first time, I found myself compiling the Linux kernel from source — on a Raspberry Pi 3 among other things, which in hindsight I wouldn't recommend — and now, precisely yesterday, again another time, after years (this time on the PC, luckily ), for a purpose that I won't spoil.</p>

<h2>Why recompile the kernel? 😯️</h2>

<p>Linux is based on a monolithic architecture, which would be of little concern to us... if it weren't for the fact that it has an inconvenient implication: any function that works at the kernel level must be compiled into it. Even the mechanism of the so-called modules does not cover all possible situations (at least not on a practical level), and one can therefore find oneself in situations in which the kernel provided by the distribution (or by the hardware manufacturer), even if updated, does not have something that is needed, and therefore must be replaced.</p>



<p>Considering the infinite variety of Linux distributions, repositories that distribute compatible or non-compatible kernels, and combining this with the diversity of individual options that can be enabled in kernel compilation... not only in rare cases is compilation from source the only way, but often it is the most practical one. Luckily, compiling the Linux kernel is very simple — significantly easier than the average Linucs desktop application, with three thousand always conflicting dependencies — but there are perhaps not-so-immediate details in the process, so… here's my note! </p>

<h2>0. Departure and prerequisites 📦️</h2>

<p>This note is on the more generic recompilation of the Linux kernel, i.e. the official variant (that of Linus Torvalds) on and for an x86_64 (or AMD64) desktop PC. No forks or patched variants, no crappy OEM versions, no installation on embedded or otherwise esoteric devices, no distributed or cross-platform compilation. For more or less borderline cases, the things to do can vary more or less, even if the trend remains the same... you see, come on, the point is that I assume this situation. In my case, there aren't even proprietary kernel modules.</p>

<p>Aside from any favorite tools for obtaining the kernel, unpacking it if necessary, and some distractions to pass the considerable time, the prerequisites are quite minimal. At a minimum you need a C compiler (gcc) for obvious reasons, GNU Make to run the makefiles, some assorted tools with a forgettable name and some super-specific libraries of limited interest. Then, I think other packages may be needed, depending on the Linux distribution in use or the features that need to be compiled.</p>

<p>It's not actually very clear on the web which packages are really necessary, and which ones someone who has done other guides said "well, let's put it in just to be safe"... I'll update here with precise price lists as I check, including excessive planks if necessary (for those who are okay with wasting space but not time). For me it is generally a strategy to install the minimum possible when some requirement is not clear, start the compilation, and install any other dependencies as errors arise in this regard.</p>



<p>Debian and derivatives (<code class="prettyprint">apt</code>):</p>

<ul>
<li><code class="prettyprint">build-essential</code> <code class="prettyprint">libelf-dev</code> (required)</li>
<li><code class="prettyprint">ncurses-dev</code> (to use TUI menu configuration)</li>
</ul>

<h2>1. Obtaining the code ⛓️</h2>

<p>Linux source code can be taken officially <a href="https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git" rel="noopener nofollow" target ="_blank">from main Git</a>, <a href="https://github.com/torvalds/linux" rel="noopener nofollow" target="_blank">from Torvalds GitHub</a> , or <a href="https://kernel.org" rel="noopener nofollow" target="_blank">from the Kernel.org site</a>. I prefer the last option, which has the latest versions actually needed displayed prominently, up to the oldest supported branch.</p>

<p>There are several versions supported at a given time. Generally, if there's no reason to install an older kernel, a newer one is better; not too new, however, because living on the bleeding edge means losing blood, with occasional even serious problems that can pop up! So, I avoid the <code class="prettyprint">mainline</code> branch, updated daily or almost, like the plague, and generally choose <code class="prettyprint">stable</code>, updated with a little ' more days. Other users might legitimately prefer the more recent <code class="prettyprint">longterm</code> (the one at the top), for even more stability, but I find it useless.</p>

<p>For each version line, apart from the date, what matters is the [tarball] link, so you download that file there. You can then extract it to a convenient folder, among many ways, with the <code class="prettyprint">tar xvf <file></code> command. All commands to be executed from this point will be inside the prepared folder.<br>
<img src="{{< assetsRoot >}}/Media/Linux-Kernel/2024-09-02-kernel.org.png" alt="kernel.org"></p>

<p>...You should also download the PGP file, when present, which serves to verify that the download is intact and that it comes from legitimate distributors. Realistically, however, not all versions already have it (implying that deep down...), the download is done from the official site with HTTPS (so it will be difficult to alter), it is a compressed archive (so if corrupted it should fail the extraction), and doing the verification is a mind-blowing pain in the ass. Other institutions will have higher security requirements, but for private users it's frankly just boring, I don't do it, I don't care.</p>



<h2>2. Kernel configuration 🔩️</h2>

<p>Configuring the kernel is the most intricate part... because you can't execute commands by inertia, but you have to <em>choose</em> what you actually need to, well, have the kernel with bone options. There are, as mentioned, infinite configurations, and different ways to use them. The main point is that there is a huge text file, with various options (mostly Boolean), that you can edit.</p>

<p>Tweaking that thing by hand is crazy, though, because there are neat menu-based tools built into the build process to handle the various possibilities. Here too, half a mess, but the choice is mainly between two programs TUI and GUI respectively, which can be invoked respectively with <code class="prettyprint">make menuconfig</code> and <code class="prettyprint">make xconfig</code >. I prefer <code class="prettyprint">xconfig</code> for convenience and, although I have used the curses menu configuration in the past, and it is quite intuitive for me, apparently for many it is not... and the how to use that menu is not today's topic.</p>

<table><thead>
<tr>
<th>menuconfig vs xconfig</th>
</tr>
</thead><tbody>
<tr>
<td><img src="{{< assetsRoot >}}/Media/Linux-Kernel/menuconfig.png" alt="menuconfig"></td>
</tr>
<tr>
<td><img src="{{< assetsRoot >}}/Media/Linux-Kernel/xconfig.png" alt="xconfig"></td>
</tr>
</tbody></table>

<p>If you do nothing else, the configuration you are going to change is the default one of the kernel as it is being developed. I have never had any problems using that as a base, but, if necessary, in addition to those shared by other users, you can use the one from the current distribution. Depending on how your system exposes the kernel configuration, you can (typically) read it with <code class="prettyprint">cat /boot/config-$(uname r)</code>, <code class=" prettyprint">cat /boot/config</code>, or <code class="prettyprint">zcat /proc/config.gz</code>. Just write it (<code class="prettyprint">></code>) to the <code class="prettyprint">./.config</code> file to apply it to the current configuration.</p>

<p>In this case I wanted to activate support for the new NTFS driver, so in xconfig I press CTRL+F, search for "ntfs3" and set to (Y)es the option that talks about "NTFS Read/Write <em>something something</em>"; then, I save the configuration, I close, and... I'm done, incredible.</p>

<h2>3. Compiling the code 🧑u200d🍳️</h2>

<p>With compilation, it's boring time, because you simply have to give the computer time to crunch millions (!) lines of code. It's not good, but at least it's not the end of the world: on any PC that isn't exactly a hack you should do it in less than 4 hours. On the Raspberry Pi 3 it took me a day and a half with the CPU at nuclear temperatures (and also for this reason I advise against it...), but on my PC (Ryzen 3 3200G, 16 GB of RAM of which a few are occupied by compilation, on a low-end SSD) I think it took me just under 3 hours to compile version 6.10.7.</p>

<p>You simply need to run <code class="prettyprint">make</code>, and Linucs will make itself for the current CPU architecture, long live the magic! Better yet, <code class="prettyprint">make -j$(nproc)</code> to use all available CPU cores... The handful of hours, I should point out, are measured against this, otherwise it would be half a day , since my PC has 4 cores; it could do much sooner by having more cores, because it can compile even more files in parallel effectively.</p>

<p>At least in the first few minutes, it's a good idea to keep an eye on the terminal, to see if any errors occur and the compilation stops. Absurd errors have never happened to me, but, as I said, if you don't install all the dependencies, something related to those could come out... in this case, you install what's missing (referring to your distribution), and continue with the previous command.</p>

<p>Depending on your configuration, you will need more or less disk space to complete the compilation. While the kernel itself never weighs more than a few MB (and the modules a few tens of MB), the folder at the end of the day weighed ~22 GB, so it's a good idea to either make sure you have enough space, or check every now and then that this isn't ending. And if it ends during the process, you simply free up space and continue, again, as before. (As long as your file system doesn't get corrupted just by being 100% full, right BTRFS?)</p>

<h2>4. Installing kernels and modules 🏗️</h2>

<p>You don't need root permissions to compile the kernel, which is handy in case you want to temporarily steal someone else's most powerful computer to do the job... but, to install, you obviously need those on the current system. </p>

<p>Here it is not only simple, but also quite fast (maximum a few minutes): by running (as root) first <code class="prettyprint">make install</code>, and then <code class="prettyprint"> INSTALL_MOD_STRIP=1 make install_modules</code>, they will be installed in the appropriate paths, respectively (assuming you have not changed the names): the kernel image (<code class="prettyprint">vmlinuz-x.x.x-...</code >), usually in <code class="prettyprint">/boot</code> and modules, usually in <code class="prettyprint">/lib/modules/linux-x.x.x-...</code> . The modules are files separate from the kernel, because they are loaded by the system when necessary... the point is that some of the many are used to complete the boot, so they must be installed.</p>

<p>You also need to prepare the so-called init file system, or initial ramdisk; normally it also ends up in <code class="prettyprint">/boot</code>, under the name <code class="prettyprint">initrd.img-x.x.x-...</code>. And this step would be quite inconvenient if there were no <code class="prettyprint">kernel-install</code>, script included with systemd, or its alternative <code class="prettyprint">installkernel</code>. Having systemd, at least the first one should already be installed, and in that case (assuming the names from before) just do (as root) <code class="prettyprint">kernel-install add x.x.x-... /boot/vmlinuz- x.x.x-...</code>; alternatively, with the second, <code class="prettyprint">installkernel x.x.x-... /boot/vmlinuz-x.x.x-...</code>.<sup id="fnref1"><a class="footnote- ref" href="#fn1">1</a></sup></p>

<p>Note: those who develop with the kernel (not those who are reading this post, I'm afraid) may want not to set the environment variable <code class="prettyprint">INSTALL_MOD_STRIP=1</code>, because debugging without the debugging, which that flag removes, is difficult... but for ordinary mortal users like me they just waste space (so much so that distributions package them separately). Furthermore, those who do not necessarily develop with the kernel, but have to compile external modules or do other tricks, should realistically also install the corresponding header files on the system: <code class="prettyprint">make headers_install</code> (always as root). </p>

<p>At least on "complete" distributions, <code class="prettyprint">make install</code> and then <code class="prettyprint">kernel-install</code> should have already configured the bootloader too, at least having GRUB. In the case of, so to speak, "more DIY" distributions (which I don't use, <em>btw</em>), as well as more unusual boot configurations... that's not my case, so I know nothing, and I won't say anything. Boot configurations are a beast for another time.</p>

<h2>5. Test the core 💥️</h2>

<p>If the kernel is installed, and the bootloader has been correctly configured, then simply restart your computer to enjoy. It is good to remember that, if you are using GRUB, some say that the new kernel is not selected as default, and you have to choose it manually from the boot menu... but in my case, on Linux Mint Debian Edition, it seemed to me that instead it had actually been set as default.</p>

<p>Again, if, thanking the penguin, the system finally boots, just use the <code class="prettyprint">uname -r</code> command to check the running kernel version. At this point, it's a good idea to verify that the <em>desired</em> configuration is actually working... but how to do this varies from feature to feature, case by case. To at least confirm that the <em>specified</em> configuration exists, just check the current kernel configuration as in point 2.</p>

<p>At this point, if everything works and no other changes are needed, you can also delete the huge compilation folder, and the kernel will remain. If you also need to uninstall the kernel in the future, just delete the previously installed files normally and reconfigure the bootloader appropriately.</p>

<h2>Conclusion 🎊️</h2>

<p>Being able to compile the kernel from source code is another of those things that we Linux users can do, and that Windows users frankly <strong>don't</strong> envy us. But that's because they like to win easy, with their NT, based on a microkernel design... that's right, now that the point of the article is over I can spout nonsense as I like.</p>

<p>Copium aside, compiling Linux can be something fun to do at least once. If you find yourself in uncomfortable situations like me it must be done, there is little that can be done; However, if you just want to have some silly fun, maybe one of the many things you can do is compile an ultra-specific, super-optimized kernel for your machine, or for virtualization purposes. And, sure, it consumes some energy, but never as much as mining cryptocurrencies or rendering nuclear missiles in Blender!</p>



<h2>{{% i18n notes-refs %}}</h2>

<p><em>The decorative cover image is obtained via <a href="https://www.bing.com/images/create/beach-with-sand-and-rocks2c-computer-chips-and- wire/1-66d5a1ef220c4fae8bd786e10b88ae1e?id=Rt9hCy8E%2Fg%2BZK8rWhgwIPQ%3D%3D&view=detailv2&idpp=genimg" rel="noopener nofollow" target="_blank">Microsoft's generative artificial intelligence</a>.</em> </p>

<ul>
<li>The kernel build system: <a href="https://www.kernel.org/doc/html/v6.6/kbuild/index.html" rel="noopener nofollow" target="_blank">https ://www.kernel.org/doc/html/v6.6/kbuild/index.html</a></li>
<li>A Guide to Compiling the Linux Kernel All By Yourself: <a href="https://itsfoss.com/compile-linux-kernel/" rel="noopener nofollow" target="_blank">https:// itsfoss.com/compile-linux-kernel/</a></li>
<li>Building and Installing Custom Linux Kernels (Rocky Linux): <a href="https://docs.rockylinux.org/guides/custom-linux-kernel/" rel="noopener nofollow" target="_blank"> https://docs.rockylinux.org/guides/custom-linux-kernel/</a></li>
</ul>

<div class="footnotes">
<ol>

<li id="fn1">
<p>Installkernel and kernel-install (Gentoo Linux): <a href="https://wiki.gentoo.org/wiki/Installkernel" rel="noopener nofollow" target="_blank">https://wiki. gentoo.org/wiki/Installkernel</a> <a href="#fnref1">↩</a></p>
</li>

</ol>
</div>