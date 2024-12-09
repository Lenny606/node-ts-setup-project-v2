//custom types for extending global TS (for 3rs party libs)

import * as express from "express-serve-static-core"

declare global {
    namespace Express {
        interface Request {
            customField?: string
        }
    }
}
