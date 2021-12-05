# TreeShop by หมอยงยอดนักขาย

## TL;DR
โปรเจควิชา CPE327 เกี่ยวกับระบบจัดการต้นไม้และหน้าเว็บสำหรับขาย

## รายละเอียด
หลังบ้านใช้ Golang โดยมี Fiber เป็น webframework ส่วนหน้าบ้านจะใช้เป็น React framework

## วิธีการรันระบบ
โดยก่อนจะเริ่มต้องทำการติดตั้ง Docker และ Docker Compose จำเป็นต้องมีพื้นที่ความจำอย่างน้อย 2GB เพื่อสำรองให้กับ Image ของ Docker และใช้ RAM ประมาณ 2GB สำหรับ Build Image (ต่ำกว่านั้นได้แต่อาจจะใช้เวลาเยอะกว่า เพราะแอพรันรวมๆแล้วน้อยกว่า 1GB) โดยถ้าต้องการรันใช้คำสั่ง
```bash
$ ./scripts/run.sh
```

## วิธีลบข้อมูลทั้งหมด
```
$ ./scripts/clean.sh
```