// support unocss scanning to the icon of the file
// @unocss-include
import type { ProjectGroup } from '$lib/scan/projects';

/**
 * for example
 *
 *  [{
 *    group: 'Group Name',
 *    projects: [
 *      {
 *        icon: 'i-logos:svelte-icon',
 *        title: 'Project Name',
 *        description: "Project Description",
 *        link: 'https://github.com/vtrbo'
 *      }
 *    ]
 *  }]
 */
export const projects: ProjectGroup[] = [];
