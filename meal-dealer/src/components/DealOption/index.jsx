function DealOption({item, addItem }) {
    return (
        <li key={item.uuid} className={'meal-choice-list-item'}>
            <button className={'invisible-button meal-choice-list-item'}
                 onClick={addItem}>
                    <img loading="lazy" width="100%" src={item.image} alt={item.name}/>
                    <div className={'main-choice-list-item-about'}>
                        <p> <a target="_blank" href={item.link}>
                            {item.name}</a></p>
                    </div>
            </button>
        </li>
    );
}

export default DealOption