import type { Data, DataWithId } from '@types'

/**
 * Parses date fields in resume data by converting string dates to Date objects.
 *
 * This function transforms `DataWithId` (which has string-based date fields) into `Data`
 * (which has proper Date objects for all date-related fields). It handles:
 * - `dateOfGraduation` in education entries
 * - `startDate` and `endDate` in work experience entries
 *
 * @param data The raw resume data with string dates
 * @returns Data object with parsed Date objects instead of strings
 *
 * @example
 * ```typescript
 * const rawData: DataWithId = {
 *   me: { firstName: 'John', lastName: 'Doe', jobTitle: 'Developer', image: { src: '', altText: '' } },
 *   contact: { email: 'john@example.com', linkedIn: '', homepage: '', gitHub: '' },
 *   languageSkill: [],
 *   hobby: [],
 *   education: [
 *     { id: '1', academy: 'University of Helsinki', education: 'Computer Science', degree: 'Yliopistotutkinto', dateOfGraduation: '2023-06-15', professionalTitle: '' }
 *   ],
 *   skill: [],
 *   workExperience: [
 *     { id: '1', title: 'Senior Developer', workplaceName: 'Tech Corp', job: 'Full-stack development', startDate: '2023-07-01', endDate: '' }
 *   ]
 * };
 *
 * const parsedData = parseDateFields(rawData);
 * // parsedData.education[0].dateOfGraduation is now a Date object (June 15, 2023)
 * // parsedData.workExperience[0].startDate is now a Date object (July 1, 2023)
 * ```
 */
export const parseDateFields = (data: DataWithId): Data => {
  return {
    ...data,
    education: data.education.map(education => ({
      ...education,
      dateOfGraduation: new Date(education.dateOfGraduation)
    })),
    workExperience: data.workExperience.map(workExperience => ({
      ...workExperience,
      startDate: new Date(workExperience.startDate),
      endDate: new Date(workExperience.endDate)
    }))
  }
}
