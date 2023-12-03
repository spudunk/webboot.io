<script lang="ts">
	import { SEO } from '$lib/components';
import { jobData, allSkills, tradeSkills } from '$lib/cv';

  let activeSkills = [...allSkills];
	$: activeResume = getActiveResume(activeSkills);

	const getActiveResume = (activeSkills: string[]) => {
		let active = '';
		Object.entries(tradeSkills).forEach((entry) => {
			const [trade, skills] = entry;
			if (skills.sort().toString() === activeSkills.sort().toString()) {
				active = trade;
			}
		});
		return active;
	};


	const setActiveResume = (trade: keyof typeof tradeSkills) => {
		activeSkills = [...tradeSkills[trade]];
	};

	const toggleSkill = (skill: string) => {
		if (activeSkills.includes(skill)) {
			const index = activeSkills.indexOf(skill);
			if (index > -1) {
				// only splice array when item is found
				activeSkills.splice(index, 1); // 2nd parameter means remove one item only
				activeSkills = activeSkills;
			}
		} else {
			activeSkills.push(skill);
			activeSkills = activeSkills;
		}
	};

	const toggleAllSkills = (on: boolean) => {
		if (on) {
			activeSkills = [...allSkills];
		} else {
			activeSkills = [];
		}
	};
</script>

<SEO title="Chris Hicks Resume - webboot.io" description="Christopher Hicks, web developer, content writer - digital resume - Svelte, TypeScript, Cloudflare, Web App" />

<!-- Print only header -->
<div class="hidden print:block mb-4">
	<h2 class="text-2xl font-bold ">Christopher Hicks</h2>
	<p>(360) 827-2736</p>
	<p>hickscme@gmail.com</p>
	<p>Toledo, WA</p>
	<p class="mt-2">For the full version visit <a class="text-blue-800 underline" href="https://webboot.io/resume" target="_blank">webboot.io/resume</a></p>

</div>


<!-- Resume Filters -->
<h2 class="text-2xl font-bold print:hidden">Pick a Resume</h2>
<div class="flex gap-1 mb-4 w-fit print:hidden">
	<button
		class={`text-left border rounded py-1 px-2 hover:scale-105 transition ${activeResume === 'it' ? 'bg-green-200' : ''}`}
		on:click={() => {
			setActiveResume('it');
		}}>IT Resume</button
	>
	<button
		class={`text-left border rounded py-1 px-2 hover:scale-105 transition ${
			activeResume === 'construction' ? 'bg-green-200' : ''
		}`}
		on:click={() => {
			setActiveResume('construction');
		}}>Construction Resume</button
	>
	<button
		class={`text-left border rounded py-1 px-2 hover:scale-105 transition ${
			activeResume === 'mechanic' ? 'bg-green-200' : ''
		}`}
		on:click={() => {
			setActiveResume('mechanic');
		}}>Mechanic Resume</button
	>
</div>

<!-- Skills -->
<h2 class="mt-4 text-2xl font-bold print:hidden">Skills</h2>
<div class="mb-2 print:hidden">
	{#if activeSkills.length < allSkills.length}
		<button
			class="text-left row-start-2 border rounded py-1 px-2 hover:scale-105 transition"
			on:click={() => {
				toggleAllSkills(true);
				return;
			}}>Show All</button
		>
	{/if}
	{#if activeSkills.length > 0}
		<button
			class="text-left row-start-2 border rounded py-1 px-2 hover:scale-105 transition"
			on:click={() => {
				toggleAllSkills(false);
				return;
			}}>Hide All</button
		>
	{/if}
</div>

<ul class="flex flex-wrap gap-1 mb-6 print:hidden">
	{#each allSkills as skill}
		<button
			id={skill}
			on:click={(e) => {
				toggleSkill(skill);
			}}
			class={`text-left font-semibold border rounded py-1 px-2 hover:scale-105 transition ${
				activeSkills.includes(skill) ? 'bg-green-200' : ''
			}`}
		>
			{skill}
		</button>
	{/each}
</ul>

<!-- Work History -->
<h2 class="text-2xl font-bold mt-4 mb-1">Work History</h2>
<div class="flex flex-col gap-4">
	{#each jobData as job}
		{#if job.skills.some((s) => activeSkills.includes(s))}
			<div>
				<h2 class="text-lg font-semibold">{job.company}</h2>
				<p>{job.location}</p>
				<p>{job.start} - {job.end}</p>
				<ul class="list-inside list-disc">
					{#each job.tasks as task}
						{#if task.skills.some((s) => activeSkills.includes(s))}
							<li>{task.task}</li>
						{/if}
					{/each}
				</ul>
			</div>
		{/if}
	{/each}
</div>
