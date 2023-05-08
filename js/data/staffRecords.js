export const STAFF_RECORDS = "First Name,Last Name,Age \
Onome,Ehigiator,45 \
Adegoke,Akeem-omosanya,67 \
Bukola,Ehigiator,66 \
Olufunmi,Aremu,34 \
Ifeanyichukwu,Ekwueme,54 \
Isioma,Mustapha,57 \
Ayebatari,Joshua,25 \
Nnamdi,Olawale,76 \
Lola,Abosede,45 \
Emeka,Oyelude,34 \
Aminu,Ogunbanwo,67 \
Simisola,Ekwueme,98 \
Ayebatari,Busari,56 \
Chinyere,Uchechi,52 \
Adeboye,Jamiu,84 \
Titilayo,Kimberly,56 \
Chimamanda,Ehigiator,34 \
Bukola,Adegoke,57 \
Cherechi,Elebiyo,59 \
Titilayo,Afolabi,90"

console.log(STAFF_RECORDS.split("Age ")[1].split(" ").map(item => item.split(",")))