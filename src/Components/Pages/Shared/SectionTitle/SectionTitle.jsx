
const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto md:w-4/12">
            <h3 className="text-2xl text-red-900 font-serif font-bold text-center my-10 border-b-4 border-b-red-900">{heading}</h3>
        </div>
    );
};

export default SectionTitle;