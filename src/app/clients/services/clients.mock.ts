import { Client } from "../../shared/interfaces/client";

export const clientsMock: Client[] = [
    {
        id: 1,
        firstName: 'Jhon',
        lastName: 'Wall',
        email: 'jhonwall@gmail.com',
        birthDate: new Date('01/01/1987'),
        registrationDate: new Date('01/01/2021'),
        ipAddress: '192.168.0.1',
        status: "client"
    },
    {
        id: 2,
        firstName: 'Some',
        lastName: 'Guy',
        email: 'someguy@gmail.com',
        birthDate: new Date('01/01/1978'),
        registrationDate: new Date('01/17/2021'),
        ipAddress: '192.168.0.106',
        status: "demo"
    },
    {
        id: 3,
        firstName: 'Jhon',
        lastName: 'Guy',
        email: 'jhonguy@gmail.com',
        birthDate: new Date('01/01/1992'),
        registrationDate: new Date('01/17/2020'),
        ipAddress: '192.168.0.100',
        status: "demo"
    },
]
