import { Pool } from "pg"

export const pool = new Pool({
    host:'ec2-34-231-177-125.compute-1.amazonaws.com',
    user:'tojkumbsajsihk',
    password:'7975706b9e461093d670e076aeca63b6994bebd6e5913efdf482e8884b86375b',
    database:'df23irat9mnqan',
    port:5432,
    ssl:{rejectUnauthorized:false}
});