這個Repo是我在學習React Component時的JSX練習，我嘗試著以JSX Component的方式實作Youtube Fireship頻道內Navbar的範例（連結如下）：
https://www.youtube.com/watch?v=biOMz4puGt8&t=84s&ab_channel=Fireship

Codepen實作的連結在此：
https://codepen.io/Oliver-Chen/pen/pobLyNO

過程中遇到如下問題， 嘗試著進行解決：

1.NavBar中有很多小的svg ICON，關於SVG的屬性我都藉由props的方式來把值傳進去，於是引入component時每個Component標籤變得很冗長，這時忽然想到解構賦值的方法，想請問props能否藉由解構賦值的方式傳進Component標籤呢？
