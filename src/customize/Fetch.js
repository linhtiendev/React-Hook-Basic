import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url);
                // kiểm tra giá trị data, nếu không có sẽ in ra mảng rỗng
                let data =
                    res && res.data && res.data.data ? res.data.data : [];
                // nếu có data sẽ set lại state
                setData(data);
                // hàm sẽ chạy khi isLoading = false
                setIsLoading(false);
                // hàm kiểm tra lỗi
                setIsError(false);
            }
            fetchData();
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
        }
        // truyền vào 1 mảng rỗng để hàm chỉ chạy một lần
    }, []);
    return { data, isLoading, isError };
};
export default useFetch;
