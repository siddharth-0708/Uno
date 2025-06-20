import styles from './index.css';
import Card from "./src/card/Card";
import PreLoader from "./src/preLoader/PreLoader";
import { resources } from "./resources";
import { useEffect, useState } from "react";
import { unoActions } from './src/store/gameSlices';
import { useDispatch } from "react-redux";

function FirstComponent() {
    const [data, setData] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const dispatch = useDispatch();

    const calculatePercentage = () => {
        return Math.round(((percentage / resources.length) * 100)) + '%';
    }

    const createPreloadLinkElement = (resource) => {
        const link = document.createElement('link');
        link.as = resource.kind;
        link.crossOrigin = '';
        link.href = resource.url;
        link.rel = 'preload';

        return link;
    }
    const schedulePreload = (resources) => {
        const promises = resources.map((resource,index) => {
            return new Promise((resolve, reject) => {
                const link = createPreloadLinkElement(resource);
                document.head.appendChild(link);
                link.onload = () => {
                    setTimeout(() => {
                        setPercentage((data)=> data + 1);
                        resolve();    
                    }, index * 1000);
                } 
                link.onerror = () => reject();
            })
        });
        return Promise.all(promises);
    }
    useEffect(()=>{
        schedulePreload(resources).then(() => {
            setTimeout(() => {
                dispatch(unoActions.setInitCardsData()); //check this
                setData(true);
            }, 500);
        }).catch(() => {
            setData(false)
        });
    },[])

    return(
        <>
        {!data && <PreLoader percentage = {calculatePercentage()}></PreLoader>}
        {data ? (
            <div className = {styles.gameParent}>
                <Card/>
            </div>
        ) : null}
        </>
    ) 
}
export default FirstComponent;