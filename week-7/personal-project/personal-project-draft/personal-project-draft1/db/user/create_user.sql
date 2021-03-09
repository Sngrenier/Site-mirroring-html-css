INSERT INTO users (username, password, email, profile_pic, first_name, last_name, phone_number)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *