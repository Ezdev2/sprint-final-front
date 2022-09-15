// import { Http } from "./http";
import axios from "axios";
import { useState, useEffect } from "react";
import { SearchBar } from "../../components/display/search";
import { Friend } from "../../components/friend";
import ChatIcon from "../../components/icons/chat";
import { Posts } from "../../components/posts";
import './style.scss';

export function Actuality() {
    const [post, setPost] = useState([]);
    const fetchDataPost = async function() {
        try {
            await axios.get(`https://virtserver.swaggerhub.com/FANSOAEZRA/social_media_api/0.0.1/posts`)  
                .then(res => {  
                const testData = res.data;  
                setPost(testData);
            })
        } catch (error) {
            console.log("tsy azo le postData", error);
        }
    }
    // const convertImage = function() {
    //     var img = new Image();
    //     img.crossOrigin = 'Anonymous';
    
    //     img.onload = function () {
    //         var canvas = document.createElement('canvas'),
    //         ctx = canvas.getContext('2d');
        
    //         canvas.height = img.naturalHeight;
    //         canvas.width = img.naturalWidth;
    //         ctx.drawImage(img, 0, 0);
        
    //         var uri = canvas.toDataURL("../../../public/logo.192.png"),
    //         b64 = uri.replace(/^data:image.+;base64,/, '');
    //         console.log(b64);
    //     };
    // }
    useEffect(() => {
        fetchDataPost();
        }, []);
    return (
        <div>
            <div className="actuality__container">
                <div className="actuality__leftBar">
                    <SearchBar/>
                    <Friend />
                </div>
                <div className="actuality__content">
                    <div className="header">
                        <h1>Actualités</h1>
                        <div className="head-menu">
                            <div className="new-post">
                                <p className="boldText">Nouvelle publication</p>
                            </div>
                            <div className="profil_entrie">
                                <p className="boldText">Mon Profil</p>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <circle cx="20" cy="20" r="20" fill="url(#pattern0)"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use href="#image0_480_1601" transform="scale(0.00444444)"/>
                                    </pattern>
                                    <image id="image0_480_1601" width="225" height="225" href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMWFRUVFRUVFRUVFxUVFRgVFRUXFxUYFxYYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8mICUtNSsuLS0tLS0rLS0tLTctMC0tLSstLS0tLS01LzUrMC8tLS8uLystLS4tMjIrKy4tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQIHAwQGBf/EAEIQAAECAgUJBAgEBQQDAAAAAAEAEQJhAzFBUXEEEiFSYnKh8PEFBoGRByJCgqLC0eETMrHBFCMkktIWM0OyVHOD/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIDBAUGAQf/xAAyEQACAQIDBQQKAwEAAAAAAAAAAQIDEQQFMRIhQVGRYXHB0QYTFCIygaGx4fAzUnLx/9oADAMBAAIRAxEAPwDc/BqhqzMk6tebxJOQ9ZlFJOZg3DZQDi9e1gr0eWripyWs3VeZNfvICcGq2ccU6tPWwTkPbvJzN7t1AD5vXtYJy94uE05LWbqvMgLxNAB5NUbpGag8mqGrMqt9nqMzNQdHrO9JAOrXnWwTi9e1gnMwbhspyWs3UBejy1cU4NVs44pzJr95TkPbvIB1a462CHzesa0wnM3uOyh6tWN2SAr+L23yE05e6RmoR9wKhMTVHS4i8zQEHk1WzMp1a862CDo9u8nM3uGygHF69rDBXo8tXFT9q2s3U6tY1+8gA8mq2cU6tcbzJOQ9u8nMybjJAOL1jWmFeL1m+QmpyWrEoZK8lqhOGaAdHuFxmoPJqtnFXmRF5moOj27yArnWCqMbgiAx4vbrSknR7tlXktV7s05k09pATg3w/V06t832QdH+ZYRnH93uGygMjEMX+LC5lej37P3WIH3b5FnzJpbSAnBrdWU0bwta7amnIf5ppyHreckAbxezWnJOL260pJyWr92SvJar3ZoCD7PdspVJvh+rpzJp7S4xpI4P837IDOEv+rfN9leL/F9GUhHlxf8AxXDHllECQaSAG0Z0IIuzdKHqTehz9Hv2funBrdWU0hifSCDMaQ0tpXkPV700PCcGs1ZzRvF9La05JyHrfaknJat9mSAcXt1pSUija2T3bP3SIt+7Ve7NYwjzsuae0gMx5NVs43unVvm+yDo/zJzN/wDFAOL/ABfRk6Pfs/dD1b5VeZNLaQE4NbqymnBrNWc1eQ9XvTU5D1+9JAOrX7UlM7xf4sLljGbJ+Ly2VkB92+VAXN2UTRtIgHBrNWc06tftSwTkPX70k5m8tlASI+L260pKAfR7tieKy5LW7qvMmu3kBKpN8P1dOrXbX2TkPZvJzN7zsoBxezWnJONj37MsUPVqzuyV5LVNKaAnBrdWU04NZqzmryHq96anIesb0kBgQ+hptftfZeS7y99oKAmioAKWkDiKIv8AhgzbTEQbAfGxT0g94TQQDJ6ItSUgeOIVwwVeqbM7SBcAZLWEUQCsjHizosqymNWPrq2nBc+19n7ofR7T7ayjKCTS0sUQOjNfNga7MhYL52aLguP+IE1yQRg1KxNcDqIRjBbMFZdh2MiyykoTnUUcVGXf1CR5io+K2H3T76/jRCgyhhHFohjDQw0kVgi1Yrm0GrRofWyLxxTMbF4Glio2mt/B8V+8jf3F9D60pIS2m63Vk1q873H7cOVZO0ZelomgpDbFC3qRCZAIxhK9FyHqbamqWrHB16MqNR05aowEMqvhn9lmB9Wv2vsnIesb0k5m942V4VDi/wAX0ZOj/L90PVrd1OZNdvIBwb4fq6dWu2vsnIezeTmb3nZQDi9mtOSxiPi9utKSyPVqzuyTktV7s0BjCPCwm7ZnisuDWav1V501NOanIezeQFztrgiabwiAj+L260pJ0e7ZTk3GQmrzIC4zQE4NXs4Xp1b5sUH6VPZvJ1a178EA4vVtY3Mj/R7zq4J+9bW7qvR7GuxQE4N8MherwbS120n7VPZvL4Xe7tz+EoM6H/cjObRQmyK2Mi0AacSBaiVyyjSlVmoQ1Zl3g7z5PkmiMmOkIcUUOmIg1RRGqDx8AV4jLvSBlUb/AIYgohh+JH4xRaD/AGrylLSxRRGKImKKIkxREuSTWSVwxUmkQgExEgACtzUJmSu2UtTssNk+Gox99bT5vTpodrtDLqSljNLSxGOMs8RYVBgGAAGgCpdPJskpaeJqOjjjOzCSBiah4r3XZfciFoYsoiMRYGKih0QvcYneJpMvW0FDDBCIYIRDCKoYQAB4BYtTErSJGvmlOmtmkr2+SNSUvdrLIQ5yeNpZsR8oSSvlgkG4gsQawbQQt5L4Xefu3BlUJiAENMB6sdT7Md4nZ5gwhiN/vFVDNrytUVlzRreCJw6q4qKCKExQRAiKEkEGsEFiPMLlWendG9Tuj1vo0ynNyuKCykoov7oCIgfAZ62lxfS181ozsfLzk9PR0w0/hxgkXw1RATzSVu+hpYY4RFCc6GICIEe0CHEUMlVUW85HP6LjXVTg19V+LGfF7daRuTo92yr+9bW7qdHsAuM1A0JODV7OF7p1aWtinBqns3k6ta9+6gHF6trG5kf6Pfs4If1rb2t1OXsIuE0A4NWdWQvV4NZqzmnIeyRmpyLxMyQF6tftKcX+KRuTlrSbxJP3ra3dQFzdlFGFxRAU+TVi6Ymg+7Xi8zUbwaoasyjfVrzrYIAPN6trFOjz1cE4vXtYK9Hlq4oCcGr2cFerS1sVODVbOOKdWuOtggHF6trFao9ImX/iZYYASYaGGGAbxGfEfiA91bXbxevamFo3tqmMeUU8ZL51NSHwzy3BlZTW83/o/SUq8pvgvudGkiYOvR+jzsnPpIsoiDijObB/7CNJ8AR4xSXlsriq81tnu1kX4OS0UDMc0RRb0frRcS3gqcTOysbrNK7p0tlavd5+R9NERa85kIiIDwHf3s7MpoKeEaKUGGPfhGg+MP8A0Xmlsfvrk+fksRtgigjHnmn4YolrhbPDSvA6nK6rnh1fhuC9n3E70ihIyamiaiJ/l0h/44ifyk6hPkZHR4xFe1cycThoYim6c9Pt2m/+DV7MwnVrxrYrWncvvgaLNyfKIv5dVHSH/iNgivgn7OFWyurXnWwVDVjhcZgqmFqbE/k+YHm9W1ij/R56uCHzevawwTo8tXFeGIODV7OCH7tcNYTTg1WzjinVrjrYIC8XqF8ypxeo3yMkI8XrGtMJxes60ggHR7jcJK8Gr2cE6PcLjNQeTVbOKAZwvKK520FUBjyHrO9JOZg3DZTi9utKSdHu2Z4oByWs3UP7PJr95KpN8P1dYHT+rT1vsgKCSzeD235yy5m9x2VAPF/i+jK9Hv2fugLyWs3ZLQMcecTFeSfPSt+RFg9TD+2U1oCjqGAVlPidP6OL+V/58TCGiz6WCDWigg/uiA/dbpWm+zz/AFND/wC6h/7wrciw8Vqi7OH70V3hSKJCVjCFjGlMoXtVQBF4D5nec/0lNuHiQFq5bO71j+kpt0f94VrFbDCfC+86PJ/4Zd/ggiIss24WzfR32zFS0MVBGSYqFs02mjOiEYQkNgYVrNek9H1Nm5bAHb8SCkgOGbnt8AUZK6NZmtFVsNLsV18vwbZ5LWbqvMmv3lODfD9XTq3zfZUHCjkPbvJzN7jspxf4voyvR79n7oCclqxuyQ9WqE4Zpwa3VlNDok1lebOaAE/Z6jMzWMJJwNT1neUZ8Ltaf2WQHi/xSkgMmlCiZuzxRAOS1XuzTmTT2k4NZqzmp1a/a+yAhH2f5kEPNr/4q8X+L6MnR/l+6AHq3ypzJpbScG+H6unVrtr7IDjymJoIjdDEQ8gfzTWg6OoYBbv7x5RmZJTx3UNI20TCQDLSQtJK2mdV6OxtCpLm19P+nBS0hgjhjFcJEQxhL/stxUmV1GHSCAQZEOFp7KhoC2T3MyuGnySAHTFRfyor/V/L8Jh4rGxMdGZWawVoza08T6Yyg2sfNdyjicPesBk0K5QFhtrgaKbg/hQREUSs6na9Dn0FJBrwRQjEhhxZamZbkIWvu+fY/wCFSfiwD+XSHTs0lowNeLyWZhJpPZZusorxjJ0nx3o84iIs86AoK9L6OqAxZbCdSjpI9OAg+deZWw/RZkXq01MQ+cYaOEShGdEQcYof7VGW5GuzSoqeEm+at13Hux0f5k5m/wDinF/i+jJ0f5fuqDgwerfKrzJpbSnBvh+rq9Wu2vsgHIer3prEjynW85K8Xs1pyTi9utKSAjcit9mSp6tV7s04WPdszxTg1mrOaAaNpFc7a4IgJyHrG9JOZveNlH8XqOtIo/0e46uCAclrd1XmTXbynBq9nC9Xq0tbFATkPZvJzN7zspxeraxuZY0lJDCDFEQIQCTEdAYaSDcJoDyPpM7QzMnhoR+amjD7lGRESJZ2YPNaxX1u8/bByvKIqWqAepRi6AO2i8kk+LWL5KvirI73LcK8Ph4wer3vvfloYUw0FfS7m9s/w1P65ajpGhjuhPsx+BJBkTcugy6BChUipKzMqtTjUi4y0ZvNF4Duf3sEAFBlBaEaKOkPsiyGOVxstXvwX0iorWTg4uzOTxGHnQlsy+T5hERQMcLrdo0NHHRRw0rfh5pMROgADTnPYzO8lzU1LDBCYoiIYQHJJYAXkmpa473d6P4j+TQuKIH1oqjSEVaLIZWqynBye4ysJh51prZ3W48vyfFMUJJzSTCCQCQxIfQSLCQyLp0ETHHQu4trF3R10XuC3J3MyYUeRUAb80ApDe9J674esB4LTa2H3L74wZsGTZQRAYQIKOlqhMIAEMEWqWtqMjX5NXRqM8o1atBerV7O76HvOS1u6nMmu3lODV7OF7q9WlrYqk4sg6PZvJzN7zspxeraxuZH+j37OCAclqzuyV5LVHdmpwas6sgrwazVmEA501AXGanIezeV6tftKcXq2sUBXN8KqmadUIgB83rN8hNQfYG4XGavJlMTRulhF5mgIPJqtnFOrWvrYIPN6n9reTo9r6uCAcXr2t1a07996fxicnoYnoxopIx/yEH8o2AbbTIafo+kLvIYHySiLREfzoh7II/24biRpMiBaW12rIR4nT5NllksRVX+V4+XUIiK06YLp0w9YruLqU/5j4fooT0IyONes7E7XpqGjgEEXq5o9WLTDVdZ4MvJlegoIWhhFwA4LHq70YWKipRSZ6qi73H2qIGYibgQf1WNN3ti9miAnFEYuAA/VeaRY+xE13stLl9zk7c7SpaaCLPiJDaIRohHgP1XmF97KoXgiGyf0XwVkUtDZYVJRsjKiDkYrurrZNDpe5dlZENDMiERFMkeg7vd7soyVoP9yiFUER0wjYi9nAuJBbK7D7foMrh/lResNMVHFopITeRbDMOFpVZ0FNFBEI4IjDFCXhihLEGRUHBM1ONymjiLyj7sua4968dTffF629rBXo94uE15Xub3qGVD8KlaGmhDuNAjhHtQCw3jxFw9V1awC8TVTVjjsRh50Kjp1FvQHk1UpGanIF0zJVvG6czNTkG+RkvCkctaTeJK8Xr2sFOXtBuEkeuVbezggDC4omdMqIC8Gs1ZlOrX7Sch6zvSTmb3DZQDi9e1hcy6HbvaQyagpKY1ww+rcYjohgPvEaV3ojXfa1m6vCek/KyIaGhf8xipIriIdEDi8mKL+1exV2ZeBoevxEab0b39y3s8DSUkURMUReIkxEmsklyfNcapKiyD6AlZBERCQXTpj6xXbJZdElQmRkZUTOHqcPgvQwxPpC86Auahp4oKj4WKiUbmLWp7eh91lF8uHtSK2EHBwpH2nFYAOKhsMoVCZ9OkjADksF5+Jn0VWYLKlpYoi8RdYwhyysjGxk0qewdqghYY6VyIiyEZIVZAFSUPNTEoiL0kcuS5RHRxw0kEWbHARFDELCP1ErVunsDtSHKqCCmhDP8Amh1Ixoi8H4ELSK936LMuaOmoCdBApYRMEQRvIvB5KE1uNJnmFVSh6xax+3HzNh8XrGtMIfN7daQTktWN2SkRr4tUBfDNUnGkii63DVxSGGqXwzOKkMPiZ1YnaWY6PWd5AXO2gqjG6FEBjxe3WlJPFrHu2Z4qnq1XuzUHR6mntIA3g1lebObrVXpJpXy1tWigHmYon+JbVHR/mWq/SVQmHLM7S0dFAQZgxQlvIeanDU3WQ29q38meVREVx2YREQHBlMdi4AF3mWBooblBxbItXOmi7RoBeeCxOTz581HZZHZZ10XY/hp8FRk4vTZY2WdZcmTjSucUIWYhAXqiz1RKiIrCYdERAEREAXqPRsT/ABv/AMqR5h4NHmy8uveei3s851LlBGgAUUJvciKkaeiDzKjLQwM0moYSbfK3XcbC4NbqymjSZtLas5pyHq96ach6/ekqDgQ0nfS1+1LBOL260pJyWreWyryW+WaAmbsomjaRAODWas5p1a/a+ych6xOKSczJvEkA4v8AF9GXm+/PYRyqhEUAeloiTDtA/mo8dAIN4a1ek5LW7qvMmu3l6nYuoV5UKiqQ1RoGIEEghiCxB0EEVgiwqLcHb3dPJ8qJiINHSH/khYH/AOgqixrmvGZb6Psqg/24qOlGJgjxzYtAE85WqaZ2OGznDVV7z2XyfnoeSRfYpe62Ww15NSe7mx+WYS66VJ2ZlENdBTDGipB+yldGwjXpS+GSfc0dRFaWEw/mBh3gR+qwzxePNely36GSKOqgCIiAIERDwIiIehERAEXLkuTx0kcNHRwmOOItDDDpJ+07F7jsn0dFxFlNKGrzKK2RpCK5AeK8bS1MXE42jhlepK3Zx6Hk+w+xqXK6TMowwDZ9IR6sEN5vNwrPmRuTszIIKCigoYA0MAqtvMZNsRLnxWWQ5FR0MAgooBBCKgKheY7ybyufmYN52VTKVzj8xzKWLlZK0VovF/u4cXs1pyTi9utKSclqzuyV5LVGUM1E1hOFj3bM04NZqzmrzIC4zUHR7N5AV9rgiObwqgMeL1HWkU6PcbhJXi9ZvkJp0e4XGaAnBq9nBXq0tbFTg1WzinVp62CAcXq2scEf6PedXBY5/i9e1hgsujy1cUA4NWdWQV4SuF4mnBqtnFTlrjeZIC8XqF4vK4oqCA1wwxPUTCDnSOhcnF6xfMSTi9Z1pBD1O2h1KTsygP5qGiOnSTRwFjq1VLhj7v5IXfJaCf8AKo9GGjSvoj7PcNUzUJaV2zjivbk1WqLST6nzD3ayP/xaGqr8OGrWqrWH+l8i0f01FL1R6173L60Jey12nrYK8Xr2sEuyftNb+76s+P8A6WyH/wAairrzazcqe62Q6f6ain6tWF6+x0e8auKcGq2ZFLse1V/7y6s+T/pnItP9LQzGZCWF6wp+62RRw5v8NRhxoMEIgia/OhYgr7HC4XTMk5IvmJJdhYqsnfbfVngss9G8JL0OUEA1CkgERPvQkN5Ljyb0bl3pMp9Wo5kGl7niOjFitg8Xr2pBYmP6PcNXFe7bMxZxjFG239F5Hz+xuwqDJARRQMdGfGfWjl637BhJfS6tLWxQeTVP7OOKdWnrYKJr6lSVSW1N3faOL1bWOCdHvOrgh83r2sFej3jVE0IEPk1Z1ZBXg1Y1ZhODVHVkVODVDVmZIC9WvF5moPN6trFDyLSbxJYiNze9ZHtYIDPNOqFVjmi4ogLyWqExNOZEXmanBrNWc0b6tftIAP1qe3eWERu8b31d1ZReb17WCAfR/k+6AAcK2s3Vl1k1+KnBvh+rp1a7aQF5D27ynIvJuMk4v8UxcnGx79lAOS1YkJK8lqhOGacGt1ZTU4NZqzN6AcyIvM1xjSxsNT2yiWRheyeO0LlW8X+LC5AUc3vdgn7VtZup0eWrinBqtnG90BesgLxNOQ9u8p1a7aTi9mtMXIByLybjJOTeDcJK8Xt1pKE3WW3bOKAkZbRba1m7NSEed1jXmaQwtY0tWZvWQH1a86yADzep7d5Oj2vdupxevawuZXo8tXFAQ/pW1m6rzIC8TU4NVs43unVrtpAXkPUZxTU5BNZkZJxezWnJYxOZvbfJkBCXwFZFYNwksgPBq2s3UA8G0PdslXg3wzN6AOLyiudtIgEVZwQVjBVEBjDYlnvIiAsXteCWnBEQCH2fFQVDFEQCKo4qxe1gqiAkNm6kPs+KIgIaveVi9rwREANZ3UhrhwREBIahikVuKiIDKL2sFRWN1EQGMPs+KWe8iICxe14IazgqiAkNYwUhqGKIgBqOKsXtIiA4kREB/9k="/>
                                    </defs>
                                </svg>
                            </div>
                            <div className="chat_entrie">
                                <p className="boldText">Chat</p>
                                <ChatIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="posts">
                        <div>{post}</div>
                        {post.length > 0 &&
                            post.map((items, index) => (
                            <Posts img={items.image} description={items.description} date={items.postingDate} key={index} />
                        ))}
                        {/* <Posts img="" description="" date=""/> */}
                        {/* <Posts/> */}
                    </div>
                </div>
                <div className="actuality__rightBar">p</div>
            </div>
        </div>
    );
}