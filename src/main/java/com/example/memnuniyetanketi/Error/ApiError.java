package com.example.memnuniyetanketi.Error;

import lombok.Data;

import java.util.Date;
import java.util.Map;

@Data
public class ApiError {

    private String message;
    private String path;
    private int status;

    private Long timestamp =new Date().getTime();
    private Map<String, String> ValidationErrors;


    public ApiError(int status, String message, String path){

        this.status = status;
        this.message = message;
        this.path = path;

    }

}
