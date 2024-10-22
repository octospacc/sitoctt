+++
Hidden = true
+++
<form name="admin">
	<fieldset name="git" disabled>
		<legend>Git Configuration</legend>
		<p><label>Instance URL:    &nbsp; <input type="url" name="InstanceUrl"/></label></p>
		<p><label>Repository Path: &nbsp; <input type="text" name="RepoThis"/></label></p>
		<p><label>Branch Name:     &nbsp; <input type="text" name="BranchThis"/></label></p>
		<p><label>Access Token:    &nbsp; <input type="password" name="token" placeholder="***"/></label></p>
	</fieldset>
</form>
<style> form[name="admin"] input { float: right; } </style>
<script>(() => {
	const formEl = document.querySelector('form[name="admin"]');
	const gitEl = formEl.querySelector('fieldset[name="git"]');
	const gitData = (sitoctt.localStorage('gitAuth') || {});
	for (const fieldEl of gitEl.querySelectorAll('input')) {
		fieldEl.placeholder ||= sitoctt.Props[`Git${fieldEl.name}`];
		fieldEl.value = (gitData[fieldEl.name] || '');
		fieldEl.oninput = fieldEl.onchange = fieldEl.onpaste = () => {
			gitData[fieldEl.name] = fieldEl.value;
			sitoctt.localStorage('gitAuth', gitData);
		};
	}
	gitEl.disabled = false;
})();</script>