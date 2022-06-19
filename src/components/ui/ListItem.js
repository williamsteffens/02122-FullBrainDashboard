import likesBadge from '../assets/likes_badge2.png';
import questionsBadge from '../assets/likes_badge.png';
// import questionsBadge from '../assets/questions_asked.png';
import sharedPostsBadge from '../assets/shared_posts.png';
import sharedResourcesBadge from '../assets/shared_resources.png';
import ProgressBar from '../charts/ProgressBar';

const handleBadges = (name) => {
    if(name==='Likes Received'){
        return likesBadge
    }
    if(name==='Questions Asked'){
        return questionsBadge
    }
    if(name==='Shared Posts'){
        return sharedPostsBadge
    }
    if(name==='Shared Resources'){
        return sharedResourcesBadge
    }
}

const ListItem = ({data}) => {
    const progress = `${Math.round(data.value/data.threshold*100)}`
    return (
        <div>
            <li className="flex border border-gray-300 rounded-md h-28 list-item">
                <img src={handleBadges(data.name)} alt={data.name} className="ml-3 list-image"/>
                <div className="details-container w-full h-full p-2">
                    <div className="text-containers flex w-full justify-between mb-4 ml-4">
                        <div className="text-containers-headers flex ml-6 mr-2 w-full">
                            <div className="flex flex-col w-full">
                                <h5 className="text-lg font-medium milestone-header">{data.name}</h5>
                                <h6 className="text-base milestone-description">{"Test description"}</h6>
                            </div>
                        </div>
                        <div className="text-containers-headers-details flex flex-col grid grid-cols-1 divide-y mr-5 ">
                            <div className="font-light text-slate-500">{"Unlocked dd-mm-yyy @ hh-mm"}</div>
                            <div className="font-light text-slate-500">{"69% of Full brain have unlocked this message"}</div>
                        </div>
                    </div>

                    <div className="chart-containers flex">
                        <div className="flex  list-item-chart-progress-bar w-80"> 
                            <ProgressBar bgcolor="#7D61E3" progress={progress} height={20}/>
                        </div>
                        <div className="ml-3 text-sm">{`${data.value}/${data.threshold}`}</div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default ListItem;