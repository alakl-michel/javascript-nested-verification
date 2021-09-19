# JavaScript-nested-verification challenge
JavaScript nested verification 

  
Implement‌ ‌function‌ ‌verify(text)‌ ‌which‌ ‌verifies‌ ‌whether‌ ‌parentheses‌ ‌within‌ ‌text‌ ‌are‌ ‌
correctly‌ ‌nested.‌ ‌You‌ ‌need‌ ‌to‌ ‌consider‌ ‌three‌ ‌kinds:
(),‌ ‌[],‌ ‌<>‌ ‌and‌ ‌‌only‌‌ ‌these‌ ‌kinds.<br><br>
Sample input:
```
verify("---(++++)----")‌ ‌->‌ ‌1‌ ‌
verify("")‌ ‌->‌ ‌1‌ ‌
verify("before‌ ‌(‌ ‌middle‌ ‌[])‌ ‌after‌ ‌")‌ ‌->‌ ‌1‌ ‌
verify(")‌ ‌(")‌ ‌->‌ ‌0‌ ‌
verify("<(‌   ‌>)")‌ ‌->‌ ‌0‌ ‌
verify("(‌  ‌[‌  ‌<>‌  ‌()‌  ‌]‌  ‌<>‌  ‌)")‌ ‌->‌ ‌1‌ ‌
verify("‌   ‌(‌      ‌[)")‌ ‌->‌ ‌0‌
```
