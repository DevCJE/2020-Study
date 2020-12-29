package net.slipp.controller;

import javax.servlet.http.HttpServletResponse;

public class HttpUtilsAPI {

    /** API Load Failed API */
    public static void apiFailed(HttpServletResponse response){
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    }

}
