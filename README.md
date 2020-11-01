這個Repo是我在學習React Component時的JSX練習，我嘗試著以JSX Component的方式實作Youtube Fireship頻道內Navbar的範例（連結如下）：
https://www.youtube.com/watch?v=biOMz4puGt8&t=84s&ab_channel=Fireship

Codepen實作的連結在此：
https://codepen.io/Oliver-Chen/pen/pobLyNO

過程中遇到如下問題， 嘗試著進行解決：

1.NavBar中有很多小的svg ICON，關於SVG的屬性我都藉由props的方式來把值傳進去，於是引入component時每個Component標籤變得很冗長，這時忽然想到解構賦值的方法，想請問props能否藉由解構賦值的方式傳進Component標籤呢？

解答：
用可以在父層將資料安入state內，然後render進component內，在component內使用陣列方法map()將資料轉變為jsx tag回傳，以我這隻練習來說，我有class nav(父層)和class navItem(子層)，我將SVG的資料放在父層component的state內：

class nav extends Component {
  state={
    svg_list:[{...},{...},...] //SVG資料
  }
  render() {
        return (
            <div className="nav-bar">
                <div className="navbar-nav">
                    <Logo/>
                    {this.state.svg_list.map((svg,key)=>(
                        <NavItem key={key} svg={svg}/>
                    ))}
                  //此處我將state內的svg_list進行map()處理，回傳<NavItem/>標籤，map()在此處的功能相當於Vue.js的v-for，Angular的NgRepeat，可以逐列地產生陣列資列於HTML上。
                </div>
            </div>
        );
    }
}

然後在子層Class NavItem將資料以props的方式將SVG資料帶入：
class navItem extends Component {
    render() {
        const {svg} = this.props;//在render函式內以解構賦值的方式將this.props內的svg參數帶進{svg}變數內。
        return (
            <li className="nav-item">
                <label className="nav-link">
                    <svg
                        aria-hidden={svg.aria_hidden}
                        focusable={svg.falsable}
                        data-prefix={svg.prefix}
                        data-icon={svg.dataIcon}
                        role={svg.role}
                        xmlns={svg.xmlns}
                        viewBox={svg.viewBox}
                        className={svg.svg_className}
                    >
                        <g className="fa-group">
                            <path
                                fill={svg.path_fill1}
                                d={svg.path_d1}
                                className={svg.path_className1}
                            ></path>
                            <path
                                fill={svg.path_fill2}
                                d={svg.path_d2}
                                className={svg.className2}
                            ></path>
                        </g>
                    </svg>
                    <span className="link-text">{svg.link_text}</span>
                </label>
            </li>
        );
    }
}
