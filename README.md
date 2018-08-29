# DataRollingFileAppenderTest

npm install log4js@^2.5 --save
:

log4jsの機能。 
    DateRollingFileLogAppender: { 
      type: "dateFile", 
      filename: path.join(ROOT, "./log/access/access.log"), 
      pattern: "-yyyyMMdd", 
      daysToKeep: 30 
    } 
こんな指定で、指定日付までのログを自動保持してくれる便利機能。 
 
実行環境：
windows
VisualStudioCode
node.js
express
log4js
http://localhost:3000/


※log4jsの仕様が変わったっぽい。

参考URL
https://qiita.com/filunK/items/ad47bfb7e88b4bfb4ef7
