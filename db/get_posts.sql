SELECT p.*, u.* 
FROM posts p
JOIN users u ON p.auth_id = u.id

-- Maybe add a where/like statement to check for values in a title