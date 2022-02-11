CREATE TABLE questions
(
    id serial not null,
    description text,
    answers text[],
    constraint todos_pkey primary key (id)
);
