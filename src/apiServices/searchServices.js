import * as request from '~/utils/request';

// fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`) //C1. fetch trực tiếp

// C2. axios gọi trực tiếp
// request
//         .get('users/search', {    // apiURL gọn vậy là do custom ở request.js rồi
//             params: {
//                 q: debounced,
//                 type: 'less',
//             },
//         })
//         .then((res) => {
//             setSearchResult(res.data); // res.data.data nhưng do custom ở request.js rồi
//             setLoading(false);
//         })
//         .catch(() => {
//             setLoading(false);
//         });

// C3. async/ await
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
