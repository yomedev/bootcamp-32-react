import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfileService } from "../../services/users.service";

export const getProfileThunk = createAsyncThunk('profile/getProfile', getProfileService)