export const ActionCreator=(type,...argNames)=>{
    return (...args)=>{
        const action={type};
        argNames.forEach((arg,index)=>{
            action[argNames[index]]=arg[index];

        });
        return action;
    };
};