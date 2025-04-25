{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fnil\fcharset0 Menlo-Italic;}
{\colortbl;\red255\green255\blue255;\red70\green137\blue204;\red30\green33\blue39;\red155\green162\blue177;
\red212\green212\blue212;\red54\green192\blue160;\red136\green185\blue102;\red108\green113\blue123;\red167\green197\blue152;
}
{\*\expandedcolortbl;;\cssrgb\c33725\c61176\c83922;\cssrgb\c15686\c17255\c20392;\cssrgb\c67059\c69804\c74902;
\cssrgb\c86275\c86275\c86275;\cssrgb\c23922\c78824\c69020;\cssrgb\c59608\c76471\c47451;\cssrgb\c49804\c51765\c55686;\cssrgb\c70980\c80784\c65882;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  \cf6 \strokec6 NextResponse\cf5 \strokec5 ,\cf4 \strokec4  \cf6 \strokec6 NextRequest\cf4 \strokec4  \cf5 \strokec5 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 "next/server"\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  prisma \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 "@/lib/prisma"\cf5 \strokec5 ;\cf4 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 async\cf4 \strokec4  \cf2 \strokec2 function\cf4 \strokec4  \cf6 \strokec6 POST\cf5 \strokec5 (\cf4 \strokec4 request\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 NextRequest\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 try\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  body \cf5 \strokec5 =\cf4 \strokec4  \cf2 \strokec2 await\cf4 \strokec4  request\cf5 \strokec5 .\cf4 \strokec4 json\cf5 \strokec5 ();\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     
\f1\i \cf8 \strokec8 // Validar dados de entrada
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf5 \strokec5 (!\cf4 \strokec4 body\cf5 \strokec5 .\cf4 \strokec4 title \cf5 \strokec5 ||\cf4 \strokec4  \cf5 \strokec5 !\cf4 \strokec4 body\cf5 \strokec5 .\cf4 \strokec4 shortDescription \cf5 \strokec5 ||\cf4 \strokec4  \cf5 \strokec5 !\cf4 \strokec4 body\cf5 \strokec5 .\cf4 \strokec4 category \cf5 \strokec5 ||\cf4 \strokec4  \cf5 \strokec5 !\cf4 \strokec4 body\cf5 \strokec5 .\cf4 \strokec4 creatorId\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 NextResponse\cf5 \strokec5 .\cf4 \strokec4 json\cf5 \strokec5 (\cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 \{\cf4 \strokec4  error\cf5 \strokec5 :\cf4 \strokec4  \cf7 \strokec7 "Dados insuficientes para criar ideia"\cf4 \strokec4  \cf5 \strokec5 \},\cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 \{\cf4 \strokec4  status\cf5 \strokec5 :\cf4 \strokec4  \cf9 \strokec9 400\cf4 \strokec4  \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     
\f1\i \cf8 \strokec8 // Criar a ideia no banco de dados
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  idea \cf5 \strokec5 =\cf4 \strokec4  \cf2 \strokec2 await\cf4 \strokec4  prisma\cf5 \strokec5 .\cf4 \strokec4 idea\cf5 \strokec5 .\cf4 \strokec4 create\cf5 \strokec5 (\{\cf4 \cb1 \strokec4 \
\cb3       data\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 title\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         shortDescription\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 shortDescription\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         longDescription\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 longDescription \cf5 \strokec5 ||\cf4 \strokec4  \cf7 \strokec7 ""\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         category\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 category\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         targetAudience\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 targetAudience \cf5 \strokec5 ||\cf4 \strokec4  \cf7 \strokec7 ""\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         problemSolved\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 problemSolved \cf5 \strokec5 ||\cf4 \strokec4  \cf7 \strokec7 ""\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         currentResources\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 currentResources \cf5 \strokec5 ||\cf4 \strokec4  \cf7 \strokec7 ""\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         progress\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 progress \cf5 \strokec5 ||\cf4 \strokec4  \cf9 \strokec9 0\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         image\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 image \cf5 \strokec5 ||\cf4 \strokec4  \cf2 \strokec2 null\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         creatorId\cf5 \strokec5 :\cf4 \strokec4  body\cf5 \strokec5 .\cf4 \strokec4 creatorId\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 \},\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \});\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     
\f1\i \cf8 \strokec8 // Criar log de progresso inicial
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 await\cf4 \strokec4  prisma\cf5 \strokec5 .\cf4 \strokec4 progressLog\cf5 \strokec5 .\cf4 \strokec4 create\cf5 \strokec5 (\{\cf4 \cb1 \strokec4 \
\cb3       data\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         ideaId\cf5 \strokec5 :\cf4 \strokec4  idea\cf5 \strokec5 .\cf4 \strokec4 id\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         progressValue\cf5 \strokec5 :\cf4 \strokec4  idea\cf5 \strokec5 .\cf4 \strokec4 progress\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf5 \strokec5 :\cf4 \strokec4  \cf7 \strokec7 "Ideia criada"\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3         milestone\cf5 \strokec5 :\cf4 \strokec4  \cf7 \strokec7 "In\'edcio"\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 \},\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \});\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 NextResponse\cf5 \strokec5 .\cf4 \strokec4 json\cf5 \strokec5 (\cf4 \strokec4 idea\cf5 \strokec5 ,\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  status\cf5 \strokec5 :\cf4 \strokec4  \cf9 \strokec9 201\cf4 \strokec4  \cf5 \strokec5 \});\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 \}\cf4 \strokec4  \cf2 \strokec2 catch\cf4 \strokec4  \cf5 \strokec5 (\cf4 \strokec4 error\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3     console\cf5 \strokec5 .\cf4 \strokec4 error\cf5 \strokec5 (\cf7 \strokec7 "Erro ao criar ideia:"\cf5 \strokec5 ,\cf4 \strokec4  error\cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 NextResponse\cf5 \strokec5 .\cf4 \strokec4 json\cf5 \strokec5 (\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 \{\cf4 \strokec4  error\cf5 \strokec5 :\cf4 \strokec4  \cf7 \strokec7 "Erro ao criar ideia"\cf4 \strokec4  \cf5 \strokec5 \},\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 \{\cf4 \strokec4  status\cf5 \strokec5 :\cf4 \strokec4  \cf9 \strokec9 500\cf4 \strokec4  \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 );\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\
}