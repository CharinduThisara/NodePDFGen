# Project Title

PDF Certificate Service

## Description

MICROService for generating PDFs for GRAMACHECK

## Installation

npm install

## Usage

npm start

## Endpoints

### `POST /generateCertificate`

- **Description:** Generates a Grama Niladari Certificate in PDF format based on provided data.
- **Request:**
  - **Body:** JSON object containing the following fields:
    - `district` (String): District information.
    - `division` (String): Divisional Secretary's Division information.
    - `gramaNiladariDivision` (String): Grama Niladari Division information.
    - ... (other fields)
- **Response:**
  - **Content:** PDF file containing the generated Grama Niladari Certificate based on provided data.

### Example

```http
POST /generateCertificate
Content-Type: application/json

{
  "district": "KURUNEGALA",
  "division": "Some where",
  "gramaNiladariDivision": "IhalaKalugamuwa",
  "nameAddress": "John Doe, Sample Address",
  "sex": "Male",
  "age": "30",
  "civilStatus": "Single",
  "srilankan": "Yes",
  "religion": "Buddhist",
  "occupation": "Software Developer",
  "NIC": "123456789V",
  "policeClearanceRefNum": "ABC123XYZ",
  "gramaNiladhariSignature": "Signature Placeholder"
}
