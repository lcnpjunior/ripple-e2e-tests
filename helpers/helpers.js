import { faker } from '@faker-js/faker';

export function userInfo() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
        firstName: firstName,
        lastName: lastName,
        email: `qa+${firstName}_${lastName}@ripple.com`,
        company: `${lastName} company`,
        website: `${firstName}-${lastName}.com`,
        interestedIn: [
            'Compliance',
            'Maintenance',
            'Crew Management',
            'Other'
        ],
        optionalMessage: faker.lorem.sentences()
    };
}