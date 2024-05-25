# TransCrypt: Secure Academic Records Management

Transcrypt is an web application designed specifically for educators to simplify and enhance the process of creating and managing transcripts. With powerful encryption, decryption, signing, and verification features, Transcrypt ensures the security and integrity of academic records, making it an invaluable tool for teachers, administrators, and educational institutions.

## Created by:

- 18221065 Josua Adriel Sinabutar
- 18221146 Tara Chandani Haryono
- 18221162 Ceavin Rufus De Prayer Purba

## How to run in local development server:

```
npm install
```

1. Frontend

```
cd frontend
npm start
```

2. Backend

(You need to create a MySQL database and store the port number in the `.env` file located on `backend` folder)

```
cd backend
echo PORT="db port number" > .env & attrib +s .env
npm start
```

## Completeness

| Specification                                     | Status |
| ------------------------------------------------- | ------ |
| RSA Key generation                                | ✅     |
| Digital Signature                                 | ✅     |
| Verification                                      | ✅     |
| Academic Records Input                            | ✅     |
| Academic Records Encryption                       | ✅     |
| Academic Records Decryption                       | ✅     |
| Transcript File Encryption                        | ✅     |
| Transcript File Decryption                        | ✅     |
| Download transcript file (encrypted or decrypted) | ✅     |
