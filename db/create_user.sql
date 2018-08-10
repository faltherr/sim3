INSERT INTO users (username, password)
    VALUES (${username}, ${password})
    RETURNING *;

    -- INSERT INTO users (username, password, profile_pic)
    -- VALUES (${username}, ${password}, ${profile_pic});
    -- RETURNING *;